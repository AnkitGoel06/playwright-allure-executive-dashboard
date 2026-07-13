const fs = require("fs");
const path = require("path");

class AllureParser {

    constructor() {

        this.reportPath = path.join(__dirname, "..", "allure-report");

    }

    loadJson(...parts) {

        const file = path.join(this.reportPath, ...parts);

        if (!fs.existsSync(file)) {
            throw new Error(`File not found: ${file}`);
        }

        return JSON.parse(fs.readFileSync(file, "utf8"));

    }

    getSummary() {
        return this.loadJson("widgets", "summary.json");
    }

    getSuites() {
        return this.loadJson("widgets", "suites.json");
    }

    getCategories() {
        return this.loadJson("widgets", "categories.json");
    }

    getEnvironment() {
        return this.loadJson("widgets", "environment.json");
    }

    getHistoryTrend() {
        return this.loadJson("history", "history-trend.json");
    }

    getDurationTrend() {
        return this.loadJson("history", "duration-trend.json");
    }

    getRetryTrend() {
        return this.loadJson("history", "retry-trend.json");
    }

    getTestCases() {
        const folder = path.join(__dirname, "..", "allure-report", "data", "test-cases");

        if (!fs.existsSync(folder)) {
            return [];
        }

        return fs.readdirSync(folder)
            .filter(file => file.endsWith(".json"))
            .map(file =>
                JSON.parse(
                    fs.readFileSync(path.join(folder, file), "utf8")
                )
            );
    }

}

module.exports = AllureParser;