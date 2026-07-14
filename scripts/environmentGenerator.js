const fs = require("fs");
const path = require("path");

const config = require("../src/config/environment");

const environment = [

    {
        name: "Application",
        values: [config.application]
    },

    {
        name: "Environment",
        values: [config.environment]
    },

    {
        name: "Browser",
        values: [config.browser]
    },

    {
        name: "Release",
        values: [config.release]
    }

];

fs.writeFileSync(
    path.join(__dirname, "..", "allure-results", "environment.json"),
    JSON.stringify(environment, null, 4)
);

console.log("Environment file generated.");