from pydantic import BaseModel, ConfigDict
from typing import List


def to_camel(string: str) -> str:
    parts = string.split("_")
    return parts[0] + "".join(word.capitalize() for word in parts[1:])


class AnalysisResponse(BaseModel):
    filename: str
    weaveType: str
    threadDensity: str
    confidence: float
    quality: str
    aiInsights: List[str]

    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
    )