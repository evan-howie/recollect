import React, {useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import WrapListTitle from '../Wrap/WrapListTitle';
import WrapListFriend from './WrapListFriend';

const Wrap = [WrapListTitle, WrapListFriend];

const WrapList = () => {
  const [selected, setSelected] = useState(0);
  function increment() {
    if (selected < Wrap.length - 1) {
      setSelected(selected + 1);
    } else {
      setSelected(0);
    }
  }

  return (
    <Pressable onPress={increment} style={styles.container}>
      {Wrap[selected]()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
export default WrapList;
