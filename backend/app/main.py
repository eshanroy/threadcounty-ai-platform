from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.analyze import router as analyze_router

app = FastAPI(
    title="ThreadCounty AI API",
    version="1.0.0",
    description="Backend API for AI-powered textile analysis."
)

origins = [
    "http://localhost:5173",
    "https://threadcounty-ai-platform-nine.vercel.app",
    "https://threadcounty-ai-platform-git-main-eshan-roy-s-projects.vercel.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze_router)


@app.get("/")
def root():
    return {
        "message": "ThreadCounty AI Backend Running",
        "status": "success"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }