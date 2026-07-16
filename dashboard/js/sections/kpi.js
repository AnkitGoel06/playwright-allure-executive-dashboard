import { formatDuration } from "../utils/formatter.js";

export function renderKPI(data) {

    const cards = data.summaryCards;

    document.getElementById("totalTests").textContent =
        cards.total.value;

    document.getElementById("totalTestsDelta").textContent =
        cards.total.delta == null
            ? ""
            : `${cards.total.delta >= 0 ? "↑" : "↓"} ${Math.abs(cards.total.delta)} vs last run`;

    document.getElementById("passedTests").textContent =
        cards.passed.value;

    document.getElementById("passedPercentage").textContent =
        `${cards.passed.percentage}%`;

    document.getElementById("failedTests").textContent =
        cards.failed.value;

    document.getElementById("failedPercentage").textContent =
        `${cards.failed.percentage}%`;

    document.getElementById("brokenTests").textContent =
        cards.broken.value;

    document.getElementById("brokenPercentage").textContent =
        `${cards.broken.percentage}%`;

    document.getElementById("skippedTests").textContent =
        cards.skipped.value;

    document.getElementById("skippedPercentage").textContent =
        `${cards.skipped.percentage}%`;

    document.getElementById("duration").textContent =
        formatDuration(cards.duration.value);

    document.getElementById("durationDelta").textContent =
        cards.duration.delta == null
            ? ""
            : `${cards.duration.delta >= 0 ? "↑" : "↓"} ${formatDuration(Math.abs(cards.duration.delta))} vs last run`;

    const gauge = document.getElementById("passRate");
    const passRate = cards.passRate.value;

    const arcLength = 125.66;

    // Calculate dashoffset (100% pass rate = 0 offset, 0% pass rate = full length offset)
    const offset = arcLength - (passRate / 100) * arcLength;

    // Update the green path stroke
    document.getElementById("gaugeProgress").style.strokeDashoffset = offset;

    gauge.querySelector("span").textContent = `${passRate}%`;

    document.getElementById("passRateChange").textContent =
        cards.passRate.delta == null
            ? ""
            : `${cards.passRate.delta >= 0 ? "↑" : "↓"} ${Math.abs(cards.passRate.delta)}% vs last run`;

}