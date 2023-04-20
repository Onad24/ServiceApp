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
const Tabs = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('null');

  return (
    <NavigationContainer>
      {userToken ? (
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={Home} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} />
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
}
