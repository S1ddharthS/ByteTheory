from app.integrations import qfdet

class DetectionService:
    @staticmethod
    def detect_image(rgb_bytes: bytes, thermal_bytes: bytes) -> list[dict]:
        """
        Process an RGB and Thermal image pair for detection.
        """
        return qfdet.detect_image(rgb_bytes, thermal_bytes)

    @staticmethod
    def detect_video(rgb_bytes: bytes, thermal_bytes: bytes) -> dict:
        """
        Process an RGB and Thermal video pair for detection.
        """
        return qfdet.detect_video(rgb_bytes, thermal_bytes)
