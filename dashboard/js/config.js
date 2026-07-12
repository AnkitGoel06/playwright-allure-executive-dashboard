/**
 * QA Insight Dashboard Configuration
 */

const DashboardConfig = {

    app: {

        title: "QA Insight Dashboard",

        subtitle: "Playwright BDD Automation Report",

        company: "Your Organization",

        version: "1.0.0"

    },

    report: {

        allurePath: "../allure-report",

        refreshInterval: 0

    },

    ui: {

        theme: "light",

        dateFormat: "DD MMM YYYY HH:mm"

    }

};

Object.freeze(DashboardConfig);