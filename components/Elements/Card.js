import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';

export function ServicesCard(props) {
  return (
    <Fragment>
      <View style={[props.style, styles.servicesCard]}>
        {props.children}
      </View>
    </Fragment>
  );
}
export function ExploreCard(props) {
  return (
    <Fragment>
      <View style={[styles.exploreCard, props.style]}>
        {props.children}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  exploreCard: {
    height: Layout.window.height * 0.3,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    shadowColor: Colors.tintColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
    borderRadius: 5,
  },
  servicesCard: {
    height: Layout.window.height * 0.16,
    width: Layout.window.height * 0.16,
    borderRadius: 14,
    padding: 10,
    justifyContent: 'space-between',
  },
});