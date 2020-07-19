import React, { Fragment } from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../../../constants/Colors';
import FontSizes from '../../../constants/FontSizes';
import Layout from '../../../constants/Layout'


export default function CompletedScreen(){
    return(
        <Fragment>
            <View style={styles.container}>
               <View style={{justifyContent:'center', alignItems:'center'}}>
                  <View style={styles.outerCircle}>
                     <View style={styles.innerCircle}>

                     </View>
                  </View>
                  <Animatable.Text iterationCount="infinite" animation="pulse" easing="ease-in-out" style={styles.headerText}>
                      Done!
                  </Animatable.Text>
                  <Text style={[styles.headerText,{fontFamily:'regular'}]}>
                      Maximus Installation Co. will get back to you in a short while
                  </Text>
               </View>
               <TouchableOpacity
          
          activeOpacity={0.9}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Okay</Text>
          </View>
        </TouchableOpacity>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:Colors.mainColor
    },
    outerCircle:{
        backgroundColor:'rgba(67,219,144,0.83)',
        width:100,
        height:100,
        borderRadius:50,
        justifyContent:"center",
        alignItems:'center'
    },
    innerCircle:{
        backgroundColor:Colors.white,
        width:70,
        height:70,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:FontSizes.t2,
        color:Colors.white,
        paddingVertical:20,
        fontFamily:'bold'
    },
    button: {
        marginBottom: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        height: Layout.window.height * 0.08,
        borderRadius: 5,
        width: Layout.window.width / 1.2,
      },
      buttonText: {
        fontFamily: 'bold',
        color: Colors.mainColor,
        fontSize: FontSizes.t2,
      },
})