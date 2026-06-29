import Container from "../../components/common/Container";
import Card from "../../components/common/Card";
import InfoCard from "../../components/common/InfoCard";

import { useAnalysis } from "../../context/AnalysisContext";

function AnalysisPage() {
  const {
    analysisResult,
    uploadedImage,
  } = useAnalysis();

  if (!analysisResult) {
    return (
      <Container className="py-20">
        <h1 className="text-4xl font-bold">
          No analysis available.
        </h1>
      </Container>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen py-16">

      <Container>

        <h1 className="text-5xl font-black mb-12">
          AI Fabric Analysis Report
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <Card className="p-6">

            <h2 className="text-2xl font-bold mb-5">
              Uploaded Image
            </h2>

            <img
              src={uploadedImage}
              alt="Uploaded Fabric"
              className="rounded-2xl w-full object-contain max-h-[450px]"
            />

          </Card>

          <Card className="flex items-center justify-center p-10">

            <div className="text-center">

              <p className="text-slate-500 text-lg">
                Confidence Score
              </p>

              <h2 className="text-7xl font-black text-blue-600 mt-4">
                {analysisResult.confidence}%
              </h2>

            </div>

          </Card>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <InfoCard
            title="Weave Type"
            value={analysisResult.weaveType}
          />

          <InfoCard
            title="Thread Density"
            value={analysisResult.threadDensity}
          />

          <InfoCard
            title="Quality"
            value={analysisResult.quality}
          />

        </div>

        <Card className="mt-8 p-8">

          <h2 className="text-3xl font-bold mb-6">
            AI Insights
          </h2>

          <ul className="space-y-4">

            {analysisResult.aiInsights.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-slate-100 p-4"
              >
                ✓ {item}
              </li>
            ))}

          </ul>

        </Card>

      </Container>

    </section>
  );
}

export default AnalysisPage;