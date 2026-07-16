const fs = require("fs");
const path = require("path");

class BuildNumberResolver {

    getBuildNumber() {

        // Running on CI?
        if (process.env.CI) {
            return this.getCiBuildNumber();
        }

        return this.getLocalBuildNumber();
    }

    getCiBuildNumber() {

        return Number(
            process.env.BUILD_BUILDID ||          // Azure DevOps
            process.env.BUILD_NUMBER ||           // Jenkins
            process.env.GITHUB_RUN_NUMBER ||      // GitHub Actions
            process.env.CI_PIPELINE_IID ||        // GitLab
            process.env.BUILD_ID ||               // Fallback
            1
        );

    }

    getLocalBuildNumber() {

        const historyFile = path.join(
            __dirname,
            "..",
            "allure-history",
            "history",
            "history-trend.json"
        );

        if (!fs.existsSync(historyFile))
            return 1;

        const history = JSON.parse(
            fs.readFileSync(historyFile, "utf8")
        );

        if (!history || history.length === 0) {
        return 1;
    }

        const maxBuild = Math.max(...history.map(run => Number(run.buildOrder) || 0));

    return maxBuild + 1;

    }

}

module.exports = BuildNumberResolver;