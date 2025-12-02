import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';

const sampleCategories = [
  { id: '1', title: 'Daily Summary' },
  { id: '2', title: 'Monthly Summary' },
  { id: '3', title: 'Detailed Commentary' },
  { id: '4', title: 'MCQs / Quiz' },
];

export default function CategoryScreen() {
  const { theme } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { topic } = route.params || {};
  const safeTopic = topic || 'Current Affairs';

  const handlePress = (item) => {
    if (item.title === 'Daily Summary') {
      navigation.navigate('Summary', { topic: safeTopic });
    } else if (item.title === 'Detailed Commentary') {
      navigation.navigate('Commentary', { topic: safeTopic });
    } else if (item.title === 'MCQs / Quiz') {
      navigation.navigate('Quiz', { topic: safeTopic });
    } else {
      navigation.navigate('Summary', { topic: safeTopic });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={() => handlePress(item)}
    >
      <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.primary }]}>Category</Text>
      <Text style={[styles.subHeader, { color: theme.text }]}>
        Topic: {safeTopic}
      </Text>

      <FlatList
        data={sampleCategories}
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
