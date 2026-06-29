import jsPDF from "jspdf";

function DownloadReportButton({ analysis }) {
  const downloadPDF = () => {
    const pdf = new jsPDF();

    pdf.setFontSize(20);
    pdf.text("ThreadCounty AI Fabric Analysis Report", 20, 20);

    pdf.setFontSize(14);

    pdf.text(`Weave Type: ${analysis.weaveType}`, 20, 40);
    pdf.text(`Thread Density: ${analysis.threadDensity}`, 20, 50);
    pdf.text(`Confidence: ${analysis.confidence}%`, 20, 60);
    pdf.text(`Quality: ${analysis.quality}`, 20, 70);

    pdf.text("AI Insights:", 20, 90);

    analysis.aiInsights.forEach((item, index) => {
      pdf.text(`• ${item}`, 25, 105 + index * 10);
    });

    pdf.save("ThreadCounty-Analysis.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
    >
      Download PDF Report
    </button>
  );
}

export default DownloadReportButton;