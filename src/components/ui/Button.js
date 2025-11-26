import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { spacing } from '../../constants/theme';
import { useTheme } from '../../context/ThemeContext';

export default function Button({ title, onPress, style, textStyle, disabled = false }) {
  const { theme } = useTheme(); // Consume theme directly

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: disabled ? '#ccc' : theme.primary },
        style,
      ]}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.l,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.s,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
