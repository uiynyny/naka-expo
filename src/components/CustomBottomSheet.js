import { View } from 'react-native';
import { bottomSheetStyles } from './styles';
import React from 'react';

export const renderHeader = () => (
  <View style={bottomSheetStyles.header}>
    <View style={bottomSheetStyles.panelHeader}>
      <View style={bottomSheetStyles.panelHandle} />
    </View>
  </View>
);
