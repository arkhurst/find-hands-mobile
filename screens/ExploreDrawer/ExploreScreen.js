import React, { Fragment } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import {
  Explore_Category,
  Starting_Business,
  Planning_Party,
} from '../../data/data';
import { ServicesCard, ExploreCard } from '../../components/Elements/Card';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';

// Components
import CategoryComponent from '../../components/Explore/CategoryComponent';
import BusinessComponent from '../../components/Explore/BusinessComponent';
import PartyComponent from '../../components/Explore/PartyComponent';

import image from '../../assets/home_improvement.jpg';

const ExploreSearchScreen = () => {
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <View>
          {/* Popular Services */}
          <View style={{ paddingVertical: 15 }}>
            <View
              style={[styles.headerTextContainer, { paddingHorizontal: 15 }]}>
              <Text style={styles.headerText}>Popular Services</Text>
              <TouchableOpacity>
                <Text style={styles.buttonText}>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Phone or Repair */}
              <ServicesCard
                style={{ backgroundColor: '#818aff', marginLeft: 15 }}>
                <Entypo name="tools" size={25} color={Colors.white} />
                <Text style={styles.services}>Phone or Tablet Repair</Text>
              </ServicesCard>
              {/* Housing Cleaning */}
              <ServicesCard
                style={{ backgroundColor: '#f1575f', marginLeft: 15 }}>
                <Entypo name="home" size={25} color={Colors.white} />
                <Text style={styles.services}>{'Housing \nCleaning'}</Text>
              </ServicesCard>
              {/* Message Therapy*/}
              <ServicesCard
                style={{ backgroundColor: '#44cb89', marginLeft: 15 }}>
                <FontAwesome5 name="leaf" size={25} color={Colors.white} />
                <Text style={styles.services}> Message Therapy</Text>
              </ServicesCard>
            </ScrollView>
          </View>
          {/*Category  */}
          <View style={{ paddingVertical: 15, paddingHorizontal: 15 }}>
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerText}>Category</Text>
              <TouchableOpacity>
                <Text style={styles.buttonText}>See all</Text>
              </TouchableOpacity>
            </View>
            <ExploreCard style={{ marginVertical: 10 }}>
              <Image source={image} style={styles.image} />
              <View style={{ padding: 15 }}>
                <Text style={styles.text}>Home Improvement</Text>
                <View style={styles.locationContainer}>
                  <MaterialIcons
                    name="location-on"
                    size={24}
                    color={Colors.mainColor}
                  />
                  <Text style={styles.location}>2562 Pro near you</Text>
                </View>
              </View>
            </ExploreCard>
          </View>
          {/* Starting a new business */}
          <View style={{ paddingVertical: 15 }}>
            <View
              style={[styles.headerTextContainer, { paddingHorizontal: 15 }]}>
              <Text style={styles.headerText}>Starting a New Business</Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <FlatList
                data={Starting_Business}
                renderItem={({ item }) => <BusinessComponent {...item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          {/*Planning a party */}
          <View style={{ paddingVertical: 15 }}>
            <View
              style={[styles.headerTextContainer, { paddingHorizontal: 15 }]}>
              <Text style={styles.headerText}>Planning a party </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <FlatList
                data={Planning_Party}
                renderItem={({ item }) => <PartyComponent {...item} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingTop: 10,
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontFamily: 'bold',
    fontSize: FontSizes.t1,
  },
  buttonText: {
    fontSize: FontSizes.t3,
    color: Colors.mainColor,
    fontWeight: 'bold',
  },
  services: {
    fontFamily: 'bold',
    color: Colors.white,
  },
  image: {
    height: '70%',
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontFamily: 'bold',
    fontSize: FontSizes.t2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  location: {
    fontFamily: 'regular',
    color: Colors.grey,
    paddingLeft: 5,
  },
});
export default ExploreSearchScreen;
