import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the absolute path of the current script
const scriptDir = path.resolve(dirname(fileURLToPath(import.meta.url)));

// Define the Ghost installation directory
const ghostDir = path.resolve(scriptDir, '../.ghost');

// Create the Ghost directory if it doesn't exist or error if exists
if (fs.existsSync(ghostDir)) {
  console.error(`Error: Directory ${ghostDir} already exists.`);
  process.exit(1);
} else {
  fs.mkdirSync(ghostDir, { recursive: true });
}

// Change to the Ghost directory
process.chdir(ghostDir);

// Install Ghost locally
execSync('ghost install local', { stdio: 'inherit' });

// Link the theme directory to the Ghost content themes directory
const themeDir = path.join(ghostDir, 'content/themes/custom');
fs.symlinkSync(scriptDir, themeDir, 'dir');