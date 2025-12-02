import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderMenuButton({ style }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()} style={[{ marginLeft: 14 }, style]}>
      <Ionicons name="menu-outline" size={24} />
    </TouchableOpacity>
  );
}
