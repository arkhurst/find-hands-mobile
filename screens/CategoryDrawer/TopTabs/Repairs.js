import React, { Fragment, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Entypo, Octicons, MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import FontSizes from '../../../constants/FontSizes';
import { RepairsCategory } from '../../../data/data';
import { ExploreCard } from '../../../components/Elements/Card';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function WellNessScreen({navigation}) {

  const onCardItemPressed = (title) => {
    console.log(title)
    navigation.navigate('Application Installation', { title:title})
  }
  return (
    <Fragment>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/repairs.jpg')}
          imageStyle={{
            opacity: 0.6,
            flex: 1,
            height: Layout.window.height * 0.24,
          }}
          style={styles.image}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Entypo name="leaf" size={28} color={'#43db90'} />
            <Text style={styles.imageText}>Repairs</Text>
            <View style={styles.locationContainer}>
              {/* <Octicons name="location" size={20} color={Colors.white} />
                       <Text style={{color:"red"}}> 25697 Pros near you</Text> */}
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingVertical: 10,
            paddingHorizontal: 4,
          }}>
          {RepairsCategory.map((items) => (
            <TouchableWithoutFeedback key={items.id} onPress={() => onCardItemPressed(items.name)}>
            <ExploreCard
              style={{
                height: Layout.window.height * 0.26,
                width: Layout.window.width * 0.47,
                marginHorizontal: 4,
                marginVertical: 10,
              }}>
              <Image source={items.image} style={styles.cardImage} />
              <View style={{ paddingVertical: 15, paddingHorizontal:10 }}>
                <Text style={styles.text}>{items.name}</Text>
                <View style={styles.cardLocationContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons
                      name="location-on"
                      size={20}
                      color={Colors.mainColor}
                    />
                    <Text style={styles.location}>{items.location}</Text>
                  </View>
                  <View>
                    <Ionicons
                      name="ios-arrow-forward"
                      size={24}
                      color={Colors.mainColor}
                    />
                  </View>
                </View>
              </View>
            </ExploreCard>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  image: {
    backgroundColor: '#000',
    height: Layout.window.height * 0.24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontFamily: 'bold',
    color: Colors.white,
    fontSize: FontSizes.h5,
  },
  locationContainer: {
    backgroundColor: "rgba(67,219,144,0.9)",
    height: 30,
    width: Layout.window.width * 0.42,
    flexDirection: 'row',
    marginVertical: 20,
    borderRadius: 4,
    opacity: 0.5,
  },
  cardImage: {
    height: '53%',
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontFamily: 'bold',
    fontSize: FontSizes.t3,
  },
  cardLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  location: {
    fontFamily: 'regular',
    color: Colors.grey,
    paddingLeft: 5,
  },
});
