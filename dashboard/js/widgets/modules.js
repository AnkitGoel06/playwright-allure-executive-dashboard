function renderModules(data){

    const tbody = document.getElementById("moduleTable");

    tbody.innerHTML = "";

    this.data.suites.items.forEach(module => {

        const stats = module.statistic;

        const passRate = ((stats.passed / stats.total) * 100).toFixed(1);

        tbody.innerHTML += `
            <tr>
                <td>${module.name}</td>
                <td>${stats.total}</td>
                <td>
                    <div class="progress-cell">
                        <div class="progress-bar">
                            <div class="progress-fill"
                                 style="width:${passRate}%"></div>
                        </div>
                        <span>${passRate}%</span>
                    </td>
                <td class="${stats.failed > 0 ? 'failed-text' : 'passed-text'}">
                    ${stats.failed}
                </td>
            </tr>
        `;

    });

}