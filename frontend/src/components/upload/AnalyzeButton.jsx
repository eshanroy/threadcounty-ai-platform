import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Sparkles } from "lucide-react";

import { useUpload } from "../../context/UploadContext";
import { useAnalysis } from "../../context/AnalysisContext";

import { analyzeFabric } from "../../services/analysisService";
import { saveAnalysis } from "../../services/supabaseService";

function AnalyzeButton() {
  const navigate = useNavigate();

  const {
    selectedFile,
    isAnalyzing,
    setIsAnalyzing,
  } = useUpload();

  const {
    setAnalysisResult,
    setUploadedImage,
  } = useAnalysis();

  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.error("Please select an image first.");
      return;
    }

    try {
      setIsAnalyzing(true);

      const result = await analyzeFabric(selectedFile);

      // Update UI
      setAnalysisResult(result);
      setUploadedImage(URL.createObjectURL(selectedFile));

      // Save to Supabase
      try {
        await saveAnalysis(result);
      } catch (saveError) {
        console.error("Failed to save analysis:", saveError);
        toast.error("Analysis completed, but couldn't save to history.");
      }

      toast.success("Fabric analyzed successfully!");

      navigate("/analysis");
    } catch (error) {
      console.error("Analysis failed:", error);
      toast.error("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <button
      onClick={handleAnalyze}
      disabled={!selectedFile || isAnalyzing}
      className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xl font-bold shadow-lg transition-all duration-300 ${
        selectedFile && !isAnalyzing
          ? "bg-blue-600 text-white hover:scale-[1.02] hover:bg-blue-700"
          : "cursor-not-allowed bg-slate-300 text-slate-500"
      }`}
    >
      <Sparkles size={22} />

      {isAnalyzing ? "Analyzing Fabric..." : "Analyze Fabric"}
    </button>
  );
}

export default AnalyzeButton;