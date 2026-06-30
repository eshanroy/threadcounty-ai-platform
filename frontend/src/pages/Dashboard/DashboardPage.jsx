import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Container from "../../components/common/Container";
import { testConnection } from "../../services/supabaseTest";
import StatsCards from "../../components/dashboard/StatsCards";
import ConfidenceChart from "../../components/dashboard/ConfidenceChart";
import WeaveChart from "../../components/dashboard/WeaveChart";
import RecentAnalysisTable from "../../components/dashboard/RecentAnalysisTable";

import { getDashboardData } from "../../services/dashboardService";

function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
  async function loadDashboard() {
    const data = await getDashboardData();
    setDashboardData(data);

    await testConnection();
  }

  loadDashboard();
}, []);

  if (!dashboardData) {
    return (
  <Container className="py-20">
    <LoadingSpinner text="Loading Dashboard..." />
  </Container>
);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black text-slate-900">
            Dashboard
          </h1>

          <p className="mt-3 text-slate-500">
            AI Fabric Analysis Overview
          </p>
        </div>

        {/* Statistics Cards */}
        <StatsCards stats={dashboardData.stats} />

        {/* Charts */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ConfidenceChart
              data={dashboardData.confidenceData}
            />
          </div>

          <div>
            <WeaveChart
              data={dashboardData.weaveDistribution}
            />
          </div>
        </div>

        {/* Recent Analysis Table */}
        <div className="mt-10">
          <RecentAnalysisTable
            analyses={dashboardData.recentAnalyses}
          />
        </div>
      </Container>
    </section>
  );
}

export default DashboardPage;