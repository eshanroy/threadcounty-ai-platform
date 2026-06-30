import { getAnalyses } from "./supabaseService";

export async function getDashboardData() {
  const analyses = await getAnalyses();

  const totalUploads = analyses.length;

  const averageConfidence =
    totalUploads > 0
      ? (
          analyses.reduce(
            (sum, item) => sum + Number(item.confidence),
            0
          ) / totalUploads
        ).toFixed(1)
      : 0;

  const accuracy = averageConfidence;

  const weaveCounts = {};

  analyses.forEach((item) => {
    weaveCounts[item.weave_type] =
      (weaveCounts[item.weave_type] || 0) + 1;
  });

  const weaveDistribution = Object.entries(
    weaveCounts
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const confidenceData = analyses
    .slice()
    .reverse()
    .map((item, index) => ({
      name: `#${index + 1}`,
      confidence: Number(item.confidence),
    }));

  const recentAnalyses = analyses.slice(0, 5).map((item) => ({
    id: item.id,
    weaveType: item.weave_type,
    confidence: Number(item.confidence),
    quality: item.quality,
  }));

  return {
    stats: {
      totalUploads,
      averageConfidence: Number(averageConfidence),
      accuracy: Number(accuracy),
      weaveTypes: Object.keys(weaveCounts).length,
    },

    confidenceData,

    weaveDistribution,

    recentAnalyses,
  };
}