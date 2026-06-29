import Container from "../../components/common/Container";

import ImagePanel from "../../components/analysis/ImagePanel";
import ConfidenceGauge from "../../components/analysis/ConfidenceGauge";
import MetricsGrid from "../../components/analysis/MetricsGrid";
import InsightsPanel from "../../components/analysis/InsightsPanel";

import { useAnalysis } from "../../context/AnalysisContext";

function AnalysisPage() {
  const {
    analysisResult,
    uploadedImage,
  } = useAnalysis();

  if (!analysisResult) {
    return (
      <Container className="py-20">
        <h1 className="text-4xl font-bold text-center">
          No analysis available.
        </h1>
      </Container>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-16">

      <Container>

        <div className="mb-12">

          <h1 className="text-5xl font-black text-slate-900">
            AI Fabric Analysis Report
          </h1>

          <p className="text-slate-500 mt-3">
            AI-powered textile inspection results.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <ImagePanel image={uploadedImage} />

          <div className="rounded-3xl bg-white shadow-lg flex items-center justify-center">
            <ConfidenceGauge
              value={analysisResult.confidence}
            />
          </div>

        </div>

        <div className="mt-8">
          <MetricsGrid analysis={analysisResult} />
        </div>

        <div className="mt-8">
          <InsightsPanel
            insights={analysisResult.aiInsights}
          />
        </div>

      </Container>

    </section>
  );
}

export default AnalysisPage;