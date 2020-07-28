import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import propTypes from 'prop-types';
import FontSizes from '../constants/FontSizes';
import Button from './Elements/Button';
import Layout from '../constants/Layout';

const SubSlideComponent = ({ subtitle, description, last, onPress }) => {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button
          label={last ? "Let's get started" : 'Next'}
          variant={last ? 'primary' : 'default'}
          {...{ onPress }}
        />
      </View>
    </Fragment>
  );
};

SubSlideComponent.prototypes = {
  label: propTypes.string,
  subtitle: propTypes.string,
  description: propTypes.string,
  last: propTypes.boolean,
  onPress: () => proptypes.void(),
};
const styles = StyleSheet.create({
  container: {  
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
 
  },
  subtitle: {
    fontFamily: 'bold',
    fontSize: FontSizes.h4,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
  },
  description: {
    fontFamily: 'regular',
    fontSize: FontSizes.t3,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default SubSlideComponent;