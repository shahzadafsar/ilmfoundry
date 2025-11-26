import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../constants/theme';

export default function ReadingPathScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Card>
        <Text style={[styles.title, { color: theme.text }]}>Reading Path</Text>
        <ProgressBar progress={30} label="Week 1" />
        <ProgressBar progress={60} label="Week 2" />
        <Button title="Continue Path" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.m },
  title: { fontSize: 18, fontWeight: '600', marginBottom: spacing.s },
});
