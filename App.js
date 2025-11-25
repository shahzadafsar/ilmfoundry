// App.js
import 'react-native-gesture-handler'; // MUST be first
import 'react-native-reanimated';

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
