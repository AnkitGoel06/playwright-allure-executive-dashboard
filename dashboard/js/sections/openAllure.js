export function initializeOpenAllure() {

    const button = document.getElementById("openAllureBtn");

    if (!button)
        return;

    button.addEventListener("click", () => {

        // Standalone report
        if (window.allureReportHtml) {

            const win = window.open("", "_blank");

            win.document.open();
            win.document.write(window.allureReportHtml);
            win.document.close();

            return;
        }

        // Normal dashboard
        window.open("../reports/standaloneAllure-report/index.html", "_blank");

    });

}