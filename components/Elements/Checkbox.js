import React, { useState, Fragment } from 'react';
import { View, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import proptypes from 'prop-types';
import { RectButton } from 'react-native-gesture-handler';

export default function CheckBox({ label }) {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <RectButton
        style={{ justifyContent: 'center' }}
        onPress={() => setChecked((c) => !c)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              marginRight: 6,
              borderRadius: 5,
              backgroundColor: checked ? '#2CB9B0' : '#fff',
              height: 20,
              width: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#2CB9B0',
            }}>
            <Icon name={'check'} color={'white'} />
          </View>
          <Text>{label}</Text>
        </View>
      </RectButton>
    </Fragment>
  );
}

CheckBox.prototypes = {
  label: proptypes.string,
};