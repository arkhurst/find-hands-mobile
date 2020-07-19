import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

export default function WellnessScreen(){
    return(
        <Fragment>
          <View style={styles.container}>
              <Text>Hello from Wellness Screen</Text>
          </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.backgroundColor
    }
})