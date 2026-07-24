from fastapi import APIRouter
from app.schemas.dataset import DatasetStatsResponse, DatasetImageResponse
from app.services import dataset_service

router = APIRouter(prefix="/dataset", tags=["Dataset"])

@router.get("/stats", response_model=DatasetStatsResponse)
def get_stats():
    """
    Get dataset statistics including total images and pedestrian distribution.
    """
    return dataset_service.get_dataset_stats()

@router.get("/image/{image_id}", response_model=DatasetImageResponse)
def get_image(image_id: int):
    """
    Get the RGB and Thermal images for a given image ID.
    """
    return dataset_service.get_dataset_image(image_id)
