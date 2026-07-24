from app.schemas.metrics import MetricsResponse

def get_metrics() -> MetricsResponse:
    """
    Returns evaluation metrics.
    TODO: Load these values from evaluation JSON files or calculate them after QFDet model evaluation.
    """
    return MetricsResponse(
        mAP=0.74,
        mAP50=0.91,
        mAP75=0.82,
        FPS=31,
        Parameters="25.6M",
        ModelSize="97 MB"
    )
