class WidgetBuilder {

    constructor(parser) {

        this.parser = parser;

        this.summary = parser.getSummary();
        this.environment = parser.getEnvironment();
        this.testCases = parser.getTestCases();

    }

    getLabel(testCase, name) {

        return testCase.labels?.find(
            label => label.name === name
        )?.value ?? "-";

    }

    getFeatureName(fullName = "") {
        const match = fullName.match(/([^\\/]+)\.feature/);

        return match ? match[1] : "-";
    }

    formatDuration(duration) {

        return `${(duration / 1000).toFixed(1)} sec`;

    }

    getSeverity(testCase) {

        const severity = this.getLabel(testCase, "severity");

        return severity === "-" ? "Normal" : this.capitalize(severity);

    }

    getError(testCase) {

        return (testCase.statusMessage || "")
            .split("\n")
            .slice(0, 2)
            .join(" ");

    }

    getErrorLocation(testCase) {

        const trace =
            testCase.statusTrace || "";

        const match =
            trace.match(/([^\\\/]+\.ts:\d+)/);

        return match ? match[1] : "";

    }

    build() {

        return {

            environment: this.buildEnvironment(),

            topSlowTests: this.buildTopSlowTests(),

            recentFailures: this.buildRecentFailures()

        };

    }

    buildEnvironment() {

        const getValue = (name) =>
            this.environment.find(item => item.name === name)?.values?.[0] ?? "-";

        return {

            application: getValue("Application"),

            environment: getValue("Environment"),

            browser: getValue("Browser"),

            release: getValue("Release"),

            generatedOn: new Date().toISOString(),

            duration: `${(this.summary.time.duration / 1000).toFixed(1)} sec`

        };

    }

    buildTopSlowTests() {

        return [];

    }

    buildRecentFailures() {

        return this.testCases

            .filter(test => test.status === "failed")

            .sort(
                (a, b) =>
                    b.time.stop - a.time.stop
            )

            .slice(0, 5)

            .map(test => ({

                severity:
                    this.getSeverity(test),

                scenario:
                    test.name,

                feature:
                    this.getFeatureName(test.fullName),

                module:
                    this.getLabel(test, "subSuite"),

                duration:
                    this.formatDuration(
                        test.time.duration
                    ),

                status:
                    "Failed",

                error:
                    this.getError(test),

                errorLocation:
                    this.getErrorLocation(test),

                tags:
                    test.extra?.tags ?? []

            }));

    }

}

module.exports = WidgetBuilder;