class WidgetBuilder {

    constructor(parser) {

        this.parser = parser;

        this.summary = parser.getSummary();
        this.environment = parser.getEnvironment();
        this.testCases = parser.getTestCases();

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

        return [];

    }

}

module.exports = WidgetBuilder;