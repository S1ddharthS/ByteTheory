from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.api.routers import dataset, metrics, compare, detection

app = FastAPI(
    title="Object Detection API",
    description="Backend API for running YOLOv8 object detection",
    version="1.0.0"
)

# Include new API routers
app.include_router(dataset.router)
app.include_router(metrics.router)
app.include_router(compare.router)
app.include_router(detection.router)

# Enable CORS (Cross-Origin Resource Sharing)
# This allows your React frontend running on localhost:5173 to talk to FastAPI on localhost:8000
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For hackathon/development convenience
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    """Simple endpoint to verify the server is up and running."""
    return {"status": "healthy", "service": "Object Detection API"}
