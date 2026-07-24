from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.detection_service import DetectionService

router = APIRouter(prefix="/detect", tags=["Detection"])

@router.post("/image")
async def detect_image(
    rgb_image: UploadFile = File(...),
    thermal_image: UploadFile = File(...)
):
    """
    Endpoint to receive an uploaded RGB and Thermal image pair, process them, 
    and return bounding box detection results.
    """
    if not rgb_image.content_type.startswith("image/") or not thermal_image.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded files must be images.")
    
    rgb_bytes = await rgb_image.read()
    thermal_bytes = await thermal_image.read()
    
    results = DetectionService.detect_image(rgb_bytes, thermal_bytes)
    
    return {
        "filename": rgb_image.filename,
        "detections_count": len(results),
        "detections": results
    }

@router.post("/video")
async def detect_video(
    rgb_video: UploadFile = File(...),
    thermal_video: UploadFile = File(...)
):
    """
    Endpoint to receive an uploaded RGB and Thermal video pair, process them, 
    and return mock inference results.
    """
    if not rgb_video.content_type.startswith("video/") or not thermal_video.content_type.startswith("video/"):
        raise HTTPException(status_code=400, detail="Uploaded files must be videos.")
    
    rgb_bytes = await rgb_video.read()
    thermal_bytes = await thermal_video.read()
    
    results = DetectionService.detect_video(rgb_bytes, thermal_bytes)
    
    return results
