import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';

const sampleSkills = [
  { id: '1', title: 'Vocabulary' },
  { id: '2', title: 'Grammar' },
  { id: '3', title: 'Reading Comprehension' },
];

export default function EnglishSkillsScreen() {
  const { theme } = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { skill } = route.params || {};

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={() => navigation.navigate('EnglishSkills', { skill: item.title })}
    >
      <Text style={[styles.cardText, { color: theme.text }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.primary }]}>English Skills</Text>
      {skill && <Text style={[styles.subHeader, { color: theme.text }]}>Selected Skill: {skill}</Text>}
      <FlatList
        data={sampleSkills}
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
