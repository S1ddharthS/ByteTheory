from fastapi import HTTPException
from app.schemas.dataset import DatasetStatsResponse, DatasetImageResponse
from app.core.config import settings

def get_dataset_stats() -> DatasetStatsResponse:
    """
    Returns statistics about the dataset.
    TODO: Replace mock data with actual QFDet logic / annotation parsing later.
    """
    return DatasetStatsResponse(
        train_images=1200,
        validation_images=300,
        test_images=200,
        pedestrian_distribution={
            "small": 6400,
            "medium": 2100,
            "large": 350
        }
    )

def get_dataset_image(image_id: int) -> DatasetImageResponse:
    """
    Returns the RGB and Thermal image paths for a given image ID.
    Validates that the image ID is valid (e.g., > 0).
    TODO: Replace mock logic with real dataset lookup later.
    """
    if image_id <= 0:
        raise HTTPException(status_code=400, detail="Invalid image ID. Must be greater than 0.")
    
    # In a real scenario, you'd check if the file exists on disk:
    # if not (settings.DATASET_ROOT / "rgb" / f"{image_id:05d}.jpg").exists():
    #     raise HTTPException(status_code=404, detail="Image not found")
    
    # Using POSIX style paths to match the example, regardless of OS, for API response consistency
    # or just using forward slashes for URLs.
    rgb_path = f"/dataset/rgb/{image_id:05d}.jpg"
    thermal_path = f"/dataset/thermal/{image_id:05d}.jpg"
    
    return DatasetImageResponse(
        image_id=image_id,
        rgb_image=rgb_path,
        thermal_image=thermal_path
    )
