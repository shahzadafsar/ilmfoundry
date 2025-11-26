import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../../constants/theme';
import { useTheme } from '../../context/ThemeContext';

export default function ProgressBar({ progress = 0, height = 10, label = '' }) {
  const { theme } = useTheme(); // Consume theme directly
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.container}>
      {label ? <Text style={[styles.label, { color: theme.text }]}>{label}</Text> : null}
      <View style={[styles.barBackground, { height }]}>
        <View
          style={[
            styles.barFill,
            { width: `${clampedProgress}%`, height, backgroundColor: theme.primary },
          ]}
        />
      </View>
      {label ? <Text style={[styles.percentage, { color: theme.text }]}>{clampedProgress}%</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.s,
    width: '100%',
  },
  label: {
    marginBottom: spacing.xs,
    fontSize: 14,
  },
  barBackground: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  barFill: {
    borderRadius: 8,
  },
  percentage: {
    marginTop: spacing.xs,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});
