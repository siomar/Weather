import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from '../pages/Home';
import Splash from '../pages/Splash';

const StackNavigationApp = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigationApp />
    </NavigationContainer>
  );
};

export default routes;
