// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet /*, Image*/ } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image source={require('../../assets/images/logo.png')} style={styles.logo} /> */}
      <Text style={styles.title}>IlmFoundry</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' },
  // logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: '700' },
});
