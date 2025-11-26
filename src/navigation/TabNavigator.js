import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

import DashboardScreen from '../screens/DashboardScreen';
import SyllabusScreen from '../screens/SyllabusScreen';
import ReadingPathScreen from '../screens/ReadingPathScreen';
import PDFScreen from '../screens/PDFScreen';
import NotesScreen from '../screens/NotesScreen';
import AIScreen from '../screens/AIScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import VideoScreen from '../screens/VideoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: theme.background },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Dashboard': iconName = 'home'; break;
            case 'Syllabus': iconName = 'book'; break;
            case 'ReadingPath': iconName = 'list'; break;
            case 'PDF': iconName = 'document'; break;
            case 'Notes': iconName = 'create'; break;
            case 'AI': iconName = 'bulb'; break;
            case 'Quizzes': iconName = 'clipboard'; break;
            case 'Video': iconName = 'videocam'; break;
            case 'Profile': iconName = 'person'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Syllabus" component={SyllabusScreen} />
      <Tab.Screen name="ReadingPath" component={ReadingPathScreen} />
      <Tab.Screen name="PDF" component={PDFScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Quizzes" component={QuizzesScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
