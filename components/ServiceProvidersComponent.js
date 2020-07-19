import React, { Fragment, memo } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontSizes from '../constants/FontSizes';
import Colors from '../constants/Colors';

const ServiceProvidersComponent = (props) => {
  const { profile, speciality, cost, urgencyLevel, ratings } = props;
  return (
    <Fragment>
      <View style={styles.container}>
        {/* Profile Image */}
        <View>
          <Image source={profile} style={styles.profile} />
        </View>
        {/* Overview of Service Provider */}
        <View style={styles.overview}>
          <Text style={styles.speciality}>{speciality}</Text>
          <Text
            style={[styles.speciality, { color: 'gold', paddingVertical: 5 }]}>
            {ratings}
          </Text>
          <View style={styles.costContainer}>
            <Text style={styles.cost}>{cost}</Text>
          </View>
          <View style={styles.estimatedCostConatainer}>
            <Text style={styles.estimatedCost}>{'estimated cost'}</Text>
            <View style={styles.urgencyLevelContainer}>
              <MaterialCommunityIcons name="fire" size={24} color={'#43ae64'} />
              <Text style={styles.urgencyLevel}>{urgencyLevel}</Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    shadowColor: Colors.tintColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  overview: {
    paddingVertical: 10,
    paddingLeft: 15,
  },
  speciality: {
    fontFamily: 'bold',
    fontSize: FontSizes.t3,
  },
  costContainer: {
    height: 30,
    width: '25%',
    backgroundColor: Colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cost: {
    fontSize: FontSizes.t4,
    color: Colors.white,
    fontFamily: 'bold',
  },
  estimatedCostConatainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
  estimatedCost: {
    fontFamily: 'regular',
    color: Colors.grey,
  },
  urgencyLevelContainer: {
    backgroundColor: '#f2f9da',
    flexDirection: 'row',
    width: '52%',
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  urgencyLevel: {
    fontFamily: 'bold',
    color: '#43ae64',
  },
});

export default memo(ServiceProvidersComponent);