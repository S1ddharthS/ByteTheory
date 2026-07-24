from pydantic import BaseModel
from typing import Dict

class PedestrianDistribution(BaseModel):
    small: int
    medium: int
    large: int

class DatasetStatsResponse(BaseModel):
    train_images: int
    validation_images: int
    test_images: int
    pedestrian_distribution: PedestrianDistribution

class DatasetImageResponse(BaseModel):
    image_id: int
    rgb_image: str
    thermal_image: str
