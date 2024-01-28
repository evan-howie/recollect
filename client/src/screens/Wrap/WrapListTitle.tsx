import React from 'react';
import WrapListTitleBackground from '../../components/WrapListTitleBackground';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const WrapListTitle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <WrapListTitleBackground />
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Your year in photos</Text>
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
    backgroundColor: '#F2EBDB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    backgroundColor: '#F2EBDB',
    aspectRatio: 1,
    borderWidth: 5,
    borderColor: '#444775',
    padding: 10,
    marginHorizontal: 5,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#444775',
    fontSize: 64,
  },
});

export default WrapListTitle;
