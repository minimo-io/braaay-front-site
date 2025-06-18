// scripts/generate-sitemaps.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
// Configuration
const ORIGINAL_DOMAIN = 'https://braaay.com';
const SITEMAP_INDEX_URL = 'https://braaay.com/sitemap_index.xml';
const REQUEST_DELAY = 100; // ms between requests
async function fetchRobotsTxt() {
    try {
        const response = await fetch(`${ORIGINAL_DOMAIN}/robots.txt`);
        const robotsText = await response.text();
        console.log(`✅ Fetched robots.txt from ${ORIGINAL_DOMAIN}`);
        return robotsText;
    }
    catch (error) {
        console.error('Error fetching robots.txt:', error);
        return '';
    }
}
async function fetchSitemapIndex() {
    try {
        const response = await fetch(SITEMAP_INDEX_URL);
        const xmlText = await response.text();
        const sitemaps = extractSitemapIndexEntries(xmlText);
        console.log(`✅ Found ${sitemaps.length} sitemaps in index`);
        return sitemaps;
    }
    catch (error) {
        console.error('Error fetching sitemap index:', error);
        return [];
    }
}
function extractSitemapIndexEntries(xmlText) {
    const sitemaps = [];
    const sitemapRegex = /<sitemap>\s*<loc>(.*?)<\/loc>(?:\s*<lastmod>(.*?)<\/lastmod>)?\s*<\/sitemap>/gs;
    let match;
    while ((match = sitemapRegex.exec(xmlText)) !== null) {
        sitemaps.push({
            loc: match[1].trim(),
            lastmod: match[2]?.trim()
        });
    }
    return sitemaps;
}
async function fetchSitemap(url) {
    try {
        console.log(`Fetching sitemap: ${url}`);
        const response = await fetch(url);
        const xmlText = await response.text();
        // Check if the original sitemap contains image elements
        const hasImages = xmlText.includes('<image:') || xmlText.includes('xmlns:image');
        const urls = extractUrlEntries(xmlText);
        return { urls, hasImages };
    }
    catch (error) {
        console.error(`Error fetching sitemap ${url}:`, error);
        return { urls: [], hasImages: false };
    }
}
function extractUrlEntries(xmlText) {
    const urls = [];
    // Use a more flexible approach - capture the entire <url> block
    const urlBlockRegex = /<url>([\s\S]*?)<\/url>/g;
    let match;
    while ((match = urlBlockRegex.exec(xmlText)) !== null) {
        const urlBlock = match[1];
        // Extract the basic required and optional elements
        const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/);
        const lastmodMatch = urlBlock.match(/<lastmod>(.*?)<\/lastmod>/);
        const changefreqMatch = urlBlock.match(/<changefreq>(.*?)<\/changefreq>/);
        const priorityMatch = urlBlock.match(/<priority>(.*?)<\/priority>/);
        // Only add the URL if we found a <loc> element (required)
        if (locMatch) {
            urls.push({
                loc: locMatch[1].trim(),
                lastmod: lastmodMatch?.[1]?.trim(),
                changefreq: changefreqMatch?.[1]?.trim(),
                priority: priorityMatch?.[1]?.trim()
            });
        }
    }
    return urls;
}
function replaceBaseDomain(url, newDomain) {
    return url.replace(ORIGINAL_DOMAIN, newDomain);
}
function generateSitemapXml(urls, newDomain, hasImages = false) {
    const urlsXml = urls
        .map((url) => {
        const newUrl = replaceBaseDomain(url.loc, newDomain);
        let urlXml = `  <url>
    <loc>${newUrl}</loc>`;
        if (url.lastmod) {
            urlXml += `
    <lastmod>${url.lastmod}</lastmod>`;
        }
        if (url.changefreq) {
            urlXml += `
    <changefreq>${url.changefreq}</changefreq>`;
        }
        if (url.priority) {
            urlXml += `
    <priority>${url.priority}</priority>`;
        }
        urlXml += `
  </url>`;
        return urlXml;
    })
        .join('\n');
    // Include image namespace if the original sitemap had images
    const namespaces = hasImages
        ? 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'
        : 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${namespaces}>
${urlsXml}
</urlset>`;
}
// function escapeXml(text: string): string {
// 	return text
// 		.replace(/&/g, '&amp;')
// 		.replace(/</g, '&lt;')
// 		.replace(/>/g, '&gt;')
// 		.replace(/"/g, '&quot;')
// 		.replace(/'/g, '&apos;');
// }
function generateSitemapIndex(sitemapFiles, newDomain) {
    const now = new Date().toISOString();
    const sitemapsXml = sitemapFiles
        .map((filename) => {
        return `  <sitemap>
    <loc>${newDomain}/${filename}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`;
    })
        .join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapsXml}
</sitemapindex>`;
}
function processRobotsTxt(originalRobots, newDomain, sitemapFiles) {
    // Replace domain references
    let newRobots = originalRobots.replace(new RegExp(ORIGINAL_DOMAIN.replace('https://', '').replace('http://', ''), 'g'), newDomain.replace('https://', '').replace('http://', ''));
    // Replace sitemap URLs
    newRobots = newRobots.replace(/Sitemap:\s*(.*)/g, (match, url) => {
        if (url.includes(ORIGINAL_DOMAIN)) {
            return `Sitemap: ${replaceBaseDomain(url, newDomain)}`;
        }
        return match;
    });
    // Add our generated sitemaps
    newRobots += '\n\n# Generated sitemaps\n';
    sitemapFiles.forEach((file) => {
        newRobots += `Sitemap: ${newDomain}/${file}\n`;
    });
    return newRobots;
}
async function main() {
    const newDomain = process.env.BASE_DOMAIN || 'https://localhost:4000';
    const staticDir = join(process.cwd(), 'static');
    console.log(`🚀 Starting sitemap generation`);
    console.log(`Original domain: ${ORIGINAL_DOMAIN}`);
    console.log(`New domain: ${newDomain}`);
    // Ensure static directory exists
    mkdirSync(staticDir, { recursive: true });
    // 1. Fetch original robots.txt
    console.log('\n📋 Fetching robots.txt...');
    const originalRobots = await fetchRobotsTxt();
    // 2. Fetch sitemap index
    console.log('\n🗂️  Fetching sitemap index...');
    const sitemapIndex = await fetchSitemapIndex();
    // 3. Fetch all individual sitemaps and their URLs
    console.log('\n📥 Fetching individual sitemaps...');
    const allUrls = [];
    const sitemapFiles = [];
    for (let i = 0; i < sitemapIndex.length; i++) {
        const sitemapEntry = sitemapIndex[i];
        const { urls, hasImages } = await fetchSitemap(sitemapEntry.loc);
        if (urls.length > 0) {
            // Extract filename from original URL
            const urlPath = new URL(sitemapEntry.loc).pathname;
            const filename = urlPath.split('/').pop() || `sitemap-${i + 1}.xml`;
            sitemapFiles.push(filename);
            // Generate sitemap XML with proper namespace if original had images
            const sitemapXml = generateSitemapXml(urls, newDomain, hasImages);
            // Write sitemap file
            const sitemapPath = join(staticDir, filename);
            writeFileSync(sitemapPath, sitemapXml, 'utf8');
            console.log(`✅ Generated ${filename} with ${urls.length} URLs${hasImages ? ' (with image namespace)' : ''}`);
            // Collect all URLs for potential use
            allUrls.push(...urls);
            // Add delay to be respectful
            await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY));
        }
    }
    // 5. Generate sitemap index
    console.log('\n📑 Generating sitemap index...');
    const sitemapIndexXml = generateSitemapIndex(sitemapFiles, newDomain);
    const indexPath = join(staticDir, 'sitemap_index.xml');
    writeFileSync(indexPath, sitemapIndexXml, 'utf8');
    console.log(`✅ Generated sitemap_index.xml`);
    // 6. Generate robots.txt
    console.log('\n🤖 Generating robots.txt...');
    const newRobots = processRobotsTxt(originalRobots, newDomain, [
        'sitemap_index.xml',
        ...sitemapFiles
    ]);
    const robotsPath = join(staticDir, 'robots.txt');
    writeFileSync(robotsPath, newRobots, 'utf8');
    console.log(`✅ Generated robots.txt`);
    console.log('\n🎉 Generation complete!');
    console.log(`📁 Files generated in ${staticDir}:`);
    console.log(`   - robots.txt`);
    console.log(`   - sitemap_index.xml`);
    sitemapFiles.forEach((file) => console.log(`   - ${file}`));
}
// Run the script
main().catch(console.error);
