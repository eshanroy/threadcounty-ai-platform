import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

      console.log("Analysis Result:", result);

      // Update UI
      setAnalysisResult(result);
      setUploadedImage(URL.createObjectURL(selectedFile));

      // Save analysis to Supabase
      try {
        await saveAnalysis(result);
        console.log("Analysis saved to Supabase.");
      } catch (saveError) {
        console.error("Supabase Save Error:", saveError);
        toast.error("Analysis completed, but failed to save to history.");
      }

      toast.success("Fabric analyzed successfully!");

      navigate("/analysis");
    } catch (error) {
      console.error("Analysis Error:", error);
      toast.error("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <button
      onClick={handleAnalyze}
      disabled={!selectedFile || isAnalyzing}
      className={`w-full rounded-2xl py-4 text-lg font-semibold transition-all duration-300 ${
        selectedFile && !isAnalyzing
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "cursor-not-allowed bg-slate-300 text-slate-500"
      }`}
    >
      {isAnalyzing ? "Analyzing..." : "Analyze Fabric"}
    </button>
  );
}

export default AnalyzeButton;