import { formatDuration } from "../utils/formatter.js";

export function renderKPI(data) {

    const stats = data.summary.statistic;

    document.getElementById("totalTests").textContent = stats.total;

    document.getElementById("passedTests").textContent = stats.passed;

    document.getElementById("failedTests").textContent = stats.failed;

    document.getElementById("brokenTests").textContent = stats.broken;

    document.getElementById("skippedTests").textContent = stats.skipped;

    document.getElementById("duration").textContent =
        formatDuration(data.summary.time.duration);

    const passRate =
        ((stats.passed / stats.total) * 100).toFixed(1);

    document.getElementById("passRate").textContent =
        `${passRate}%`;

}