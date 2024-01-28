import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import LoginBackgroundSVG from '../components/LoginBackgroundSVG';
import {LoginScreenNavigationProp} from '../types/navigation';
import recollect from '../assets/recollect.png';

const Login: React.FC<LoginScreenNavigationProp> = ({navigation}) => {
  function onLogin() {
    navigation.navigate('MainApp');
  }

  return (
    <View style={styles.container}>
      <View>
        <LoginBackgroundSVG style={styles.background} />
      </View>
      <View style={styles.centerChildren}>
        <Text style={styles.login}>Login</Text>
        {/* Username and password fields */}
        <TextInput
          style={{...styles.input, ...styles.username}}
          placeholder="Username"
          placeholderTextColor={'#44477599'}
        />
        <TextInput
          style={{...styles.input, ...styles.password}}
          placeholder="Password"
          placeholderTextColor={'#44477599'}
        />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button, ...styles.signupButton}}>
          <Text style={{...styles.buttonText, ...styles.signupButtonText}}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
      <Image source={recollect} style={styles.recollectIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444775',
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  login: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  centerChildren: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F2EBDB',
    marginHorizontal: 50,
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#444775',
  },
  password: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderColor: '#444775',
    marginBottom: 60,
  },
  button: {
    width: 207,
    height: 55,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#7766C4',
    borderRadius: 30,
  },
  buttonText: {
    color: '#F2EBDB',
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#F2EBDB',
    marginTop: 10,
  },
  signupButtonText: {
    color: '#7766C4',
  },
  recollectIcon: {
    position: 'absolute',
    bottom: 55,
    alignSelf: 'center',
    width: 80,
    height: 80,
  },
});

export default Login;
