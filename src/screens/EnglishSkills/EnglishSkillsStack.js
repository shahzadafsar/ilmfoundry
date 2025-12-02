// src/screens/EnglishSkills/EnglishSkillsStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EnglishSkillsScreen from './EnglishSkillsScreen';
import GrammarLessonsScreen from './GrammarLessonsScreen';
import GrammarExerciseScreen from './GrammarExerciseScreen';
import VocabularyScreen from './VocabularyScreen';
import IdiomsScreen from './IdiomsScreen';
import QuizScreen from './QuizScreen';

const Stack = createNativeStackNavigator();

export default function EnglishSkillsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="EnglishSkillsHome" component={EnglishSkillsScreen} options={{ title: 'English Skills' }} />
      <Stack.Screen name="GrammarLessons" component={GrammarLessonsScreen} />
      <Stack.Screen name="GrammarExercises" component={GrammarExerciseScreen} />
      <Stack.Screen name="Vocabulary" component={VocabularyScreen} />
      <Stack.Screen name="Idioms" component={IdiomsScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
}
