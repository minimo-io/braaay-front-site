import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Set up __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function buildTree(dir, prefix = '', route = '') {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	// Only include directories (route folders)
	const routes = entries.filter((entry) => entry.isDirectory());

	routes.forEach((entry, index) => {
		const isLast = index === routes.length - 1;
		const connector = isLast ? '└── ' : '├── ';

		const newRoute = route === '/' ? `/${entry.name}` : `${route}/${entry.name}`;
		console.log(prefix + connector + newRoute);

		const newPrefix = prefix + (isLast ? '    ' : '│   ');
		buildTree(path.join(dir, entry.name), newPrefix, newRoute);
	});
}

const routesDir = path.join(__dirname, '..', 'src', 'routes');

if (!fs.existsSync(routesDir)) {
	console.error(`Routes directory not found: ${routesDir}`);
	process.exit(1);
}

console.log('Route Tree:');
console.log('└── /'); // Root route
buildTree(routesDir, '    ', '/');
