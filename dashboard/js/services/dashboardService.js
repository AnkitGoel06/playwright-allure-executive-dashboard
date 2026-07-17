export default class DashboardService {

    async loadDashboard() {

        if (window.dashboardData) {
            return window.dashboardData;
        }

        const response = await fetch("./data/dashboard-data.json");

        return await response.json();

    }

}