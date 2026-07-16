const fs = require("fs");
const path = require("path");

const config = require("../src/config/environment");

const environment = {

    Application: config.application,

    Environment: config.environment,

    Browser: config.browser,

    Release: config.release

};

const environmentProperties = Object.entries(environment)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");

const resultsDir = path.join(__dirname, "..", "allure-results");

fs.writeFileSync(
    path.join(resultsDir, "environment.properties"),
    `${environmentProperties}\n`
);

const legacyJsonPath = path.join(resultsDir, "environment.json");

if (fs.existsSync(legacyJsonPath)) {
    fs.rmSync(legacyJsonPath, { force: true });
}

console.log("Environment file generated.");