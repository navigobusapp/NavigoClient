// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Login from './screens/Login';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <Login/>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { LogBox ,Alert} from "react-native";
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Login from './screens/Login';
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import UserProfile from "./screens/UserProfile"
import BookedTicket from "./screens/BookedTicket";
import BusRoute from "./screens/BusRoute";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ChatStack() {
  return (
    <Stack.Navigator >
      
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    // <Stack.Navigator  defaultScreenOptions={Home}>
    //   <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
    //   <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}/>
    //   <Stack.Screen name='Home' component={Home}  />
    //   <Stack.Screen name='Book' component={Book}  />
    // </Stack.Navigator>
    //options={{tabBarStyle: { display: "none" }}}
    <Tab.Navigator  screenOptions={
      {
        headerShown:false,
        tabBarActiveTintColor:'#E96479',
        tabBarInactiveTintColor:'grey',
        tabBarActiveBackgroundColor:"#f2f2f2",
        tabBarStyle:  { height: 60}
      } 
    }>
      <Tab.Screen name="Login" component={Login} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" },}} />
      <Tab.Screen name="Signup" component={Signup} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" }}} />
      <Tab.Screen name="Home" component={Home}  options={{ tabBarIcon:({size,color})=>(
            <FontAwesome name="home" size={25} color={'#E96479'} />
          ),}} />
      <Tab.Screen name="UserProfile" component={UserProfile} options={{ tabBarIcon:({size,color})=>(
            <FontAwesome name="user" size={25} color={'#E96479'} />
          ),}} />

<Tab.Screen name="BookedTicket" component={BookedTicket} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" }}} />
<Tab.Screen name="BusRoute" component={BusRoute} options={{ tabBarVisible: false,tabBarButton: (props) => null,tabBarStyle: { display: "none" }}} />
    </Tab.Navigator>
  );
}


function RootNavigator() {

 return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    
      <RootNavigator />
    
    
  );
}


