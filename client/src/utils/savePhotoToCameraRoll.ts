import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import axios from '../axios';

export type SavePhotoToCameraRoll = (photoUri: string) => Promise<void>;

const savePhotoToCameraRoll: SavePhotoToCameraRoll = async photoUri => {
  try {
    // Save the photo
    await CameraRoll.saveAsset(photoUri, {type: 'photo'});
    const result = await fetch(photoUri);
    const data = await result.arrayBuffer();

    await axios.post('/upload', data, {
      headers: {'Content-Type': 'image/jpeg'},
    });

    // .catch(err => console.log(err));
  } catch (error) {
    console.error('Error saving photo:', error);
  }
};

export default savePhotoToCameraRoll;
