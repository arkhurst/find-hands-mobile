import React, { Fragment } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Container from '../../components/Elements/Container';
import SocialIcons from '../../components/Elements/SocialIcons';
import Button from '../../components/Elements/Button';
import Colors from '../../constants/Colors';

const Login = () => {
  StatusBar.setBarStyle('dark-content');
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
        <Text>Hello from login</Text>
      </Container>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Login;