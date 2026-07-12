export function renderModules(data) {

    const container = document.getElementById("moduleList");

    container.innerHTML = "";

    data.suites.items.forEach(module => {

        const stats = module.statistic;

        const passRate = ((stats.passed / stats.total) * 100).toFixed(1);

        container.innerHTML += `
<div class="module-item">

    <div class="module-name">
        ${module.name}
    </div>

    <div class="module-tests">
        ${stats.total}
    </div>

    <div class="progress-wrapper">

        <div class="progress-bar">

            <div class="progress-fill"
                 style="width:${passRate}%">
            </div>

        </div>

        <span class="progress-value">
            ${passRate}%
        </span>

    </div>

    <div>

        <span class="${stats.failed ? 'failed-text' : 'passed-text'}">

            ${stats.failed}

        </span>

    </div>

</div>`;

    });

}