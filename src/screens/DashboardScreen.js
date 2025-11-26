import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import ProgressBar from '../components/ui/ProgressBar';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../constants/theme';

export default function DashboardScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Card>
        <Text style={[styles.title, { color: theme.text }]}>Study Plan Progress</Text>
        <ProgressBar progress={40} label="Study Plan" />
        <Button title="Continue Plan" />
      </Card>

      <Card>
        <Text style={[styles.title, { color: theme.text }]}>Quizzes Completed</Text>
        <ProgressBar progress={75} height={12} label="Quizzes" />
        <Button title="Attempt New Quiz" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.m,
  },
  title: {
    fontSize: 16,
    marginBottom: spacing.s,
    fontWeight: '600',
  },
});
