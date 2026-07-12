let trendChart = null;

export function renderTrend(data) {

    const history = data.history;

    if (!history || history.length === 0)
        return;

    const ctx = document
        .getElementById("trendChart")
        .getContext("2d");

    if (trendChart)
        trendChart.destroy();

    const gradient = ctx.createLinearGradient(0, 0, 0, 350);

    gradient.addColorStop(0, "rgba(34,197,94,.25)");
    gradient.addColorStop(1, "rgba(34,197,94,0)");

    trendChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: history.map(x => x.label),

            datasets: [

                {
                    label: "Pass %",
                    data: history.map(x => x.passRate),

                    yAxisID: "pass",

                    borderColor: "#22c55e",

                    backgroundColor: gradient,

                    fill: true,

                    borderWidth: 3,

                    pointRadius: 4,

                    pointHoverRadius: 6,

                    tension: .35
                },

                {
                    label: "Duration (min)",

                    data: history.map(x => x.duration),

                    yAxisID: "duration",

                    borderColor: "#3b82f6",

                    backgroundColor: "#3b82f6",

                    borderWidth: 3,

                    pointRadius: 4,

                    pointHoverRadius: 6,

                    fill: false,

                    tension: .35
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            interaction: {

                mode: "index",

                intersect: false

            },

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {

                        usePointStyle: true,

                        padding: 20,

                        font: {

                            size: 13,

                            weight: 600

                        }

                    }

                }

            },

            scales: {

                pass: {

                    type: "linear",

                    position: "left",

                    min: 0,

                    max: 100,

                    ticks: {

                        callback: value => value + "%"

                    },

                    grid: {

                        color: "#edf2f7"

                    }

                },

                duration: {

                    type: "linear",

                    position: "right",

                    grid: {

                        drawOnChartArea: false

                    },

                    ticks: {

                        callback: value => value + "m"

                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    });

}