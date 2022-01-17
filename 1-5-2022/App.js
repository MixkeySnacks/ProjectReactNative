import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from 'C:\rnproject1\screens\HomeScreen.js';
import AboutScreen from './screen/AboutScreen';
import FirstPage from './screen/FirstPage';
import SecondPage from './screen/SecondPage';

// HomeScreen/AboutScreen
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#135790',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreens}
          options={{title: 'หน้าหลัก'}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'เกี่ยวกับ'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
