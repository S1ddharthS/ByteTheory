from fastapi import APIRouter
from app.schemas.compare import CompareResponse
from app.services import compare_service

router = APIRouter(tags=["Compare"])

@router.get("/compare", response_model=CompareResponse)
def get_compare():
    """
    Get prediction comparisons for RGB, Thermal, Baseline, and QFDet models.
    """
    return compare_service.get_compare_predictions()
