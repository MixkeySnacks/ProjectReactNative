import React from 'react'
import {View,Text, Button, Image, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStructure = (props)=>{
  const toggleDrawer = ()=> {
    props.navigationProps.toggleDrawer();
  }
  return(
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Image
        source={require('./assets/drawerWhite.png')}
        style={{width:25,height:25,marginLeft:5}}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({navigation}){
  return(
    <Stack.Navigator
    initialRouteName='FirstPage'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009465',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: ()=><DrawerStructure navigationProps={navigation}/>
    }}
  >
    <Stack.Screen
      name="FirstPage"
      component={FirstPage}
      options={{ title: 'First Page' }}
    />
    </Stack.Navigator>
  );
}
function secondScreenStack({navigation}){
  return(
    <Stack.Navigator
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009465',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: ()=><DrawerStructure navigationProps={navigation}/>
        }}
      >
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{ title: 'Second Page' }}
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{ title: 'Third Page' }}
        />
      </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="FirstPage" component={firstScreenStack}/>
        <Drawer.Screen name="SecondPage" component={secondScreenStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App