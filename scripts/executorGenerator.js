const fs = require("fs");
const path = require("path");

const BuildNumberResolver = require("./buildNumberResolver");

class ExecutorGenerator {

    generate() {

        const resolver = new BuildNumberResolver();

        const buildNumber = resolver.getBuildNumber();

        const resultsDir = path.join(__dirname, "..", "allure-results");

        // Create directory if it doesn't exist
        fs.mkdirSync(resultsDir, { recursive: true });

        const executor = {

            name: process.env.CI ? "CI Pipeline" : "Local",

            type: process.env.CI ? "ci" : "local",

            buildOrder: buildNumber,

            buildName: `Build #${buildNumber}`,

            reportName: "Executive Dashboard - UCE2",

            reportUrl: "http://localhost"

        };

        fs.writeFileSync(

            path.join(
                resultsDir,
                "executor.json"
            ),

            JSON.stringify(executor, null, 4)

        );

        console.log(`Executor generated (Build #${buildNumber})`);

    }

}

new ExecutorGenerator().generate();