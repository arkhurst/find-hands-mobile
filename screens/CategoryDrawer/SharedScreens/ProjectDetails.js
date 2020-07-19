import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import RadioButtonRN from 'radio-buttons-react-native';
import FontSizes from '../../../constants/FontSizes';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Layout from '../../../constants/Layout';
import { set } from 'react-native-reanimated';

const items = [
  {
    label: 'Washing Machine',
  },
  {
    label: 'Refrigerator',
  },
  {
    label: 'Air Conditoner',
  },
  {
    label: 'Cooking Stove',
  },
  {
    label: 'Electric Current Stabiliser',
  },
  {
    label: 'Thermostart ',
  },
  {
    label: 'Fan',
  },
];

const brandItem = [
  {
    label: 'Samsung',
  },
  {
    label: 'Nasco',
  },
  {
    label: 'Sony',
  },
  {
    label: 'Midea',
  },
  {
    label: 'LG',
  },
  {
    label: 'Sony ',
  },
  {
    label: 'Hisense',
  },
];

const number = [];
for (let i = 0; i < 8; i++) {
  number.push({ label: i });
}

const size = [{ label: 'Large' }, { label: 'Medium' }, { label: 'Small' }];

export default function ProjectDetailsScreen({ navigation }) {
  const [typeOfAppliance, setTypeOfAppliance] = useState(null);
  const [brand, setBrand] = useState(null);
  const [numberItems, setNumberItems] = useState(null);
  const [disabled, setDisabled] = useState(true);

  return (
    <Fragment>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.otherContainer}>
          <Text style={{ fontFamily: 'bold' }}>Other</Text>
          <TextInput
            style={styles.inputContainer}
            placeholder="Please specify..."
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            What type of appliance do you want to install?
          </Text>
        </View>
        <View>
          <RadioButtonRN
            style={styles.itemsContainer}
            data={items}
            animationTypes={['zoomIn']}
            circleSize={16}
            initial={-1}
            box={true}
            selectedBtn={(item) => setTypeOfAppliance(item)}
            activeColor={Colors.mainColor}
            inactiveColor={Colors.grey}
            textStyle={{
              fontFamily: 'regular',
              paddingLeft: 20,
              fontSize: FontSizes.t3,
            }}
            icon={
              <FontAwesome color={Colors.mainColor} name="circle" size={20} />
            }
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            What type of appliance do you want to install?
          </Text>
        </View>
        <View>
          <RadioButtonRN
            style={styles.itemsContainer}
            data={brandItem}
            animationTypes={['zoomIn']}
            initial={-1}
            box={true}
            selectedBtn={(item) => setBrand(item)}
            activeColor={Colors.mainColor}
            inactiveColor={Colors.grey}
            textStyle={{
              fontFamily: 'regular',
              paddingLeft: 20,
              fontSize: FontSizes.t3,
            }}
            icon={
              <FontAwesome color={Colors.mainColor} name="circle" size={20} />
            }
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>
            How many items do you want to buy?
          </Text>
        </View>
        <View>
          <RadioButtonRN
            style={styles.itemsContainer}
            data={number}
            animationTypes={['zoomIn']}
            initial={-1}
            box={true}
            selectedBtn={(item) => setNumberItems(item)}
            activeColor={Colors.mainColor}
            inactiveColor={Colors.grey}
            textStyle={{
              fontFamily: 'regular',
              paddingLeft: 20,
              fontSize: FontSizes.t3,
            }}
            icon={
              <FontAwesome color={Colors.mainColor} name="circle" size={20} />
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.9}
        onPressIn={() => navigation.navigate('Add Photos')}>
        <View style={styles.button}>
          <Text style={styles.buttonTexT}>Next</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  headerTextContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'bold',
    fontSize: FontSizes.t2,
    paddingVertical: 10,
    width: '70%',
  },
  itemsContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 30,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.mainColor,
    height: Layout.window.height / 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTexT: {
    fontSize: FontSizes.t3,
    fontFamily: 'bold',
    color: Colors.white,
  },
  otherContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    color: Colors.grey,
    width: '80%',
    height: 50,
    padding: 10,
    marginVertical: 20,
  },
});