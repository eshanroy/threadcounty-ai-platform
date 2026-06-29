import { useNavigate } from "react-router-dom";
import { useUpload } from "../../context/UploadContext";
import { useAnalysis } from "../../context/AnalysisContext";
import { analyzeFabric } from "../../services/analysisService";

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
    console.log(result);

    setAnalysisResult(result);
    setUploadedImage(URL.createObjectURL(selectedFile));
    navigate("/analysis");
    
  } catch (error) {
    console.error(error);
    alert("Analysis failed.");
  } finally {
    setIsAnalyzing(false);
  }
};

  return (
    <button
      disabled={!selectedFile || isAnalyzing}
      onClick={handleAnalyze}
      className={`w-full rounded-2xl py-4 text-lg font-semibold transition-all duration-300
      ${
        selectedFile
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "bg-slate-300 text-slate-500 cursor-not-allowed"
      }`}
    >
      {isAnalyzing ? "Analyzing..." : "Analyze Fabric"}
    </button>
  );
}

export default AnalyzeButton;