import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../constants/theme';

export default function SyllabusScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Card>
        <Text style={[styles.title, { color: theme.text }]}>Syllabus</Text>
        <Text style={[styles.text, { color: theme.text }]}>
          Placeholder content for the syllabus.
        </Text>
        <Button title="Start Studying" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.m },
  title: { fontSize: 18, fontWeight: '600', marginBottom: spacing.s },
  text: { fontSize: 14, marginBottom: spacing.s },
});
