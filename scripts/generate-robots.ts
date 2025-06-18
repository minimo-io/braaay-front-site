// scripts/generate-robots.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

interface SitemapEntry {
	loc: string;
	lastmod?: string;
}

async function fetchSitemapIndex(url: string): Promise<SitemapEntry[]> {
	try {
		const response = await fetch(url);
		const xmlText = await response.text();

		// Parse XML to extract sitemap URLs
		const sitemapUrls = extractSitemapUrls(xmlText);
		console.log(`Found ${sitemapUrls.length} sitemaps`);

		return sitemapUrls;
	} catch (error) {
		console.error('Error fetching sitemap index:', error);
		return [];
	}
}

function extractSitemapUrls(xmlText: string): SitemapEntry[] {
	const sitemaps: SitemapEntry[] = [];

	// Simple regex to extract sitemap URLs (you might want to use a proper XML parser)
	const sitemapRegex =
		/<sitemap>\s*<loc>(.*?)<\/loc>(?:\s*<lastmod>(.*?)<\/lastmod>)?\s*<\/sitemap>/g;

	let match;
	while ((match = sitemapRegex.exec(xmlText)) !== null) {
		sitemaps.push({
			loc: match[1],
			lastmod: match[2] || undefined
		});
	}

	return sitemaps;
}

function generateRobotsTxt(sitemaps: SitemapEntry[], baseDomain: string): string {
	const robotsContent = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /admin/
Disallow: /api/private/

# Allow specific bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemaps from ${new URL('https://braaay.com/sitemap_index.xml').hostname}
${sitemaps
	.map((sitemap) => {
		// Replace the original domain with our base domain
		const newUrl = sitemap.loc.replace('https://braaay.com', baseDomain);
		return `Sitemap: ${newUrl}`;
	})
	.join('\n')}

# Main sitemap index
Sitemap: ${baseDomain}/sitemap_index.xml

Crawl-delay: 1`;

	return robotsContent;
}

async function main() {
	const baseDomain = process.env.BASE_DOMAIN || 'https://localhost:5173';
	const sitemapIndexUrl = 'https://braaay.com/sitemap_index.xml';

	console.log(`Generating robots.txt for domain: ${baseDomain}`);
	console.log(`Fetching sitemap from: ${sitemapIndexUrl}`);

	// Fetch and parse sitemap index
	const sitemaps = await fetchSitemapIndex(sitemapIndexUrl);

	// Generate robots.txt content
	const robotsContent = generateRobotsTxt(sitemaps, baseDomain);

	// Ensure static directory exists
	const staticDir = join(process.cwd(), 'static');
	try {
		mkdirSync(staticDir, { recursive: true });
	} catch (err) {
		// Directory might already exist
		console.error(err);
	}

	// Write robots.txt to static folder
	const robotsPath = join(staticDir, 'robots.txt');
	writeFileSync(robotsPath, robotsContent, 'utf8');

	console.log(`✅ Generated robots.txt at ${robotsPath}`);
	console.log('\nContent preview:');
	console.log(robotsContent.split('\n').slice(0, 10).join('\n') + '\n...');
}

// Run the script
main().catch(console.error);
