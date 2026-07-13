import DashboardService from "./services/dashboardService.js";

import { renderHeader } from "./sections/header.js";

import { renderKPI } from "./sections/kpi.js";

import { renderModules } from "./sections/modules.js";

import { renderTrend } from "./sections/trend.js";

import { renderEnvironment } from "./sections/environment.js";

class DashboardApp {

    async initialize() {

        const service = new DashboardService();

        const data = await service.loadDashboard();

        renderHeader(data);

        renderKPI(data);

        renderModules(data);

        renderTrend(data);

        renderEnvironment(data);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new DashboardApp().initialize();

});