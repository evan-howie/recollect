import React from 'react';
import {View} from 'react-native';
import WrapListFriendBackground from '../../components/WrapListFriendBackground';
import {StyleSheet} from 'react-native';

const WrapListFriend = () => {
  return (
    <View style={styles.container}>
      <View>
        <WrapListFriendBackground />
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
});

export default WrapListFriend;
