import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import useCachedResources from './hooks/useCachedResources';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {

  
  const isLoadingComplete = useCachedResources() 

  if(!isLoadingComplete){
    return null
  } else {
  return (
   <Fragment>
        {Platform.OS === 'ios' && <StatusBar style="auto" /> }
       <NavigationContainer>
         <DrawerNavigator />
       </NavigationContainer>
   </Fragment>
   
      
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
