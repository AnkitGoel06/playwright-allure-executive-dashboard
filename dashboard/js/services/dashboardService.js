export default class DashboardService {

    async loadDashboard() {

        const response = await fetch("./data/dashboard-data.json");

        return await response.json();

    }

}