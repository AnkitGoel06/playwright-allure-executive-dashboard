const fs = require('fs');
const path = require('path');

const src = path.join('allure-report', 'history');
const dest = path.join('allure-results', 'history');

if (fs.existsSync(src)) {
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
    console.log('✓ Allure history copied.');
} else {
    console.log('No previous history found. Skipping.');
}