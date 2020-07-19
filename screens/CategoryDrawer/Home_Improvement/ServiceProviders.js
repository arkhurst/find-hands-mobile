import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Service_Providers } from '../../../data/data';
import ServiceProvidersComponent from '../../../components/ServiceProvidersComponent';

export default function ServiceProviders({navigation}) {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.timeLocationContainer}>
          <View style={styles.timeLocationWrapper}>
            <MaterialIcons name="location-on" size={24} color={Colors.white} />
            <Text style={styles.text}>Dzorwulu</Text>
          </View>
          <View style={styles.timeLocationWrapper}>
            <MaterialCommunityIcons
              name="calendar-month"
              size={24}
              color={Colors.white}
            />
            <Text style={styles.text}>Dec 24, 2020</Text>
          </View>
        </View>
        <ScrollView style={{ padding: 10, flex: 1 }}>
          {Service_Providers && (
            <>
              {Service_Providers.map((item) => (
               <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                  <ServiceProvidersComponent key={item.id} {...item} />
               </TouchableWithoutFeedback> 
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'rgba(67,219,144,0.83)',
  },
  timeLocationWrapper: {
    borderRightWidth: 2,
    borderColor: Colors.mainColor,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontFamily: 'bold',
    paddingLeft: 15,
  },
});