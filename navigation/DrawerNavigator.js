import React, { Fragment, useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createStackNavigator,
  TransitionPresets,
  HeaderBackButton,
} from '@react-navigation/stack';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
} from 'react-native';
import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import Constants from 'expo-constants';
import ExploreScreen from '../screens/ExploreDrawer/ExploreScreen';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import FontSizes from '../constants/FontSizes';

// Top Taps
import HomeScreen from '../screens/CategoryDrawer/TopTabs/Home';
import RepairsScreen from '../screens/CategoryDrawer/TopTabs/Repairs';
import WellnessScreen from '../screens/CategoryDrawer/TopTabs/WellNess';

import ApplicationInstallationScreen from '../screens/CategoryDrawer/Home_Improvement/ApplianceInstallationScreen';
import ServiceProviders from '../screens/CategoryDrawer/Home_Improvement/ServiceProviders';
import ServiceProviderProfile from '../screens/CategoryDrawer/Home_Improvement/ServiceProviderProfile';
import ConfirmRequestScreen from '../screens/CategoryDrawer/Home_Improvement/ConfirmServiceRequest';
import ProjectDetailsScreen from '../screens/CategoryDrawer/Home_Improvement/ProjectDetails';
import AddPhotosScreen from '../screens/CategoryDrawer/Home_Improvement/AddPhotos';


const Drawer = createDrawerNavigator();
const TopTabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopTapNavigator = () => {
  return (
    <Fragment>
      <TopTabs.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: FontSizes.t5,
            color: Colors.white,
            fontFamily:'bold'
          },
          style: { backgroundColor: Colors.mainColor },
          indicatorStyle: { backgroundColor: Colors.indicatorStyle, height: 5 },
          tabStyle: { flexDirection: 'row', paddingVertical: 15 },
          showIcon: true,
        }}>
        <TopTabs.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Entypo name="home" size={20} color={Colors.white} />
            ),
          }}
        />
          <TopTabs.Screen
        name="WellNess"
        component={WellnessScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="leaf" size={20} color={Colors.white} />
          ),
          tabBarLabel: 'Wellness',
        }}
      />
        <TopTabs.Screen
          name={'Repairs'}
          component={RepairsScreen}
          options={{
            tabBarLabel: 'Repairs',
            tabBarIcon: () => (
              <Entypo name="tools" size={20} color={Colors.white} />
            ),
          }}
        />
      </TopTabs.Navigator>
    </Fragment>
  );
};

const ExploreStack = ({ navigation }) => {
    const [search, setSearch] = useState('');

    function updateSearch(search) {
      setSearch(search);
    }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          header: () => (
            <>
              <View
                style={{
                  backgroundColor: Colors.mainColor,
                  paddingTop: Constants.statusBarHeight,
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 10,
                  }}>
                  <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Entypo name="menu" size={24} color={Colors.white} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: FontSizes.h4,
                      color: Colors.white,
                      paddingLeft: 20,
                    }}>
                    Explore
                  </Text>
                </View>
                <View style={{ paddingBottom: 10 }}>
                <Searchbar
                    placeholder="What do you need help with?"
                    iconColor={Colors.mainColor}
                    value={search}
                    onChangeText={updateSearch}
                  />
                </View>
              </View>
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const ProjectCategoryStack = ({ navigation }) => {
  const config = {
    animation: 'timing',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     ...TransitionPresets.ModalPresentationIOS,
    //     cardOverlay:true,
    //     gestureEnabled:true
    //   }}
    >
      <Stack.Screen
        name="Core"
        component={TopTapNavigator}
        options={{
          header: () => (
            <>
              <View
                style={{
                  backgroundColor: Colors.mainColor,
                  paddingTop: Constants.statusBarHeight,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 15,
                  paddingBottom: 10,
                }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Entypo name="menu" size={24} color={Colors.white} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: FontSizes.h5,
                    color: Colors.white,
                    paddingLeft: 20,
                    fontFamily:'bold'
                  }}>
                  Project Category
                </Text>
              </View>
            </>
          ),
        }}
      />
       <Stack.Screen
        name="Application Installation"
        component={ApplicationInstallationScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.mainColor,
          },
          headerTitleStyle: {
            fontFamily: 'bold',
            color: Colors.white,
            fontSize: FontSizes.t1,
          },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Core')}>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="arrowleft"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Service Providers"
        component={ServiceProviders}
        options={{
          headerStyle: {
            backgroundColor: Colors.mainColor,
          },
          headerTitleStyle: {
            fontFamily: 'bold',
            color: Colors.white,
            fontSize: FontSizes.t1,
          },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Application Installation')}>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="arrowleft"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ServiceProviderProfile}
        options={{
          headerStyle: {
            backgroundColor: Colors.mainColor,
          },
          headerTitleStyle: {
            fontFamily: 'bold',
            color: Colors.white,
            fontSize: FontSizes.t1,
          },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Service Providers')}>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="arrowleft"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity> 
          ),
        }}
      />
      <Stack.Screen 
        name="Confirm Request"
        component={ConfirmRequestScreen}
        options={{
          headerShown:false,
          gestureEnabled:true,
          transitionSpec:{
            open:config,
            close:config
          }
        }}
      />
      <Stack.Screen 
        name="Project Details"
        component={ProjectDetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.mainColor,
          },
          headerTitleStyle: {
            fontFamily: 'bold',
            color: Colors.white,
            fontSize: FontSizes.t1,
          },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Confirm Request')}>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="arrowleft"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
        name="Add Photos"
        component={AddPhotosScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.mainColor,
          },
          headerTitleStyle: {
            fontFamily: 'bold',
            color: Colors.white,
            fontSize: FontSizes.t1,
          },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Project Details')}>
              <AntDesign
                style={{ paddingLeft: 10 }}
                name="arrowleft"
                size={24}
                color={Colors.white}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const CustomDrawer = (props) => {
  return (
    <Fragment>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/male.jpeg')}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              paddingVertical: 30,
              paddingHorizontal: 20,
              borderColor: Colors.borderColor,
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign up or Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Fragment>
  );
};
export default function DrawerNavigator() {
  const dimesions = useWindowDimensions();
  return (
    <Fragment>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: Colors.backgroundColor,
          width: Layout.window.width * 0.8,
        }}
        drawerType={dimesions.width >= 748 ? 'permanent' : 'slide'}
        statusBarAnimation="slide"
        drawerContent={(props) => <CustomDrawer {...props} />}
        drawerContentOptions={{
          labelStyle: { fontSize: FontSizes.t2,     fontFamily:'bold' },
          activeTintColor: Colors.mainColor,
          inactiveTintColor: Colors.drawerIconDefault,
        }}>
        <Drawer.Screen
          name={'Explore'}
          component={ExploreStack}
          options={{
            title: 'Explore',
            drawerIcon: ({ focused }) => (
              <MaterialIcons
                name="explore"
                size={24}
                color={
                  focused ? Colors.drawerIconSelected : Colors.drawerIconDefault
                }
              />
            ),
          }}
        />
        <Drawer.Screen
          name={'Category'}
          component={ProjectCategoryStack}
          options={{
            title: 'Project Category',
            drawerIcon: ({ focused }) => (
              <Ionicons
                name="ios-list-box"
                size={24}
                color={
                  focused ? Colors.drawerIconSelected : Colors.drawerIconDefault
                }
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    marginHorizontal: 20,
  },
  button: {
    height: 55,
    width: Layout.window.width * 0.5,
    backgroundColor: Colors.mainColor,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSizes.t3,
    fontFamily:'bold'
  },
});
