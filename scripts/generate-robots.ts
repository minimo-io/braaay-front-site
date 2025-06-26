// scripts/generate-sitemaps.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Configuration
const API_DOMAIN = 'https://braaay.com';
const FRONT_DOMAIN = 'https://braaay-front-site.vercel.app';
const REQUEST_DELAY = 100; // ms between requests

async function fetchRobotsTxt(): Promise<string> {
	try {
		const response = await fetch(`${API_DOMAIN}/robots.txt`);
		const robotsText = await response.text();
		console.log(`✅ Fetched robots.txt from ${API_DOMAIN}`);
		return robotsText;
	} catch (error) {
		console.error('Error fetching robots.txt:', error);
		return '';
	}
}

function extractSitemapUrls(robotsText: string): string[] {
	const sitemapUrls: string[] = [];
	const lines = robotsText.split('\n');

	for (const line of lines) {
		const trimmedLine = line.trim();
		if (trimmedLine.toLowerCase().startsWith('sitemap:')) {
			const url = trimmedLine.substring(8).trim(); // Remove "Sitemap:" prefix
			if (url) {
				sitemapUrls.push(url);
			}
		}
	}

	console.log(`📋 Found ${sitemapUrls.length} sitemap URLs in robots.txt`);
	return sitemapUrls;
}

async function downloadAndProcessFile(url: string): Promise<string> {
	try {
		console.log(`📥 Downloading: ${url}`);
		const response = await fetch(url);
		const content = await response.text();

		// Simple domain replacement
		const processedContent = content.replace(new RegExp(API_DOMAIN, 'g'), FRONT_DOMAIN);

		return processedContent;
	} catch (error) {
		console.error(`❌ Error downloading ${url}:`, error);
		return '';
	}
}

function getFilenameFromUrl(url: string): string {
	try {
		const urlObj = new URL(url);
		const pathname = urlObj.pathname;

		// Handle URLs with path segments (e.g., /uy/sitemap_index.xml)
		const segments = pathname.split('/').filter((segment) => segment);

		if (segments.length === 0) {
			return 'sitemap.xml';
		}

		// If the last segment has .xml extension, use it
		const lastSegment = segments[segments.length - 1];
		if (lastSegment.endsWith('.xml')) {
			// For paths like /uy/sitemap_index.xml, we might want to preserve the path info
			// You can choose to flatten it or preserve directory structure
			if (segments.length > 1) {
				// Option 1: Flatten with prefix (e.g., uy_sitemap_index.xml)
				return segments.join('_');

				// Option 2: Preserve directory structure (uncomment the lines below instead)
				// const dir = segments.slice(0, -1).join('/');
				// return { filename: lastSegment, dir };
			}
			return lastSegment;
		}

		// Fallback
		return segments.join('_') + '.xml';
	} catch (error) {
		console.error(`Error parsing URL ${url}:`, error);
		return 'sitemap.xml';
	}
}

async function downloadSitemapsRecursively(
	sitemapUrls: string[],
	processedUrls: Set<string> = new Set()
): Promise<string[]> {
	const generatedFiles: string[] = [];

	for (const url of sitemapUrls) {
		if (processedUrls.has(url)) {
			console.log(`⏭️  Skipping already processed: ${url}`);
			continue;
		}

		processedUrls.add(url);

		const content = await downloadAndProcessFile(url);
		if (!content) continue;

		const filename = getFilenameFromUrl(url);
		const filePath = join(process.cwd(), 'static', filename);

		writeFileSync(filePath, content, 'utf8');
		generatedFiles.push(filename);
		console.log(`✅ Generated: ${filename}`);

		// Check if this is a sitemap index that references other sitemaps
		if (content.includes('<sitemapindex') || content.includes('<sitemap>')) {
			const referencedSitemaps = extractSitemapReferences(content);
			if (referencedSitemaps.length > 0) {
				console.log(`🔍 Found ${referencedSitemaps.length} referenced sitemaps in ${filename}`);
				const additionalFiles = await downloadSitemapsRecursively(
					referencedSitemaps,
					processedUrls
				);
				generatedFiles.push(...additionalFiles);
			}
		}

		// Be respectful with delays
		await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY));
	}

	return generatedFiles;
}

function extractSitemapReferences(xmlContent: string): string[] {
	const sitemapUrls: string[] = [];
	const sitemapRegex = /<loc>(.*?)<\/loc>/g;

	let match;
	while ((match = sitemapRegex.exec(xmlContent)) !== null) {
		const url = match[1].trim();
		// Only include URLs that are from our API domain and look like sitemaps
		if (url.startsWith(API_DOMAIN) && (url.includes('sitemap') || url.endsWith('.xml'))) {
			sitemapUrls.push(url);
		}
	}

	return sitemapUrls;
}

function processRobotsTxt(originalRobots: string, generatedFiles: string[]): string {
	// Replace domain references
	const newRobots = originalRobots.replace(new RegExp(API_DOMAIN, 'g'), FRONT_DOMAIN);

	// Remove existing sitemap entries (we'll add our own)
	const lines = newRobots.split('\n');
	const filteredLines = lines.filter((line) => !line.trim().toLowerCase().startsWith('sitemap:'));

	let processedRobots = filteredLines.join('\n').trim();

	// Add our generated sitemaps
	processedRobots += '\n\n# Generated sitemaps\n';
	generatedFiles.forEach((file) => {
		processedRobots += `Sitemap: ${FRONT_DOMAIN}/${file}\n`;
	});

	return processedRobots;
}

async function main() {
	const staticDir = join(process.cwd(), 'static');

	console.log(`🚀 Starting simplified sitemap generation`);
	console.log(`API domain: ${API_DOMAIN}`);
	console.log(`Front domain: ${FRONT_DOMAIN}`);

	// Ensure static directory exists
	mkdirSync(staticDir, { recursive: true });

	// 1. Fetch and parse robots.txt to get all sitemap URLs
	console.log('\n📋 Fetching robots.txt...');
	const originalRobots = await fetchRobotsTxt();
	const sitemapUrls = extractSitemapUrls(originalRobots);

	if (sitemapUrls.length === 0) {
		console.log('❌ No sitemap URLs found in robots.txt');
		return;
	}

	// 2. Download all sitemaps recursively (handles sitemap indexes)
	console.log('\n📥 Downloading and processing sitemaps...');
	const generatedFiles = await downloadSitemapsRecursively(sitemapUrls);

	// 3. Generate new robots.txt
	console.log('\n🤖 Generating robots.txt...');
	const newRobots = processRobotsTxt(originalRobots, generatedFiles);
	const robotsPath = join(staticDir, 'robots.txt');
	writeFileSync(robotsPath, newRobots, 'utf8');
	console.log(`✅ Generated robots.txt`);

	// Summary
	console.log('\n🎉 Generation complete!');
	console.log(`📁 Files generated in ${staticDir}:`);
	console.log(`   - robots.txt`);
	generatedFiles.forEach((file) => console.log(`   - ${file}`));
	console.log(`\n📊 Total files: ${generatedFiles.length + 1}`);
}

// Run the script
main().catch(console.error);
