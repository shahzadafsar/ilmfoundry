import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';

const sampleTopics = [
  { id: '1', title: 'Pakistan Politics' },
  { id: '2', title: 'Economy' },
  { id: '3', title: 'International Affairs' },
];

export default function CurrentAffairsScreen() {
  const { theme } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { topic } = route.params || {};

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={() =>
        navigation.navigate('CurrentAffairs', {
          screen: 'Category',
          params: { topic: item.title },
        })
      }
    >
      <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.primary }]}>Current Affairs</Text>
      {topic && <Text style={[styles.subHeader, { color: theme.text }]}>Selected Topic: {topic}</Text>}
      <FlatList
        data={sampleTopics}
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
  subHeader: { fontSize: 16, marginBottom: 20 },
  card: { padding: 16, borderRadius: 8, marginVertical: 6 },
  cardText: { fontSize: 18 },
});
