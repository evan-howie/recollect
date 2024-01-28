import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import LoginBackgroundSVG from '../../components/LoginBackgroundSVG';

const Wrap = ({navigation}) => {
  const [numPhotos, setNumPhotos] = useState(35);

  function onWrap() {
    navigation.navigate('WrapList');
  }
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <LoginBackgroundSVG />
      </View>
      <View style={styles.gapList}>
        <View style={styles.label}>
          <Text style={styles.labelText}>
            Submitted {numPhotos} photos so far.
          </Text>
        </View>
        <TouchableOpacity
          style={{...styles.label, ...styles.fillContainer}}
          onPress={onWrap}>
          <View>
            <Text style={styles.labelText}>See your collection now!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    backgroundColor: '#7665C4',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    borderRadius: 10,
    backgroundColor: '#F9B0C3',
    // iOS Shadow Properties
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 10, // x-offset
      height: 10, // y-offset
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // Android Shadow - Elevation
    elevation: 10, // Adjust as needed

    marginHorizontal: 10,
    padding: 40,
  },
  labelText: {
    color: '#444775',
    fontFamily: 'Inter',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fillContainer: {
    alignSelf: 'stretch',
  },
  gapList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
  },
});
export default Wrap;
