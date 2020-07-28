import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Image, Vibration } from 'react-native';
import propTypes from 'prop-types';
import Layout from '../../constants/Layout';

export const SLIDE_HEIGHT = Layout.window.height * 0.61;

const SlideComponent = ({ label, right, image }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    {
      translateX: right
        ? Layout.window.width / 2 - 50
        : -Layout.window.width / 2 + 50,
    },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.underlay}>
           <Image source={image} style={styles.image} />
        </View>
        <View style={[styles.titleContainer, { transform }]}>
          <Text style={styles.title}>{label}</Text>
        </View>
    
      </View>
    </Fragment>
  );
};

SlideComponent.propTypes = {
  label: propTypes.string,
  right: propTypes.boolean,
  image:propTypes.number
};

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,
    overflow:'hidden'
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: 'white',
    textAlign: 'center',
  },
  underlay:{
    ...StyleSheet.absoluteFillObject,
    justifyContent:'flex-end'
  },
  image:{
    ...StyleSheet.absoluteFillObject,
    // top:75,
    height:undefined,
    width:undefined,
    borderBottomRightRadius:75
  }
});
export default SlideComponent;