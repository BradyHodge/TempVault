import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';


function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
 
  useEffect(() => {
     (async () => {
       const { status } = await Camera.requestPermissionsAsync();
       setHasCameraPermission(status === 'granted');
     })();
  }, []);
 
  const takePicture = async () => {
     if (camera) {
       const data = await camera.takePictureAsync(null);
       setImage(data.uri);
     }
  };
 
  if (hasCameraPermission === null) {
     return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
     return <Text>No access to camera</Text>;
  }
  return (
     <View style={{ flex: 1 }}>
       <Camera 
         ref={ref => setCamera(ref)}
         style={{ flex: 1 }}
         type={type}
       >
         <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
           <Button title="Flip Image" onPress={() => {
             setType(
               type === Camera.Constants.Type.back
                 ? Camera.Constants.Type.front
                 : Camera.Constants.Type.back
             );
           }} />
           <Button title="Take Picture" onPress={takePicture} />
         </View>
       </Camera>
       {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
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
