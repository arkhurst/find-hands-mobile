import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import proptypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';
import FontSizes from '../../constants/FontSizes';

const Button = ({ variant, label, onPress, children }) => {
  const backgroundColor =
    variant === 'primary'
      ? '#2CB9B0'
      : variant === 'transparent'
      ? 'transparent'
      : 'rgba(12,13,52,0.05)';
  const color =
    variant === 'primary'
      ? 'white'
      : variant === 'transparent'
      ? '#fff'
      : '#0C0D34';
  return (
    <Fragment>
      <RectButton
        style={[styles.container, { backgroundColor }]}
        {...{ onPress }}>
        {children ? (
          children
        ) : (
          <>
            <Text style={[styles.label, { color }]}>{label}</Text>
          </>
        )}
      </RectButton>
    </Fragment>
  );
};

Button.defaultProps = {
  variant: 'default',
};
Button.prototypes = {
  variant: proptypes.string,
  label: proptypes.string,
  onPress: () => proptypes.void(),
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: FontSizes.t4,
    fontFamily: 'bold',
    textAlign: 'center',
  },
});

export default Button;