import React from 'react';

import {StyleSheet, TextInput} from 'react-native';

const PasscodeTextInput = (props) => {
  const {
    refCallBack,
    autoFocus,
    onSubmitEditing,
    onChangeText,
    onKeyPress,
    value,
  } = props;

  return (
    <TextInput
      placeholder=""
      style={styles.placeholder}
      ref={refCallBack}
      autoFocus={autoFocus}
      onSubmitEditing={onSubmitEditing}
      maxLength={1}
      keyboardType="numeric"
      onKeyPress={onKeyPress}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  placeholder: {
    height: 49,
    width: 41,
    fontSize: 40,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3,
    textAlign: 'center',
    marginHorizontal: 4,
  },
});

export default PasscodeTextInput;
