import face_recognition
import numpy as np
import os
import sys
import pickle
from preprocess import preprocess_image

known_face_encodings = []
known_face_names = []

def loadDataset():
    directory = "dataset/"

    for name in os.listdir(directory):
        subdir = os.path.join(directory, name)
        if os.path.isdir(subdir):
            for file in os.listdir(subdir):
                img_path = os.path.join(subdir, file)
                i = preprocess_image(img_path)

                # Check if face_encodings has detected any faces
                face_encodings = face_recognition.face_encodings(i)
                if face_encodings:
                    face_encoding = face_encodings[0]
                    known_face_encodings.append(face_encoding)
                    known_face_names.append(name)
                else:
                    print(f"No faces found in {img_path}")
    saveDataset('face_encodings.pkl', 'face_names.pkl')

def saveDataset(encodings_path, names_path):
    # Assuming known_face_encodings and known_face_names are already populated
    with open(encodings_path, 'wb') as f:
        pickle.dump(known_face_encodings, f)

    with open(names_path, 'wb') as f:
        pickle.dump(known_face_names, f)


if __name__ == "__main__":
    loadDataset()