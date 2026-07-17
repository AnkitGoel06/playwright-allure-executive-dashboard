const esbuild = require("esbuild");

async function build() {

    // Bundle JavaScript
    await esbuild.build({
        entryPoints: ["dashboard/js/app.js"],
        bundle: true,
        outfile: "dashboard/dist/app.bundle.js",
        platform: "browser",
        format: "iife",
        minify: false
    });

    console.log("Dashboard bundle created.");
}

build().catch(() => process.exit(1));