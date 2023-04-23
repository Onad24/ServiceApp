import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './Screens/SignIn';
import CreateAccount from './Screens/CreateAccount';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Details from './Screens/HomeScreens/Details';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name = "Home" component={Home} options={{ headerShown: false }}/>
      <HomeStack.Screen name = "Details" component={Details} options={{ title: 'Item Details' }}/>
    </HomeStack.Navigator>
  );
} 


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('null');

  return (
    <NavigationContainer>
      {userToken ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Root" component={HomeScreenStack} options={{ headerShown: false, title: 'Home' }}/>
          <Tabs.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Tabs.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }}/>
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
