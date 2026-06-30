import { useNavigate } from "react-router-dom";
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
    if (!selectedFile) return;

    try {
      setIsAnalyzing(true);

      const result = await analyzeFabric(selectedFile);

      console.log("Analysis Result:", result);

      // Update UI
      setAnalysisResult(result);
      setUploadedImage(URL.createObjectURL(selectedFile));

      // Save to Supabase (don't block UI if it fails)
      try {
        await saveAnalysis(result);
        console.log("Analysis saved to Supabase.");
      } catch (saveError) {
        console.error("Supabase Save Error:", saveError);
      }

      navigate("/analysis");
    } catch (error) {
      console.error("Analysis Error:", error);
      alert("Analysis failed.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <button
      onClick={handleAnalyze}
      disabled={!selectedFile || isAnalyzing}
      className={`w-full rounded-2xl py-4 text-lg font-semibold transition-all duration-300 ${
        selectedFile
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "cursor-not-allowed bg-slate-300 text-slate-500"
      }`}
    >
      {isAnalyzing ? "Analyzing..." : "Analyze Fabric"}
    </button>
  );
}

export default AnalyzeButton;