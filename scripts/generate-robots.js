// scripts/generate-sitemaps.ts
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
// Configuration
const API_DOMAIN = 'https://braaay.com';
const FRONT_DOMAIN = 'https://braaay-front-site.vercel.app'; // No trailing slash
const REQUEST_DELAY = 100; // ms between requests
async function fetchContent(url) {
    try {
        console.log(`Fetching: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }
        return await response.text();
    }
    catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return '';
    }
}
/**
 * Fetches the robots.txt from the API_DOMAIN and extracts all Sitemap URLs.
 * @returns An array of Sitemap URLs found in robots.txt.
 */
async function fetchRobotsTxtSitemapUrls(robotsTxtUrl) {
    console.log(`📋 Fetching robots.txt from ${robotsTxtUrl}...`);
    const robotsText = await fetchContent(robotsTxtUrl);
    const sitemapUrls = [];
    const sitemapRegex = /Sitemap:\s*(.*)/g;
    let match;
    while ((match = sitemapRegex.exec(robotsText)) !== null) {
        const sitemapUrl = match[1].trim();
        // Only include sitemaps from the API_DOMAIN
        if (sitemapUrl.startsWith(API_DOMAIN)) {
            sitemapUrls.push(sitemapUrl);
        }
    }
    console.log(`✅ Found ${sitemapUrls.length} sitemaps in robots.txt`);
    return sitemapUrls;
}
/**
 * Processes a sitemap file (index or regular) by downloading it,
 * replacing domains, and saving it. If it's an index, it recursively
 * processes its children.
 * @param sitemapUrl The URL of the sitemap file to process.
 * @param staticDir The base directory to save the processed files.
 * @returns A list of relative paths (e.g., 'sitemap_index.xml', 'uy/sitemap_index.xml')
 * that were generated (including children if it's an index).
 */
async function processSitemapFile(sitemapUrl, staticDir) {
    console.log(`📥 Processing sitemap: ${sitemapUrl}`);
    const sitemapContent = await fetchContent(sitemapUrl);
    if (!sitemapContent) {
        console.warn(`Skipping empty sitemap content for ${sitemapUrl}`);
        return [];
    }
    // --- CRITICAL FIX START ---
    // Get the path relative to the API_DOMAIN's base path (e.g., 'sitemap_index.xml' or 'uy/sitemap_index.xml')
    const urlObj = new URL(sitemapUrl);
    // Remove leading slash if present from pathname to make it truly relative for join
    let relativeOutputPath = urlObj.pathname.startsWith('/')
        ? urlObj.pathname.substring(1)
        : urlObj.pathname;
    // Ensure the relative path doesn't contain query parameters or fragments
    relativeOutputPath = relativeOutputPath.split('?')[0].split('#')[0];
    const filename = relativeOutputPath.split('/').pop() || 'sitemap.xml';
    // The directory part for the file, e.g., 'uy/' or '' for root sitemaps
    const fileDir = relativeOutputPath.substring(0, relativeOutputPath.lastIndexOf(filename));
    // Full absolute path for the directory where the file should be saved
    const targetDir = join(staticDir, fileDir);
    // Ensure the directory structure exists (e.g., static/uy/)
    mkdirSync(targetDir, { recursive: true });
    // --- CRITICAL FIX END ---
    // Replace API_DOMAIN with FRONT_DOMAIN in the content
    const escapedApiDomainForContent = API_DOMAIN.replace(/\./g, '\\.');
    const processedContent = sitemapContent.replace(new RegExp(escapedApiDomainForContent, 'g'), FRONT_DOMAIN);
    // Correctly join target directory and filename to create the full output path
    const outputPath = join(targetDir, filename);
    writeFileSync(outputPath, processedContent, 'utf8');
    console.log(`✅ Generated ${join(staticDir.split(join()).pop() || '', relativeOutputPath)}`); // Log path relative to static/ for clarity
    const generatedRelativePaths = [relativeOutputPath]; // Store the relative path for this file
    // Check if it's a sitemap index (contains <sitemapindex> tag)
    if (sitemapContent.includes('<sitemapindex')) {
        const sitemapRegex = /<loc>(.*?)<\/loc>/g;
        let match;
        const childSitemapUrls = [];
        while ((match = sitemapRegex.exec(sitemapContent)) !== null) {
            const childUrl = match[1].trim();
            // Only process children that start with API_DOMAIN
            if (childUrl.startsWith(API_DOMAIN)) {
                childSitemapUrls.push(childUrl);
            }
        }
        for (const childUrl of childSitemapUrls) {
            await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY)); // Be respectful
            const childrenPaths = await processSitemapFile(childUrl, staticDir);
            generatedRelativePaths.push(...childrenPaths);
        }
    }
    else if (!sitemapContent.includes('<urlset')) {
        console.warn(`⁉️  Unexpected sitemap format for ${sitemapUrl}. Neither <sitemapindex> nor <urlset> found.`);
    }
    return generatedRelativePaths;
}
/**
 * Generates the robots.txt content for the front-end site.
 * It will only list the top-level sitemap index URLs discovered from the original robots.txt.
 * @param originalRobotsText The original robots.txt content (for other directives).
 * @param newDomain The front-end domain.
 * @param topLevelSitemapUrls The URLs (from the API_DOMAIN) that were found in the original robots.txt
 * and represent the root sitemaps to be listed.
 * @returns The generated robots.txt content.
 */
function generateRobotsTxt(originalRobotsText, newDomain, topLevelSitemapUrls) {
    let newRobots = originalRobotsText;
    // Remove ALL existing Sitemap entries to start fresh with our new ones
    newRobots = newRobots.replace(/Sitemap:\s*.*\n?/g, '');
    // Replace other API_DOMAIN occurrences with FRONT_DOMAIN
    // Escape dots in API_DOMAIN for regex
    const escapedApiDomainForRobots = API_DOMAIN.replace(/\./g, '\\.');
    newRobots = newRobots.replace(new RegExp(escapedApiDomainForRobots, 'g'), newDomain);
    // Add generated sitemap index URLs from the top-level list
    newRobots += '\n\n# Generated Sitemaps for Front-End\n';
    topLevelSitemapUrls.forEach((sitemapUrl) => {
        // Construct the new sitemap URL using FRONT_DOMAIN and the relative path
        const urlObj = new URL(sitemapUrl);
        let relativePath = urlObj.pathname.startsWith('/')
            ? urlObj.pathname.substring(1)
            : urlObj.pathname;
        relativePath = relativePath.split('?')[0].split('#')[0]; // Clean up any query/fragment
        const newSitemapUrl = `${newDomain}/${relativePath}`;
        newRobots += `Sitemap: ${newSitemapUrl}\n`;
    });
    return newRobots;
}
async function main() {
    const staticDir = join(process.cwd(), 'static');
    console.log(`🚀 Starting sitemap generation`);
    console.log(`API domain: ${API_DOMAIN}`);
    console.log(`New domain: ${FRONT_DOMAIN}`);
    // Ensure static directory exists
    mkdirSync(staticDir, { recursive: true });
    // 1. Fetch original robots.txt (for other directives like User-agent, Disallow etc.)
    const robotsTxtUrl = `${API_DOMAIN}/robots.txt`;
    const originalRobotsText = await fetchContent(robotsTxtUrl);
    // 2. Discover all top-level sitemap URLs from the original robots.txt
    const topLevelSitemapUrlsFromRobotsTxt = await fetchRobotsTxtSitemapUrls(robotsTxtUrl);
    // Store all unique relative paths of generated files (including children)
    const allGeneratedRelativePaths = new Set();
    // 3. Process each discovered top-level sitemap URL
    for (const sitemapUrl of topLevelSitemapUrlsFromRobotsTxt) {
        const processedFiles = await processSitemapFile(sitemapUrl, staticDir);
        processedFiles.forEach((path) => allGeneratedRelativePaths.add(path));
        await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY)); // Be respectful
    }
    // 4. Generate robots.txt for the front-end site
    console.log('\n🤖 Generating robots.txt for the front-end...');
    // Pass the original top-level sitemap URLs (from robots.txt) to be re-listed
    const newRobotsTxtContent = generateRobotsTxt(originalRobotsText, FRONT_DOMAIN, topLevelSitemapUrlsFromRobotsTxt);
    const robotsPath = join(staticDir, 'robots.txt');
    writeFileSync(robotsPath, newRobotsTxtContent, 'utf8');
    console.log(`✅ Generated robots.txt`);
    console.log('\n🎉 Generation complete!');
    console.log(`📁 Files generated in ${staticDir}:`);
    Array.from(allGeneratedRelativePaths).forEach((file) => console.log(`   - ${file}`));
    console.log(`   - robots.txt`);
}
// Run the script
main().catch(console.error);
