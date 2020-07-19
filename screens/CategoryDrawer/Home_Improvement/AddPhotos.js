import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import Colors from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import FontSizes from '../../../constants/FontSizes';
import Layout from '../../../constants/Layout';


export default function AddPhotosScreen({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);

  //    console.log(Object.entries(selectedImage))

  let openImagePicker = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        'Could not access your photos',
        'Please allow access to your photos',
        [{ text: 'OK', onPress: () => console.log('Ok Pressed') }]
      );
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            Would you like add photos to help the pro?
          </Text>
        </View>
        <TouchableOpacity onPress={openImagePicker} activeOpacity={0.5}>
          <View style={styles.button}>
            <MaterialIcons name="add" size={28} color={Colors.mainColor} />
            <Text style={styles.buttonText}>Add photo</Text>
          </View>
        </TouchableOpacity>
        {selectedImage !== null ? (
          <View>
            <Image
              style={styles.image}
              source={{ uri: selectedImage.localUri }}
            />

            <View style={styles.close}>
              <MaterialIcons
                name="clear"
                size={24}
                color={Colors.errorBackground}
              />
            </View>
          </View>
        ) : null}
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
       >
        <View style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  headerTextContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: FontSizes.t2,
    paddingVertical: 10,
    width: '70%',
  },
  button: {
    height: Layout.window.height * 0.08,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: Colors.mainColor,
    borderRadius: 4,
    marginVertical: 30,
    marginHorizontal: 15,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontFamily: 'bold',
    fontSize: FontSizes.t3,
    color: Colors.mainColor,
    paddingLeft: Layout.window.width / 4,
  },
  image: {
    width: 400,
    height: Layout.window.height * 0.35,
    resizeMode: 'contain',
  },
  close: {
    flex: 1,
    backgroundColor: Colors.white,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    right: 70,
    top: -20,
    shadowColor: Colors.tintColor,
    shadowOffset: { height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: Colors.mainColor,
    height: Layout.window.height / 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: FontSizes.t3,
    fontFamily: 'bold',
    color: Colors.white,
  },
});