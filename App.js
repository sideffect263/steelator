import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import NewProject from './src/screens/intreaction/NewProject';  
import ProjectList from './src/screens/intreaction/ProjectList';
import LoginScreen from './src/screens/connection/loginScreen';
import HomeScreen from './src/screens/intreaction/HomeScreen';
import Calcu1 from './src/screens/intreaction/calculations/Calcu1';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import icon from './assets/icon.png';

const Stack = createStackNavigator();



export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="NewProject"
       screenOptions={{
         headerMode: 'screen',
         headerTintColor: 'white',
         headerStyle: { backgroundColor: 'tomato' },
       }}
      >
        <Stack.Screen name="Login" component={LoginScreen}
        options={{
          title: 'login',
          headerShown: false,
        }}
        />
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title: 'home',
          headerShown: true,
        }}
        />
        <Stack.Screen name="NewProject" component={NewProject}
        options={{
          
          headerTitleAlign:'right',
          title: 'NewProject',
          headerShown: true,
          headerTitle: 'פרויקט חדש',
          headerStyle: {
            width: '100%',
            height: '100%',
            backgroundColor: 'tomato',
            resizeMode: 'contain',
            
          },
        
        }}
        />
        <Stack.Screen name="ProjectList" component={ProjectList}
        options={{
          title: 'ProjectList',
          headerShown: true,
        }}
        />
        <Stack.Screen name="Calcu1" component={Calcu1}   initialParams={{ lineNumPressed: 0 }}

        options={{
          title: 'Calcu1',
          headerShown: true,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  headBarImage:{
    marginLeft:'5%',
      resizeMode:'contain',
      height:'100%',
      width:'300px',
      borderWidth:1,
      borderWidth:0,
  },
});


