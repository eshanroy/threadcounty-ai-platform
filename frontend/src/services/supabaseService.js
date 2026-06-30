import { supabase } from "../lib/supabase";

export async function saveAnalysis(analysis) {
  const { data, error } = await supabase
    .from("fabric_analyses")
    .insert([
      {
        filename: analysis.filename,
        weave_type: analysis.weaveType,
        thread_density: analysis.threadDensity,
        confidence: analysis.confidence,
        quality: analysis.quality,
        ai_insights: analysis.aiInsights,
      },
    ])
    .select();

  if (error) {
    console.error("Supabase Error:", error);
    throw error;
  }

  return data;
}

export async function getAnalyses() {
  const { data, error } = await supabase
    .from("fabric_analyses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}