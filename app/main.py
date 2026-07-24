from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from core.predict import detect_objects

app = FastAPI(
    title="Object Detection API",
    description="Backend API for running YOLOv8 object detection",
    version="1.0.0"
)

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

@app.post("/detect")
async def detect(file: UploadFile = File(...)):
    """
    Endpoint to receive an uploaded image, process it, 
    and return bounding box detection results.
    """
    # 1. Validate that the uploaded file is an image
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file must be an image.")
    
    # 2. Read the asynchronous file stream into bytes
    image_bytes = await file.read()
    
    # 3. Call our prediction function
    results = detect_objects(image_bytes)
    
    # 4. Return clean JSON response
    return {
        "filename": file.filename,
        "detections_count": len(results),
        "detections": results
    }