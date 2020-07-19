import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, Platform, Keyboard } from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../../constants/Colors';
import FontSizes from '../../../constants/FontSizes';
import Layout from '../../../constants/Layout';
import Header from '../../../components/Elements/Header';

export default function ApplicationInstallationScreen({ navigation, route }) {
  const { title } = route.params;

  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [checkButton, setCheckButton] = useState(Layout.window.height * 0.47);

  const onDateChanged = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const showCalender = () => {
    setCheckButton(Layout.window.height * 0.23);
    setShow(true);
  };

  const closeCalender = () => {
    setCheckButton(Layout.window.height * 0.47);
    setShow(false);
    Keyboard.dismiss();
  };

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={() => closeCalender()}>
        <View style={styles.container}>
          <View style={{ paddingTop: 15 }}>
            <Text style={styles.headerText}>What's your location?</Text>
            <View style={styles.textInputContainer}>
              <MaterialIcons
                name="location-on"
                size={24}
                color={Colors.mainColor}
              />
              <TextInput
                placeholder={'City or town'}
                style={{ paddingLeft: 8, fontFamily: 'regular' }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 15 }}>
            <Text style={styles.headerText}>When do you want the service?</Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => showCalender()}>
              <View style={styles.textInputContainer}>
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={24}
                  color={Colors.mainColor}
                />
                <Text
                  style={{
                    paddingLeft: 8,
                    fontFamily: 'regular',
                    color: Colors.grey,
                  }}>
                  {' '}
                  Select date
                </Text>
              </View>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                testID={'dateTimePicker'}
                value={date}
                mode={'date'}
                is24Hour={true}
                display={'calendar'}
                onChange={onDateChanged}
              />
            )}
          </View>
          <View style={{ marginTop: checkButton }}>
            <TouchableOpacity onPress={() => navigation.navigate('Service Providers')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: FontSizes.t2,
    fontFamily: 'regular',
  },
  textInputContainer: {
    borderWidth: 1.2,
    borderColor: Colors.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 6,
    height: Layout.window.height * 0.07,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: Colors.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    height: Layout.window.height * 0.07,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: FontSizes.t2,
    color: Colors.white,
    fontFamily: 'bold',
  },
});