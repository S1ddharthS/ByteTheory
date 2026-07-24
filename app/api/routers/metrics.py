from fastapi import APIRouter
from app.schemas.metrics import MetricsResponse
from app.services import metrics_service

router = APIRouter(tags=["Metrics"])

@router.get("/metrics", response_model=MetricsResponse)
def get_metrics():
    """
    Get evaluation metrics (mAP, FPS, parameters, etc.).
    """
    return metrics_service.get_metrics()
