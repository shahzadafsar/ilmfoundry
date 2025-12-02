import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../../supabaseClient';

export default function SplashScreen() {
  const navigation = useNavigation();
  const { theme } = useTheme();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) console.log('Supabase session error:', error.message);

        // Short delay to show splash
        setTimeout(() => {
          if (session?.user) {
            navigation.replace('MainTabs');
          } else {
            navigation.replace('Login');
          }
        }, 1000); // 1 second delay for splash effect
      } catch (err) {
        console.error('Auth check failed:', err);
        navigation.replace('Login');
      }
    };

    checkAuth();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary }]}>iILM App</Text>
      <ActivityIndicator size="large" color={theme.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
});
