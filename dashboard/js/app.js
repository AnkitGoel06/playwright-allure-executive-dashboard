import DashboardService from "./services/dashboardService.js";

import { renderHeader } from "./components/header.js";

import { renderKPI } from "./components/kpi.js";

import { renderModules } from "./components/modules.js";

import { renderTrend } from "./components/trend.js";

class DashboardApp {

    async initialize() {

        const service = new DashboardService();

        const data = await service.loadDashboard();

        renderHeader(data);

        renderKPI(data);

        renderModules(data);

        renderTrend(data);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new DashboardApp().initialize();

});