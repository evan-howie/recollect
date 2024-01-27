import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import axios from '../axios';

export type SavePhotoToCameraRoll = (photoUri: string) => Promise<void>;

const savePhotoToCameraRoll: SavePhotoToCameraRoll = async photoUri => {
  try {
    // Save the photo
    await CameraRoll.saveAsset(photoUri, {type: 'photo'});
    console.warn(await axios.get('/'));
    // const result = await fetch(photoUri);
    // const data = await result.blob();
    console.log('Photo saved to camera roll!');
  } catch (error) {
    console.error('Error saving photo:', error);
  }
};

export default savePhotoToCameraRoll;
