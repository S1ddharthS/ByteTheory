import io
from PIL import Image
from ultralytics import YOLO

model = YOLO("yolov8n.pt")

def detect_objects(image_bytes: bytes, conf_threshold: float =0.1) -> list[dict]:
    image = Image.open(io.BytesIO(image_bytes))

    results = model(image,conf=conf_threshold)

    detections = []

    for r in results:
        boxes = r.boxes
        for box in boxes:
            cls_id = int(box.cls[0].item())
            class_name = model.names[cls_id]

            confidence = round(float(box.conf[0].item()),2)

            xyxy = box.xyxy[0].tolist()
            coordinates = [round(coord,2) for coord in xyxy]

            detections.append({
                "class": class_name,
                "confidence": confidence,
                "box":coordinates
            })
    return detections