const fs = require("fs");
const path = require("path");

const AllureParser = require("./allureParser");
const WidgetBuilder = require("./WidgetBuilder");

const parser = new AllureParser();

const summary = parser.getSummary();
const suites = parser.getSuites();
const categories = parser.getCategories();
const environment = parser.getEnvironment();
const history = parser.getHistoryTrend();
const durationHistory = parser.getDurationTrend();
const widgetBuilder = new WidgetBuilder(parser);

const previousRun = history.length > 1 ? history[1] : null;

const durationMap = new Map(
    durationHistory.map(item => [
        item.buildOrder,
        Number((item.data.duration / 60000).toFixed(1))
    ])
);

const total = summary.statistic.total;
const passed = summary.statistic.passed;
const failed = summary.statistic.failed;
const broken = summary.statistic.broken;
const skipped = summary.statistic.skipped;

const passRate = Number(((passed / total) * 100).toFixed(1));

const currentDuration =
    Number((summary.time.duration / 1000).toFixed(0));

const previousDuration =
    previousRun
        ? Math.round(
            (durationMap.get(previousRun.buildOrder) ?? 0) * 60
        )
        : 0;

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

    summaryCards: {

        total: {
            value: total,
            delta: previousRun
                ? total - previousRun.data.total
                : null
        },

        passed: {
            value: passed,
            percentage: passRate,
            delta: previousRun
                ? passed - previousRun.data.passed
                : null
        },

        failed: {
            value: failed,
            percentage: Number(((failed / total) * 100).toFixed(1)),
            delta: previousRun
                ? failed - previousRun.data.failed
                : null
        },

        broken: {
            value: broken,
            percentage: Number(((broken / total) * 100).toFixed(1))
        },

        skipped: {
            value: skipped,
            percentage: Number(((skipped / total) * 100).toFixed(1))
        },

        duration: {
            value: currentDuration,
            delta: previousDuration
                ? currentDuration - previousDuration
                : null
        },

        passRate: {
            value: passRate,
            delta: previousRun
                ? Number((
                    passRate -
                    (previousRun.data.passed /
                        previousRun.data.total) * 100
                ).toFixed(1))
                : null
        }

    },

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

        duration: durationMap.get(run.buildOrder) ?? 0

    })),

    widgetData: widgetBuilder.build()
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