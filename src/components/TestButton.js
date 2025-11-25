// src/components/TestButton.js
import React from 'react';
import { Button } from 'react-native-paper';

export default function TestButton() {
  return <Button onPress={() => console.log("Pressed")}>Test</Button>;
}
