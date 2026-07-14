module.exports = {

    application: "UCE Model 2",

    environment: process.env.TEST_ENV || "QA",

    browser: process.env.BROWSER || "Chromium",

    release: process.env.RELEASE || "5.4"

};