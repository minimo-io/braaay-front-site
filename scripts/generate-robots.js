// scripts/generate-sitemaps.ts
import { writeFileSync, mkdirSync, readFileSync, readdirSync, statSync } from 'fs'; // Adicionado readFileSync, readdirSync, statSync
import { join } from 'path';
// Configuration
const API_DOMAIN = 'https://api.braaay.com';
const FRONT_DOMAIN = 'https://braaay.com'; // No trailing slash
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
    const sitemapContent = await fetchContent(sitemapUrl); // <<< MANTIDO COMO 'CONST' AQUI!
    if (!sitemapContent) {
        console.warn(`Skipping empty sitemap content for ${sitemapUrl}`);
        return [];
    }
    // --- CRITICAL FIX START (Lógica original de path, mantida) ---
    const urlObj = new URL(sitemapUrl);
    let relativeOutputPath = urlObj.pathname.startsWith('/')
        ? urlObj.pathname.substring(1)
        : urlObj.pathname;
    relativeOutputPath = relativeOutputPath.split('?')[0].split('#')[0];
    const filename = relativeOutputPath.split('/').pop() || 'sitemap.xml';
    const fileDir = relativeOutputPath.substring(0, relativeOutputPath.lastIndexOf(filename));
    const targetDir = join(staticDir, fileDir);
    mkdirSync(targetDir, { recursive: true });
    // --- CRITICAL FIX END ---
    // Replace API_DOMAIN with FRONT_DOMAIN in the content
    const escapedApiDomainForContent = API_DOMAIN.replace(/\./g, '\\.');
    // <<< processedContent é onde a substituição de domínio acontece.
    const processedContent = sitemapContent.replace(new RegExp(escapedApiDomainForContent, 'g'), FRONT_DOMAIN);
    // Correctly join target directory and filename to create the full output path
    const outputPath = join(targetDir, filename);
    writeFileSync(outputPath, processedContent, 'utf8'); // <<< Escrevendo processedContent
    console.log(`✅ Generated ${join(staticDir.split(join()).pop() || '', relativeOutputPath)}`); // Log path relative to static/ for clarity
    const generatedRelativePaths = [relativeOutputPath]; // Store the relative path for this file
    // Check if it's a sitemap index (contains <sitemapindex> tag)
    // <<< IMPORTANT: Continuamos usando sitemapContent (original) para esta checagem
    // para não interferir na descoberta de sitemaps filhos. A remoção de imagens será pós-processada.
    if (sitemapContent.includes('<sitemapindex')) {
        const sitemapRegex = /<loc>(.*?)<\/loc>/g;
        let match;
        const childSitemapUrls = []; // <<< CORREÇÃO DE DECLARAÇÃO
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
/**
 * Recursively finds all XML files in a directory and its subdirectories.
 * @param dir The directory to start searching from.
 * @param fileList The list to populate with file paths.
 */
function findXmlFiles(dir, fileList = []) {
    const files = readdirSync(dir);
    files.forEach((file) => {
        const filePath = join(dir, file);
        const stats = statSync(filePath);
        if (stats.isDirectory()) {
            findXmlFiles(filePath, fileList);
        }
        else if (file.endsWith('.xml')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}
/**
 * Removes image tags and namespaces from a given XML content string.
 * @param xmlContent The XML content to process.
 * @returns The XML content with image tags and namespaces removed.
 */
function removeImageTags(xmlContent) {
    // Regex para remover as tags <image:image> e seu conteúdo
    let cleanedContent = xmlContent.replace(/<image:image[^>]*>[\s\S]*?<\/image:image>/g, '');
    // Regex para remover a declaração de namespace de imagem se existir
    cleanedContent = cleanedContent.replace(/ xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/g, '');
    return cleanedContent;
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const originalRobotsText = await fetchContent(robotsTxtUrl);
    // 2. Discover all top-level sitemap URLs from the original robots.txt
    const topLevelSitemapUrlsFromRobotsTxt = await fetchRobotsTxtSitemapUrls(robotsTxtUrl);
    // Store all unique relative paths of generated files (including children)
    const allGeneratedRelativePaths = new Set();
    // 3. Process each discovered top-level sitemap URL - THIS WILL GENERATE ALL FILES FIRST
    console.log('\nGenerating all sitemap files without image removal (first pass)...');
    for (const sitemapUrl of topLevelSitemapUrlsFromRobotsTxt) {
        const processedFiles = await processSitemapFile(sitemapUrl, staticDir);
        processedFiles.forEach((path) => allGeneratedRelativePaths.add(path));
        await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY)); // Be respectful
    }
    console.log('✅ First pass complete: All sitemap files generated.');
    // 4. Generate robots.txt for the front-end site
    // console.log('\n🤖 Generating robots.txt for the front-end...');
    // const newRobotsTxtContent = generateRobotsTxt(
    // 	originalRobotsText,
    // 	FRONT_DOMAIN,
    // 	topLevelSitemapUrlsFromRobotsTxt
    // );
    // const robotsPath = join(staticDir, 'robots.txt');
    // writeFileSync(robotsPath, newRobotsTxtContent, 'utf8');
    // console.log(`✅ Generated robots.txt`);
    // 5. POST-PROCESSING: Remove image tags from all generated XML files
    console.log('\n🧹 Starting post-processing: Removing image tags from XML files...');
    const allXmlFiles = findXmlFiles(staticDir);
    for (const filePath of allXmlFiles) {
        if (filePath.includes('robots.txt')) {
            // Skip robots.txt if it was mistakenly included
            continue;
        }
        console.log(`   Processing file for image removal: ${filePath}`);
        try {
            const fileContent = readFileSync(filePath, 'utf8');
            const cleanedContent = removeImageTags(fileContent);
            writeFileSync(filePath, cleanedContent, 'utf8');
            console.log(`   ✅ Images removed from ${filePath}`);
        }
        catch (error) {
            console.error(`   ❌ Error processing ${filePath} for image removal:`, error);
        }
    }
    console.log('✅ Post-processing complete: Image tags removed.');
    console.log('\n🎉 Generation and Post-processing complete!');
    console.log(`📁 Files generated and processed in ${staticDir}:`);
    Array.from(allGeneratedRelativePaths).forEach((file) => console.log(`   - ${file}`));
    console.log(`   - robots.txt`);
}
// Run the script
main().catch(console.error);
