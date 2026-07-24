from pydantic import BaseModel

class MetricsResponse(BaseModel):
    mAP: float
    mAP50: float
    mAP75: float
    FPS: int
    Parameters: str
    ModelSize: str
