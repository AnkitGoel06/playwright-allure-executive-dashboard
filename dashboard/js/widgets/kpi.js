function renderKPI(data){

    const stats = this.data.summary.statistic;

        document.getElementById("totalTests").textContent = stats.total;

        document.getElementById("passedTests").textContent = stats.passed;

        document.getElementById("failedTests").textContent = stats.failed;

        document.getElementById("brokenTests").textContent = stats.broken;

        document.getElementById("skippedTests").textContent = stats.skipped;

        const passRate =
            ((stats.passed / stats.total) * 100).toFixed(1);

        document.getElementById("passRate").textContent =
            `${passRate}%`;

        document.getElementById("duration").textContent =
            this.formatDuration(this.data.summary.time.duration);

}