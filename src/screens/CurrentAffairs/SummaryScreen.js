import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function SummaryScreen({ route }) {
  const { theme } = useTheme();
  const { topic } = route.params || {};

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.primary }]}>Summary</Text>

      {topic && (
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Topic: {topic}
        </Text>
      )}

      <Text style={[styles.text, { color: theme.text }]}>
        Summary content will be displayed here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  text: { fontSize: 16, lineHeight: 22 },
});
