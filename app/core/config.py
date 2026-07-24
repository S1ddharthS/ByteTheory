import os
from pathlib import Path

class Settings:
    """
    Application Settings
    """
    # Placeholder for the final dataset root
    # TODO: Replace with the actual dataset root path when VTUAV-det is available
    DATASET_ROOT: Path = Path(os.getenv("DATASET_ROOT", "/tmp/mock_dataset"))

settings = Settings()
