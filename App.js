import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function CameraScreen() {
  return (
    <View style={styles.centered}>
      <Text>Camera Screen</Text>
    </View>
  );
}

function GalleryScreen() {
  return (
    <View style={styles.centered}>
      <Text>Gallery Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.centered}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
