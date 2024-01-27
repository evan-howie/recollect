import React from 'react';
import {View} from 'react-native';
import {HomeTabNavigationProp} from '../types/navigation';
import HomeCamera from '../components/HomeCamera';
import {StyleSheet} from 'react-native';

type Props = {
  navigation: HomeTabNavigationProp;
};
const Home: React.FC<Props> = () => {
  return (
    <View style={styles.fullScreen}>
      <HomeCamera />
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Home;
