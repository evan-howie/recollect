import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import {StyleSheet, View} from 'react-native';
import {Dimensions, Platform} from 'react-native';
import NoCameraDeviceError from './NoCameraDeviceError';
import HomeCameraButton from './HomeCameraButton';
import savePhotoToCameraRoll from '../utils/savePhotoToCameraRoll';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Platform.select<number>({
  android: Dimensions.get('screen').height,
  ios: Dimensions.get('window').height,
}) as number;
const HomeCamera = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('front');

  const [targetFps, setTargetFps] = useState(60);
  const [isInitialized, setIsInitialized] = useState(false);

  const screenAspectRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
  const format = useCameraFormat(device, [
    {fps: targetFps},
    {videoAspectRatio: screenAspectRatio},
    {videoResolution: 'max'},
    {photoAspectRatio: screenAspectRatio},
    {photoResolution: 'max'},
  ]);

  const camera = useRef<Camera>(null);

  const takePicture = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto({
          qualityPrioritization: 'quality',
          flash: 'off',
          enableShutterSound: false,
        });

        savePhotoToCameraRoll(`file://${photo.path}`);
        console.warn(photo);
      } catch (error) {
        console.error(error);
        // Handle any errors (e.g., camera not ready or permissions issues)
      }
    }
  };

  if (!hasPermission) {
    requestPermission();
  }
  if (device == null) {
    return <NoCameraDeviceError />;
  }

  // Render the camera component

  return (
    <View onLayout={() => setIsInitialized(true)} style={styles.fullScreen}>
      <Camera
        style={styles.fullScreen}
        ref={camera}
        device={device}
        isActive={true}
        format={
          !isInitialized && Platform.OS === 'android' ? undefined : format
        }
        photo={true}
        orientation="portrait"
      />
      <View style={styles.button}>
        <HomeCameraButton onPress={takePicture} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});

export default HomeCamera;
