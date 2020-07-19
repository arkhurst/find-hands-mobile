import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const RepairsScreen = () => {
    return(
        <Fragment>
            <View style={styles.container}>
                <Text>Hello from RepairsScreen</Text>
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
export default RepairsScreen;