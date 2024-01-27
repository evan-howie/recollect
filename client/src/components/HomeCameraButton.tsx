import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

type Props = {
  onPress: () => void;
};
const HomeCameraButton: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.fit, ...styles.button}}
      onPress={onPress}>
      <View style={styles.fill} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fit: {
    alignSelf: 'flex-start',
  },
  fill: {
    flex: 1,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'black',
  },
});

export default HomeCameraButton;
