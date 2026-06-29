from app.schemas.analysis_schema import AnalysisResponse
from pathlib import Path
import shutil
import uuid

from fastapi import APIRouter, File, UploadFile, HTTPException

from app.services.ai_service import analyze_fabric

router = APIRouter(prefix="/analyze", tags=["Analysis"])

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/", response_model=AnalysisResponse, response_model_by_alias=True)
async def analyze_image(file: UploadFile = File(...)):
    if not file.content_type.startswith("image/"):
        raise HTTPException(
            status_code=400,
            detail="Only image files are allowed."
        )

    extension = Path(file.filename).suffix

    unique_filename = f"{uuid.uuid4()}{extension}"

    file_path = UPLOAD_DIR / unique_filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = analyze_fabric(unique_filename)

    return result