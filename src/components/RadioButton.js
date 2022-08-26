import CustomButton from './CustomButton';
import React from 'react';
import { Dimensions } from 'react-native';

export const RadioButton = ({ list, attr, onPress }) => {
  return list.map((v, i) => (
    <CustomButton
      key={i}
      style={{ margin: 5, minWidth: (Dimensions.get('screen').width - 130) / 2 }}
      innerStyle={v === attr && { backgroundColor: '#144d7f' }}
      onPress={() => onPress(v)}
      content={v}
    />
  ));
};
