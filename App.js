// App.js
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import React, { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { supabase } from './supabase';

export default function App() {
  // --- Supabase connection test (non-intrusive) ---
  useEffect(() => {
    async function testSupabase() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.log('Supabase Connection Error:', error.message);
        } else {
          console.log('Supabase Connected Successfully. Session:', data);
        }
      } catch (err) {
        console.log('Unexpected Supabase Error:', err.message);
      }
    }
    testSupabase();
  }, []);
  // -------------------------------------------------

  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
