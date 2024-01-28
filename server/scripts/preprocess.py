import face_recognition
import cv2
import numpy as np

def preprocess_image(image_path, output_size=(500, 500), convert_gray=False):
    """
    Preprocess the image for face recognition.
    
    Parameters:
    - image_path: Path to the input image file.
    - output_size: Desired output size of the image as a tuple (width, height).
    - convert_gray: Boolean flag to convert the image to grayscale.

    Returns:
    - preprocessed_image: The preprocessed image ready for face recognition.
    """

    # Load the image using face_recognition
    image = face_recognition.load_image_file(image_path)

    # Resize the image
    image = cv2.resize(image, output_size, interpolation=cv2.INTER_AREA)

    # If grayscale conversion is required
    if convert_gray:
        image = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    
    return image