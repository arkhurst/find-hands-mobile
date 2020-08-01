import React, { Fragment } from 'react';
import { View, Text, StyleSheet, ImageBackground , StatusBar} from 'react-native';
import Constants from 'expo-constants';
import Button from '../../components/Elements/Button';
import img from '../../assets/construction.jpg';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';


const Welcome = ({ navigation : {navigate}}) => {
    StatusBar.setBarStyle('light-content')
  return (
    <Fragment>
      <View style={styles.container}>
        <ImageBackground
          source={img}
          imageStyle={{ opacity: 0.7, flex: 1 }}
          style={{
            backgroundColor: '#000',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View></View>
          <Text style={styles.boldText}>Let's get started</Text>
          <Text style={styles.regularText}>
            Login or Sign up for an amazing experience
          </Text>
          <View style={{ paddingBottom: 20 }}>
            <Button onPress={() => navigate("Login")} variant={'primary'} label={'Have an account? Login'} />
          </View>

          <Button variant={'primary'} label={"Join us, it's free "} />
          <Button variant={'transparent'} label={'Forgot Password?'} />
        </ImageBackground>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: FontSizes.h4,
    textAlign: 'center',
    color: Colors.white,
    paddingBottom: 10,
  },
  regularText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: FontSizes.t4,
    paddingBottom: 20,
  },
});
export default Welcome;