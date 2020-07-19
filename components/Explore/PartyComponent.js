import React, { Fragment, memo } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { ExploreCard } from '../Elements/Card';

const PartyComponent = (props) => {
  const { image, name, location } = props;
  return (
    <Fragment>
      <ExploreCard
        style={{
          height: Layout.window.height * 0.23,
          width: Layout.window.height * 0.23,
          marginHorizontal: 10,
        }}>
        <Image source={image} style={styles.image} />
        <View style={{ padding: 15 }}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.locationContainer}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons
                name="location-on"
                size={24}
                color={Colors.mainColor}
              />
              <Text style={styles.location}>{location}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="ios-arrow-forward"
                size={24}
                color={Colors.mainColor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ExploreCard>
    </Fragment>
  );
};
const styles = StyleSheet.create({
  image: {
    height: '55%',
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontFamily: 'bold',
    fontSize: FontSizes.t3,
  },
  locationContainer: {
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

export default memo(PartyComponent);