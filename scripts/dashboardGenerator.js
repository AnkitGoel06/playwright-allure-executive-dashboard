const fs = require("fs");
const path = require("path");

const AllureParser = require("./allureParser");

const parser = new AllureParser();

const summary = parser.getSummary();
const suites = parser.getSuites();
const categories = parser.getCategories();
const environment = parser.getEnvironment();
const history = parser.getHistoryTrend();

const dashboard = {
    generatedOn: new Date().toISOString(),

    header: {
        reportName: summary.reportName,
        totalTests: summary.statistic.total,
        passed: summary.statistic.passed,
        failed: summary.statistic.failed,
        duration: summary.time.duration,

        environment: environment.find(x => x.name === "Environment")?.values[0],

        browser: environment.find(x => x.name === "Browser")?.values[0],

        release: environment.find(x => x.name === "Release")?.values[0],

        application: environment.find(x => x.name === "Application")?.values[0]
    },

    summary,

    suites,

    categories,

    history: history.map(run => ({

        build: run.buildOrder,

        label: `#${run.buildOrder}`,

        total: run.data.total,

        passed: run.data.passed,

        failed: run.data.failed,

        passRate:
            Number(
                ((run.data.passed / run.data.total) * 100).toFixed(1)
            ),

        duration:
            Number((summary.time.duration / 60000).toFixed(1))

    }))
};

const outputFolder = path.join(__dirname, "..", "dashboard", "data");

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

fs.writeFileSync(
    path.join(outputFolder, "dashboard-data.json"),
    JSON.stringify(dashboard, null, 4)
);

console.log("Dashboard JSON generated successfully.");