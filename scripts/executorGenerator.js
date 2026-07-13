const fs = require("fs");
const path = require("path");

const BuildNumberResolver = require("./buildNumberResolver");

class ExecutorGenerator {

    generate() {

        const resolver = new BuildNumberResolver();

        const buildNumber = resolver.getBuildNumber();

        const executor = {

            name: process.env.CI ? "CI Pipeline" : "Local",

            type: process.env.CI ? "ci" : "local",

            buildOrder: buildNumber,

            buildName: `Build #${buildNumber}`,

            reportName: "Commerce Automation Report",

            reportUrl: "http://localhost"

        };

        fs.writeFileSync(

            path.join(
                __dirname,
                "..",
                "allure-results",
                "executor.json"
            ),

            JSON.stringify(executor, null, 4)

        );

        console.log(`Executor generated (Build #${buildNumber})`);

    }

}

new ExecutorGenerator().generate();