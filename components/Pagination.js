import React, { Fragment } from 'react';
import { View } from 'react-native';
import proptypes from 'prop-types';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';

const Pagination = ({ index, currentIndex }) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Fragment>
      <Animated.View
        style={{
          opacity,
          backgroundColor: '#2CB9B0',
          width: 8,
          height: 8,
          borderRadius: 4,
          margin: 4,
          transform:[{scale}]
        }}></Animated.View>
    </Fragment>
  );
};

Pagination.proptypes = {
  index: proptypes.number,
  currentIndex: proptypes.number,
};

export default Pagination;