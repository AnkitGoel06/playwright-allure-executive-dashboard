const fs = require("fs");
const path = require("path");

class AllureParser {

    constructor() {

        this.widgetsPath = path.join(__dirname, "..", "allure-report", "widgets");

    }

    loadJson(fileName) {

        const file = path.join(this.widgetsPath, fileName);

        if (!fs.existsSync(file)) {
            throw new Error(`File not found: ${file}`);
        }

        return JSON.parse(fs.readFileSync(file, "utf8"));

    }

    getSummary() {
        return this.loadJson("summary.json");
    }

    getSuites() {
        return this.loadJson("suites.json");
    }

    getCategories() {
        return this.loadJson("categories.json");
    }

    getEnvironment() {
        return this.loadJson("environment.json");
    }

    getHistoryTrend() {
        return this.loadJson("history-trend.json");
    }

}

module.exports = AllureParser;