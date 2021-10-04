import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Preload" /// este initialRouteName é para ele garantir que a página inicial sempre será a preload;
      screenOptions={{
        headerShown: false,
      }} /* /// headershown false para ele subir o cabeçalho, sumir de todas as telas; */
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default MainStack;
