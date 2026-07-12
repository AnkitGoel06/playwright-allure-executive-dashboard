function renderHeader(data){

    // paste existing renderHeader code
    document.querySelector(".header-left h1").textContent =
            this.data.header.reportName;

        document.querySelector(".header-left p").textContent =
            this.data.header.application;

        const buildInfo = document.querySelector(".build-info");

        buildInfo.innerHTML = `
            <span class="status success">
                <i class="fa-solid fa-circle-check"></i>
                Completed
            </span>

            <span>Release ${this.data.header.release}</span>

            <span>${this.data.header.environment}</span>

            <span>${this.data.header.browser}</span>

            <span>${new Date(this.data.generatedOn).toLocaleString()}</span>
        `;

}