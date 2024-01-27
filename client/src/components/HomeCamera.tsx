import React from 'react';
import {useCameraDevice, useCameraPermission} from 'react-native-vision-camera';
import NoCameraDeviceError from './NoCameraDeviceError';
import {Camera} from 'react-native-vision-camera';
import {StyleSheet} from 'react-native';

const HomeCamera = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('front');

  if (!hasPermission) {
    requestPermission();
  }
  if (device == null) {
    return <NoCameraDeviceError />;
  }

  return <Camera style={styles.fullScreen} device={device} isActive={true} />;
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});

export default HomeCamera;
