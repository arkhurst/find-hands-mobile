import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import Container from '../../components/Elements/Container';
import TextInput from '../../components/Elements/Form';
import SocialIcons from '../../components/Elements/SocialIcons';
import Button from '../../components/Elements/Button';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';
import CheckBox from '../../components/Elements/Checkbox';

const emailValidator = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const passwordValidator = (password) => password.length >= 6;

const Login = () => {
  StatusBar.setBarStyle('dark-content');

  const [email, setEmail] = useState('');
  const footer = (
    <>
      <SocialIcons />
      <View style={{ alignItems: 'center' }}>
        <Button variant={'transparent'} onPress={() => alert('Sign Up')}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: Colors.white, fontWeight: 'bold' }}>
              Don't have account?
            </Text>
            <Text
              style={{ color: '#2CB9B0', fontWeight: 'bold', marginLeft: 10 }}>
              Sign Up here
            </Text>
          </View>
        </Button>
      </View>
    </>
  );
  return (
    <Fragment>
      <Container {...{ footer }}>
        <View
          style={{
            paddingTop: Constants.statusBarHeight,
            paddingHorizontal: 40,
          }}>
          <Text style={styles.title1}>Welcome back</Text>
          <Text style={styles.title2}>
            Use your login credentials below and login to your account
          </Text>
          <View style={{ marginBottom: 15 }}>
            <TextInput
              value={email}
              onChange={(e) => setEmail(e)}
              icon="mail"
              placeholder="Enter your Email"
              validator={emailValidator}
            />
          </View>

          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            validator={passwordValidator}
          />
          <View style={styles.rememberContainer}>
            <CheckBox label={'Remember me'} />
            <Button variant="transparent">
              <Text style={styles.forgotPassword}>Forgot password</Text>
            </Button>
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Button variant="primary" label={'Log into your account'} />
          </View>
        </View>
      </Container>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title1: {
    paddingTop: 20,
    fontFamily: 'bold',
    fontSize: FontSizes.h3,
    textAlign: 'center',
    marginBottom: 10,
  },
  title2: {
    fontFamily: 'regular',
    textAlign: 'center',
    color: 'rgba(12,13,52,0.5)',
    marginBottom: 25,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    fontFamily: 'regular',
    color: '#2CB9B0',
  },
});
export default Login;