(() => {
  // dashboard/js/services/dashboardService.js
  var DashboardService = class {
    async loadDashboard() {
      if (window.dashboardData) {
        return window.dashboardData;
      }
      const response = await fetch("./data/dashboard-data.json");
      return await response.json();
    }
  };

  // dashboard/js/sections/header.js
  function renderHeader(data) {
    document.querySelector(".header-left h1").textContent = data.header.reportName;
    document.querySelector(".header-left p").textContent = data.header.application;
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

  // dashboard/js/utils/formatter.js
  function formatDuration(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}h ${m}m ${s}s`;
    }
    return `${m}m ${s}s`;
  }

  // dashboard/js/sections/kpi.js
  function renderKPI(data) {
    const cards = data.summaryCards;
    document.getElementById("totalTests").textContent = cards.total.value;
    document.getElementById("totalTestsDelta").textContent = cards.total.delta == null ? "" : `${cards.total.delta >= 0 ? "\u2191" : "\u2193"} ${Math.abs(cards.total.delta)} vs last run`;
    document.getElementById("passedTests").textContent = cards.passed.value;
    document.getElementById("passedPercentage").textContent = `${cards.passed.percentage}%`;
    document.getElementById("failedTests").textContent = cards.failed.value;
    document.getElementById("failedPercentage").textContent = `${cards.failed.percentage}%`;
    document.getElementById("brokenTests").textContent = cards.broken.value;
    document.getElementById("brokenPercentage").textContent = `${cards.broken.percentage}%`;
    document.getElementById("skippedTests").textContent = cards.skipped.value;
    document.getElementById("skippedPercentage").textContent = `${cards.skipped.percentage}%`;
    document.getElementById("duration").textContent = formatDuration(cards.duration.value);
    document.getElementById("durationDelta").textContent = cards.duration.delta == null ? "" : `${cards.duration.delta >= 0 ? "\u2191" : "\u2193"} ${formatDuration(Math.abs(cards.duration.delta))} vs last run`;
    const gauge = document.getElementById("passRate");
    const passRate = cards.passRate.value;
    const arcLength = 125.66;
    const offset = arcLength - passRate / 100 * arcLength;
    document.getElementById("gaugeProgress").style.strokeDashoffset = offset;
    gauge.querySelector("span").textContent = `${passRate}%`;
    document.getElementById("passRateChange").textContent = cards.passRate.delta == null ? "" : `${cards.passRate.delta >= 0 ? "\u2191" : "\u2193"} ${Math.abs(cards.passRate.delta)}% vs last run`;
  }

  // dashboard/js/sections/modules.js
  function renderModules(data) {
    const container = document.getElementById("moduleList");
    container.innerHTML = "";
    data.suites.items.forEach((module) => {
      const stats = module.statistic;
      const passRate = (stats.passed / stats.total * 100).toFixed(1);
      container.innerHTML += `
<div class="module-item">

    <div class="module-name" title="${module.name}">
        ${module.name}
    </div>

    <div class="module-tests">
        ${stats.total} Tests
    </div>

    <div class="progress-wrapper">

        <div class="progress-bar">

            <div class="progress-fill"
         style="width:${passRate}%"
         aria-label="Pass Rate ${passRate}%">
    </div>

        </div>

        <span class="progress-value">
            ${passRate}%
        </span>

    </div>

    <div class="module-failed">

        <span class="${stats.failed ? "failed-text" : "passed-text"}">

            ${stats.failed}

        </span>

    </div>

</div>`;
    });
  }

  // dashboard/js/sections/trend.js
  var trendChart = null;
  function renderTrend(data) {
    const history = data.history;
    if (!history || history.length === 0)
      return;
    const ctx = document.getElementById("trendChart").getContext("2d");
    if (trendChart)
      trendChart.destroy();
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, "rgba(34,197,94,.25)");
    gradient.addColorStop(1, "rgba(34,197,94,0)");
    requestAnimationFrame(() => {
      trendChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: history.map((x) => x.label),
          datasets: [
            {
              label: "Pass %",
              data: history.map((x) => x.passRate),
              yAxisID: "pass",
              borderColor: "#22c55e",
              backgroundColor: gradient,
              fill: true,
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              tension: 0.35
            },
            {
              label: "Duration (min)",
              data: history.map((x) => x.duration),
              yAxisID: "duration",
              borderColor: "#3b82f6",
              backgroundColor: "#3b82f6",
              borderWidth: 3,
              pointRadius: 4,
              pointHoverRadius: 6,
              fill: false,
              tension: 0.35
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
                callback: (value) => value + "%"
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
                callback: (value) => value + "m"
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
    });
  }

  // dashboard/js/sections/environment.js
  function renderEnvironment(data) {
    const env = data.widgetData.environment;
    document.getElementById("executionDetails").innerHTML = `

        <div class="env-grid">

            <div class="env-box">
                <span class="env-label">Environment</span>
                <span class="env-value">${env.environment}</span>
            </div>

            <div class="env-box">
                <span class="env-label">Browser</span>
                <span class="env-value">${env.browser}</span>
            </div>

            <div class="env-box">
                <span class="env-label">Release</span>
                <span class="env-value">${env.release}</span>
            </div>

            <div class="env-box">
                <span class="env-label">Duration</span>
                <span class="env-value">${env.duration}</span>
            </div>

            <div class="env-box full-width">
                <span class="env-label">Application</span>
                <span class="env-value">${env.application}</span>
            </div>

            <div class="env-box full-width">
                <span class="env-label">Generated</span>
                <span class="env-value">${new Date(env.generatedOn).toLocaleString()}</span>
            </div>

        </div>

    `;
  }

  // dashboard/js/sections/recentFailures.js
  function renderRecentFailures(data) {
    const failures = data.widgetData.recentFailures;
    const container = document.getElementById("recentFailures");
    if (!container) return;
    if (!failures || failures.length === 0) {
      container.innerHTML = `
            <div class="empty-widget">
                <i class="fa-solid fa-circle-check"></i>
                <span>No recent failures</span>
            </div>
        `;
      return;
    }
    container.innerHTML = failures.map((test) => `
<div class="failure-item">

    <div class="failure-severity severity-${test.severity.toLowerCase()}">
        ${test.severity}
    </div>

    <div class="failure-content">

        <div class="failure-title"
             title="${test.scenario}">
            ${test.scenario}
        </div>

        <div class="failure-subtitle">

            <span title="${test.module}">
                ${test.module}
            </span>

            <span class="dot">\u2022</span>

            <span title="${test.feature}">
                ${test.feature}
            </span>

        </div>

    </div>

    <div class="failure-meta">

        <div class="failure-duration">
            <i class="fa-regular fa-clock"></i>
            ${test.duration}
        </div>

        <div class="failure-error">

            <i class="fa-solid fa-circle-info"></i>

            <span class="error-link">
                Error Details
            </span>

            <div class="error-tooltip">
                <strong>${test.errorLocation}</strong><br><br>
                ${test.error}
            </div>

        </div>

    </div>

</div>
`).join("");
  }

  // dashboard/js/sections/openAllure.js
  function initializeOpenAllure() {
    const button = document.getElementById("openAllureBtn");
    if (!button)
      return;
    button.addEventListener("click", () => {
      if (window.allureReportHtml) {
        const win = window.open("", "_blank");
        win.document.open();
        win.document.write(window.allureReportHtml);
        win.document.close();
        return;
      }
      window.open("../reports/standaloneAllure-report/index.html", "_blank");
    });
  }

  // dashboard/js/app.js
  var DashboardApp = class {
    async initialize() {
      const service = new DashboardService();
      const data = await service.loadDashboard();
      renderHeader(data);
      renderKPI(data);
      renderModules(data);
      renderTrend(data);
      renderEnvironment(data);
      renderRecentFailures(data);
      initializeOpenAllure();
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    new DashboardApp().initialize();
  });
})();
