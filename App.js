import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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
         <Tab.Screen 
           name="Camera" 
           component={CameraScreen} 
           options={{
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="camera" color={color} size={size} />
             ),
           }}
         />
         <Tab.Screen 
           name="Gallery" 
           component={GalleryScreen} 
           options={{
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="image" color={color} size={size} />
             ),
           }}
         />
         <Tab.Screen 
           name="Settings" 
           component={SettingsScreen} 
           options={{
             tabBarIcon: ({ color, size }) => (
               <MaterialCommunityIcons name="cog" color={color} size={size} />
             ),
           }}
         />
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
