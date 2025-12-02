import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../constants/theme';
import Card from '../components/ui/Card';
import { supabase } from '../../supabaseClient';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const { theme, isDark, toggleTheme } = useTheme();
  const navigation = useNavigation();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return Alert.alert('Error', error.message);
    navigation.replace('Login');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Card>
        <Text style={[styles.title, { color: theme.text }]}>Profile Settings</Text>

        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>Dark Mode</Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            thumbColor={isDark ? theme.primary : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </Card>

      <Card>
        <Text style={[styles.title, { color: theme.text }]}>User Information</Text>
        <Text style={[styles.label, { color: theme.text }]}>Name: Shahzad</Text>
        <Text style={[styles.label, { color: theme.text }]}>Email: shahzad@example.com</Text>
      </Card>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleLogout}>
        <Text style={[styles.buttonText]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.m,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: spacing.m,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.m,
  },
  label: {
    fontSize: 16,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.m,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
