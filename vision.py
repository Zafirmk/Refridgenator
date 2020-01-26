import os, io
from google.cloud import vision
from google.cloud.vision import types
import numpy as np
import pandas as pd


os.environ['GOOGLE_APPLICATION_CREDENTIALS']=r"ConUHacks-musiq-546556e45f98.json"


client = vision.ImageAnnotatorClient()
def ObjectIdentifier(filename):
    ingrediants = []
    image_path = filename
    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()
    image = vision.types.Image(content=content)
    response = client.object_localization(image=image)
    localized_object_annotations = response.localized_object_annotations
    for obj in localized_object_annotations:
        ingrediants.append(obj.name)
    return(ingrediants)