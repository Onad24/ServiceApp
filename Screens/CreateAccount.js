import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstStep from './RegistrationSteps/FirstStep';
import SecondStep from './RegistrationSteps/SecondStep';

const StepStack = createStackNavigator();

export default function CreateAccount() {
  return (
    <StepStack.Navigator screenOptions={{ headerShown: false }}>
      <StepStack.Screen name="FirstStep" component={FirstStep} />
      <StepStack.Screen name="SecondStep" component={SecondStep} />
    </StepStack.Navigator>
  );
}
