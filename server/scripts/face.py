import face_recognition
import numpy as np
import cv2
import os
import sys
from preprocess import preprocess_image
import json
import pickle

known_face_encodings = []
known_face_names = []

def loadDataset(encodings_path, names_path):
    global known_face_encodings, known_face_names
    with open(encodings_path, 'rb') as f:
        known_face_encodings = pickle.load(f)
    with open(names_path, 'rb') as f:
        known_face_names = pickle.load(f)

def recognize(img_path):
    found = []

    loadDataset('face_encodings.pkl', 'face_names.pkl')
    # Load an image with unknown faces
    i = preprocess_image(img_path)
    unknown_face_encodings = face_recognition.face_encodings(i)

    for unknown_face_encoding in unknown_face_encodings:
        # See if the face is a match for the known faces
        matches = face_recognition.compare_faces(known_face_encodings, unknown_face_encoding)

        if True in matches:
            first_match_index = matches.index(True)
            name = known_face_names[first_match_index]
            found.append(name)
    return found


if __name__ == "__main__":
    if len(sys.argv) != 2:
        exit(1)
    print(json.dumps(recognize(sys.argv[1])))