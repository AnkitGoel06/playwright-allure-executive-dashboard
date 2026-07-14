import * as allure from "allure-js-commons";

export class AllureUtil {

    static async addMetadata(data: {
        epic: string;
        feature: string;
        story: string;
        owner: string;
        severity: "blocker" | "critical" | "normal" | "minor" | "trivial";
        module: string;
        sprint: string;
        journey: string;
        environment: string;
        browser: string;
        country: string;
        layer: string;
    }) {

        await allure.epic(data.epic);

        await allure.feature(data.feature);

        await allure.story(data.story);

        await allure.owner(data.owner);

        await allure.severity(data.severity);

        await allure.label("Module", data.module);

        await allure.label("Sprint", data.sprint);

        await allure.label("Journey", data.journey);

        await allure.label("Environment", data.environment);

        await allure.label("Browser", data.browser);

        await allure.label("Country", data.country);

        await allure.label("Layer", data.layer);

        await allure.label("Application", "UCE Model 2 Automation");

        await allure.label("Release", "0.1.0");
    }

}