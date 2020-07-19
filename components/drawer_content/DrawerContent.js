import React, { Fragment } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import FontSizes from '../../constants/FontSizes';

const DrawerContentComponent = (props) => {
 
  return (
    <Fragment>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View >
            <Image
              style={styles.image}
              source={require('../../assets/male.jpeg')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              paddingVertical: 30,
              paddingHorizontal: 20,
              borderColor: Colors.borderColor,
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign up or Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    marginHorizontal: 20,
  },
  button: {
    height: 55,
    width: Layout.window.width * 0.5,
    backgroundColor: Colors.mainColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSizes.t3,
    fontFamily:'bold'
  },
});

export default DrawerContentComponent;