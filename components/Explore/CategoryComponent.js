import React, { Fragment, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FontSizes from '../../constants/FontSizes';
import Colors from '../../constants/Colors';


const CategoryComponent = (props) => {
  const { name, image, location } = props;
  return (
    <Fragment>
      <View>
        <Image source={image} style={styles.image} />
        <View style={{ padding: 15 }}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons
              name="location-on"
              size={24}
              color={Colors.mainColor}
            />
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '85%',
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

export default memo(CategoryComponent);