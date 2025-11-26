import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../constants/theme';
import { useTheme } from '../../context/ThemeContext';

export default function Card({ children, style }) {
  const { theme } = useTheme();  // Consume theme directly

  return (
    <View style={[styles.card, { backgroundColor: theme.card }, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.m,
    marginVertical: spacing.s,
    marginHorizontal: spacing.m,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
