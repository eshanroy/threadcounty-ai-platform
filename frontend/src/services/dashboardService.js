export async function getDashboardData() {
  return {
    stats: {
      totalUploads: 124,
      averageConfidence: 97.8,
      accuracy: 98.4,
      weaveTypes: 6,
    },

    confidenceData: [
      { name: "Mon", confidence: 96 },
      { name: "Tue", confidence: 98 },
      { name: "Wed", confidence: 97 },
      { name: "Thu", confidence: 99 },
      { name: "Fri", confidence: 98 },
      { name: "Sat", confidence: 97 },
      { name: "Sun", confidence: 99 },
    ],

    weaveDistribution: [
      { name: "Plain", value: 42 },
      { name: "Twill", value: 28 },
      { name: "Satin", value: 18 },
      { name: "Basket", value: 12 },
    ],

    recentAnalyses: [
      {
        id: 1,
        weaveType: "Plain Weave",
        confidence: 98.4,
        quality: "Excellent",
      },
      {
        id: 2,
        weaveType: "Twill Weave",
        confidence: 95.2,
        quality: "Good",
      },
      {
        id: 3,
        weaveType: "Basket Weave",
        confidence: 97.1,
        quality: "Excellent",
      },
    ],
  };
}