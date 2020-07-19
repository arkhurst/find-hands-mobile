import React, {Fragment} from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Colors from '../../constants/Colors';
import FontSizes from '../../constants/FontSizes';

export default function Header(props){
    const {title, navigation} = props
    return(
        <Fragment>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color={Colors.white} />
              </TouchableOpacity>
              <Text style={styles.text}>{title}</Text>
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.mainColor,
        flexDirection:"row",
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        paddingTop: Constants.statusBarHeight,
    },
    text:{
        fontFamily:'bold',
        fontSize:FontSizes.t1,
        color:Colors.white
    }
})