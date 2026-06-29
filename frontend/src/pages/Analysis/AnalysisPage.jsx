import Container from "../../components/common/Container";
import { motion } from "motion/react";

import ImagePanel from "../../components/analysis/ImagePanel";
import ConfidenceGauge from "../../components/analysis/ConfidenceGauge";
import MetricsGrid from "../../components/analysis/MetricsGrid";
import InsightsPanel from "../../components/analysis/InsightsPanel";
import DownloadReportButton from "../../components/analysis/DownloadReportButton";
import AnalyzeAgainButton from "../../components/analysis/AnalyzeAgainButton";

import { useAnalysis } from "../../context/AnalysisContext";

function AnalysisPage() {
  const { analysisResult, uploadedImage } = useAnalysis();

  if (!analysisResult) {
    return (
      <Container className="py-20">
        <h1 className="text-center text-4xl font-bold">
          No analysis available.
        </h1>
      </Container>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Container>
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-slate-900">
              AI Fabric Analysis Report
            </h1>

            <p className="mt-3 text-slate-500">
              AI-powered textile inspection results.
            </p>
          </div>

          {/* Image + Confidence */}
          <div className="grid gap-8 lg:grid-cols-2">
            <ImagePanel image={uploadedImage} />

            <div className="flex items-center justify-center rounded-3xl bg-white shadow-lg">
              <ConfidenceGauge value={analysisResult.confidence} />
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-8">
            <MetricsGrid analysis={analysisResult} />
          </div>

          {/* AI Insights */}
          <div className="mt-8">
            <InsightsPanel insights={analysisResult.aiInsights} />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-end">
            <AnalyzeAgainButton />
            <DownloadReportButton analysis={analysisResult} />
          </div>
        </Container>
      </motion.div>
    </section>
  );
}

export default AnalysisPage;