// src/screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import TestButton from '../components/TestButton';
import { colors, spacing } from '../constants/theme';


export default function HomeScreen() {
  return (
     <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background, // <- theme applied
        padding: spacing.m,                  // <- spacing applied
      }}
    >
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <TestButton />
    </View>
  );
}
