from pydantic import BaseModel

class CompareResponse(BaseModel):
    rgb: str
    thermal: str
    baseline: str
    ours: str
