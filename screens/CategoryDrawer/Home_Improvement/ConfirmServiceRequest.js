import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import FontSizes from '../../../constants/FontSizes';
import Layout from '../../../constants/Layout';

export default function ConfirmRequestScreen({navigation}) {
  return (
    <Fragment>
      <View style={styles.container}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../../assets/male.jpeg')}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.serviceProvider}>Maximus Intallation Co.</Text>
          <Text style={[styles.serviceProvider, { color: 'gold' }]}>4.9</Text>
          <Text style={styles.details}>
            We need a few details about your Service to check if this pro is
            available
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Project Details')}
          activeOpacity={0.9}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sure, that's alright</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
  profileContainer: {
    backgroundColor: Colors.backgroundColor,
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
  serviceProvider: {
    fontSize: FontSizes.t2,
    fontFamily: 'regular',
    color: Colors.white,
    paddingTop: 10,
  },
  details: {
    textAlign: 'center',
    fontSize: FontSizes.h1,
    color: Colors.white,
    fontFamily: 'bold',
    padding: 20,
  },
  button: {
    marginBottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: Layout.window.height * 0.08,
    borderRadius: 5,
    width: Layout.window.width / 1.2,
  },
  buttonText: {
    fontFamily: 'bold',
    color: Colors.mainColor,
    fontSize: FontSizes.t2,
  },
});
