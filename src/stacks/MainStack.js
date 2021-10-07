import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import MainTab from './MainTab'; //// importo aqui o maintab

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
      <Stack.Screen name="MainTab" component={MainTab} />
      {/* //// e uso aqui para fazer a ligacao entre o mainstack e o maintab; */}
    </Stack.Navigator>
  );
};

export default MainStack;
