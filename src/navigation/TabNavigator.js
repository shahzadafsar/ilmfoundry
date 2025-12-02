// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

import DashboardScreen from '../screens/DashboardScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import ProfileScreen from '../screens/ProfileScreen';

import CurrentAffairsStack from '../screens/CurrentAffairs/CurrentAffairsStack';
import EnglishSkillsStack from '../screens/EnglishSkills/EnglishSkillsStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { theme } = useTheme() || { theme: { background: '#fff', primary: '#007bff' } };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: theme.background, paddingBottom: 5, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard': iconName = 'home-outline'; break;
            case 'CurrentAffairs': iconName = 'newspaper-outline'; break;
            case 'EnglishSkills': iconName = 'text-outline'; break;
            case 'Quizzes': iconName = 'clipboard-outline'; break;
            case 'Profile': iconName = 'person-outline'; break;
            default: iconName = 'ellipse-outline'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="CurrentAffairs" component={CurrentAffairsStack} />
      <Tab.Screen name="EnglishSkills" component={EnglishSkillsStack} />
      <Tab.Screen name="Quizzes" component={QuizzesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
