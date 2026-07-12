export function renderHeader(data) {

    document.querySelector(".header-left h1").textContent =
        data.header.reportName;

    document.querySelector(".header-left p").textContent =
        data.header.application;

    document.querySelector(".build-info").innerHTML = `
        <span class="status success">
            <i class="fa-solid fa-circle-check"></i>
            Success
        </span>

        <span>Release ${data.header.release}</span>

        <span>${data.header.environment}</span>

        <span>${data.header.browser}</span>

        <span>${new Date(data.generatedOn).toLocaleString()}</span>
    `;

}