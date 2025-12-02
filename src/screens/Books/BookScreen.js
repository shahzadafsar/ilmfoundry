import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

const sampleBooks = [
  { id: '1', title: 'Pakistan Studies' },
  { id: '2', title: 'English Language' },
  { id: '3', title: 'Current Affairs' },
];

export default function BookScreen() {
  const { theme } = useTheme();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.primary }]}>Books</Text>
      <FlatList
        data={sampleBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 16, borderRadius: 8, marginVertical: 6 },
  cardText: { fontSize: 18 },
});
