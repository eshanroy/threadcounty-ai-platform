import { getAnalyses } from "./supabaseService";

export async function getHistory() {
  const analyses = await getAnalyses();

  return analyses.map((item) => ({
    id: item.id,
    image: item.image_url || "",
    weaveType: item.weave_type,
    confidence: item.confidence,
    quality: item.quality,
    date: new Date(item.created_at).toLocaleString(),
  }));
}