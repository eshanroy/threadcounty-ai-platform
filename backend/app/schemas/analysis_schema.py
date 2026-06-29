from pydantic import BaseModel, ConfigDict
from typing import List


def to_camel(string: str) -> str:
    parts = string.split("_")
    return parts[0] + "".join(word.capitalize() for word in parts[1:])


class AnalysisResponse(BaseModel):
    filename: str
    weave_type: str
    thread_density: str
    confidence: float
    quality: str
    ai_insights: List[str]

    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
    )