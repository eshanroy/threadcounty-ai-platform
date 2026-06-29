from app.schemas.analysis_schema import AnalysisResponse


def analyze_fabric(filename: str) -> AnalysisResponse:
    """
    Mock AI analysis.
    Later this function will call the real AI model.
    """

    return AnalysisResponse(
        filename=filename,
        weave_type="Plain Weave",
        thread_density="92 × 88",
        confidence=98.4,
        quality="Excellent",
        ai_insights=[
            "Uniform weave detected.",
            "High fabric consistency.",
            "No visible defects.",
            "Suitable for premium garments."
        ]
    )