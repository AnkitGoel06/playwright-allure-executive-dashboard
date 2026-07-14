export function renderRecentFailures(data) {

    const failures = data.widgetData.recentFailures;
    const container = document.getElementById("recentFailures");

    if (!container) return;

    if (!failures || failures.length === 0) {

        container.innerHTML = `
            <div class="empty-widget">
                <i class="fa-solid fa-circle-check"></i>
                <span>No recent failures</span>
            </div>
        `;

        return;
    }

    container.innerHTML = failures.map(test => `
<div class="failure-item">

    <div class="failure-severity severity-${test.severity.toLowerCase()}">
        ${test.severity}
    </div>

    <div class="failure-content">

        <div class="failure-title"
             title="${test.scenario}">
            ${test.scenario}
        </div>

        <div class="failure-subtitle">

            <span title="${test.module}">
                ${test.module}
            </span>

            <span class="dot">•</span>

            <span title="${test.feature}">
                ${test.feature}
            </span>

        </div>

    </div>

    <div class="failure-meta">

        <div class="failure-duration">
            <i class="fa-regular fa-clock"></i>
            ${test.duration}
        </div>

        <div class="failure-error">

            <i class="fa-solid fa-circle-info"></i>

            <span class="error-link">
                Error Details
            </span>

            <div class="error-tooltip">
                <strong>${test.errorLocation}</strong><br><br>
                ${test.error}
            </div>

        </div>

    </div>

</div>
`).join("");

}