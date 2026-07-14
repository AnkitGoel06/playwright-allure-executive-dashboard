export function renderEnvironment(data) {

    const env = data.widgetData.environment;

    document.getElementById("executionDetails").innerHTML = `

        <div class="env-grid">

            <div class="env-box">
                <span class="env-label">Environment</span>
                <span class="env-value">${env.environment}</span>
            </div>

            <div class="env-box">
                <span class="env-label">Browser</span>
                <span class="env-value">${env.browser}</span>
            </div>

            <div class="env-box">
                <span class="env-label">Release</span>
                <span class="env-value">${env.release}</span>
            </div>

            <div class="env-box">
                <span class="env-label">Duration</span>
                <span class="env-value">${env.duration}</span>
            </div>

            <div class="env-box full-width">
                <span class="env-label">Application</span>
                <span class="env-value">${env.application}</span>
            </div>

            <div class="env-box full-width">
                <span class="env-label">Generated</span>
                <span class="env-value">${new Date(env.generatedOn).toLocaleString()}</span>
            </div>

        </div>

    `;

}