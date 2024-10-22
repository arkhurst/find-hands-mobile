import React, { Fragment, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import proptypes from 'prop-types';
import Colors from '../../constants/Colors';
import Constant from 'expo-constants';
import Layout from '../../constants/Layout';

export default function Container({ children, footer }) {
  return (
    <Fragment>
      <View
        style={{
          flex: 1,
          backgroundColor: '#110b4f',
       
        }}>
        <View
          style={{
            paddingTop:10,
            borderBottomLeftRadius: 60,
            backgroundColor: Colors.white,
            borderBottomRightRadius: 60,
            height: Layout.window.height / 1.3,
          }}>
          {children}
        </View>
        <View style={{ paddingTop: 30,    }}>
          {footer}
        </View>
      </View>
    </Fragment>
  );
}