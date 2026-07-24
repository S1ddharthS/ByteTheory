from app.schemas.compare import CompareResponse

def get_compare_predictions() -> CompareResponse:
    """
    Returns paths to comparison images for RGB, Thermal, Baseline, and QFDet models.
    TODO: Point to actual generated prediction images when they exist.
    """
    return CompareResponse(
        rgb="/predictions/rgb/sample.jpg",
        thermal="/predictions/thermal/sample.jpg",
        baseline="/predictions/baseline/sample.jpg",
        ours="/predictions/ours/sample.jpg"
    )
