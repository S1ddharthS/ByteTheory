from core.predict import detect_objects

# TODO: When QFDet model is ready, update this integration layer
# to call the QFDet submodule instead of YOLO.

def detect_image(rgb_bytes: bytes, thermal_bytes: bytes) -> list[dict]:
    """
    Temporary implementation using YOLO.
    In the future, this will use QFDet on both RGB and Thermal images.
    """
    # For now, just pass the RGB bytes to the existing YOLO model
    # Thermal bytes are ignored in the temporary implementation
    return detect_objects(rgb_bytes)

def detect_video(rgb_bytes: bytes, thermal_bytes: bytes) -> dict:
    """
    Mock implementation for video inference.
    Will be replaced by QFDet video inference.
    """
    return {
        "status": "processing_complete",
        "frames_processed": 420,
        "detections": 389,
        "average_confidence": 0.93,
        "processing_time": "8.4s",
        "annotated_video": "output/demo.mp4"
    }
