import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CurrentAffairsScreen from './CurrentAffairsScreen';
import CategoryScreen from './CategoryScreen';
import SummaryScreen from './SummaryScreen';
import CommentaryScreen from './CommentaryScreen';
import QuizScreen from './QuizScreen';

const Stack = createNativeStackNavigator();

export default function CurrentAffairsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="CurrentAffairsHome" component={CurrentAffairsScreen} options={{ title: 'Current Affairs' }} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="Commentary" component={CommentaryScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
}
