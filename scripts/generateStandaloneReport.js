const fs = require("fs");
const path = require("path");

const dashboardRoot = path.join(__dirname, "../dashboard");
const reportsDir = path.join(__dirname, "../reports");

const htmlPath = path.join(dashboardRoot, "index.html");
const dataPath = path.join(dashboardRoot, "data", "dashboard-data.json");

const allureReportPath = path.join(
    reportsDir,
    "standaloneAllure-report/index.html"
);

let allureHtml = null;

if (fs.existsSync(allureReportPath)) {
    console.log("Embedding standalone Allure report...");
    allureHtml = fs.readFileSync(allureReportPath, "utf8");
} else {
    console.log("Standalone Allure report not found. Dashboard will use external Allure.");
}

if (!fs.existsSync(htmlPath)) {
    throw new Error(`index.html not found: ${htmlPath}`);
}

if (!fs.existsSync(dataPath)) {
    throw new Error(`dashboard-data.json not found: ${dataPath}`);
}

if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
}

let allureScript = "";

if (allureHtml) {

    const escapedHtml = allureHtml
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    .replace(/<\/script>/gi, "<\\/script>");

    allureScript = `
<script>
window.allureReportHtml = \`
${escapedHtml}
\`;
</script>
`;
}

let html = fs.readFileSync(htmlPath, "utf8");

/**
 * Inline all local CSS files.
 * External stylesheets (Google Fonts etc.) are left untouched.
 */
html = html.replace(
    /<link([^>]*?)rel=["']stylesheet["']([^>]*?)href=["']([^"']+)["']([^>]*)>/gi,
    (match, before, middle, href, after) => {

        if (/^https?:\/\//i.test(href)) {
            console.log(`Keeping external stylesheet: ${href}`);
            return match;
        }

        const cssPath = path.join(dashboardRoot, href);

        if (!fs.existsSync(cssPath)) {
            throw new Error(`CSS file not found: ${cssPath}`);
        }

        console.log(`Inlining CSS: ${href}`);

        const css = fs.readFileSync(cssPath, "utf8");

        return `<style>\n${css}\n</style>`;
    }
);

/**
 * Inject dashboard JSON before the first local script.
 */
const dashboardData = fs.readFileSync(dataPath, "utf8");

const dashboardScript = `
<script>
window.dashboardData = ${dashboardData};
</script>
${allureScript}
`;

let dashboardInjected = false;

/**
 * Inline all local JS.
 * External scripts (Chart.js CDN etc.) are kept untouched.
 */
html = html.replace(
    /<script([^>]*)src=["']([^"']+)["']([^>]*)><\/script>/gi,
    (match, before, src, after) => {

        if (/^https?:\/\//i.test(src)) {
            console.log(`Keeping external script: ${src}`);
            return match;
        }

        const jsPath = path.join(dashboardRoot, src);

        if (!fs.existsSync(jsPath)) {
            throw new Error(`JavaScript file not found: ${jsPath}`);
        }

        console.log(`Inlining JS: ${src}`);

        const js = fs.readFileSync(jsPath, "utf8");

        let output = "";

        if (!dashboardInjected) {
            output += dashboardScript;
            dashboardInjected = true;
        }

        output += `\n<script${before}${after}>\n${js}\n</script>`;

        return output;
    }
);

const outputFile = path.join(
    reportsDir,
    "CommerceAutomationReport.html"
);

fs.writeFileSync(outputFile, html, "utf8");

console.log("");
console.log("=======================================");
console.log("Standalone dashboard generated");
console.log(outputFile);
console.log("=======================================");