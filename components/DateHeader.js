import React from 'react';
import { View, Text } from 'react-native';
import { purple } from '../utils/colors';

export default function DateHeader({ date }) {
  return (
    <View style={{ fontSize: 25, color: purple }}>
      <Text>{date}</Text>
    </View>
  );
}
