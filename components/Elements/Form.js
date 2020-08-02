import React, { useState, Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import proptypes from 'prop-types';

const TextInputComponent = ({
  placeholder,
  icon,
  value,
  onChange,
  validator,
}) => {
  const [state, setState] = useState(null);
  const [input, setInput] = useState('');

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

  const onChangeText = (text) => {
    setInput(text);
    if (state !== null) {
      validate();
    }
  };
  const reColor = state === true ? '#2CB9B0' : '#8A8D90';

  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          height: 48,
          borderRadius: 5,
          borderColor: reColor,
          borderWidth: 1,
          alignItems: 'center',
        }}>
        <View style={{ padding: 15 }}>
          <Icon name={icon} size={16} color={reColor} />
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            value={value}
            onChange={onChange}
            {...{ placeholder }}
            onBlur={validate}
            {...{ onChangeText }}
            placeholderTextColor={'#8A8D90'}
            underlineColorAndroid="transparent"
            style={{ maxWidth: '95%' }}
          />
        </View>

        {(state === true || state === false) && (
          <>
            <View
              style={{
                width: 21,
                height: 21,
                backgroundColor: state === true ? '#2CB9B0' : '#8A8D90',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Icon
                name={state === true ? 'check' : 'x'}
                size={16}
                color={'white'}
              />
            </View>
          </>
        )}
      </View>
    </Fragment>
  );
};

TextInputComponent.prototypes = {
  placeholder: proptypes.string,
  icon: proptypes.string,
  validator: () => proptypes.bool,
};

export default TextInputComponent;