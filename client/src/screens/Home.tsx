import React from 'react';
import {View, Text} from 'react-native';
import {HomeTabNavigationProp} from '../types/navigation';

type Props = {
  navigation: HomeTabNavigationProp;
};
const Home: React.FC<Props> = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default Home;
