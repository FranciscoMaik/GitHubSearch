import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import stylesGlobal from '../stylesGlobal';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerStyle: stylesGlobal.headerSuper,
          title: 'GitHub Search',
          headerTitleAlign: 'center',
          headerTitleStyle: stylesGlobal.titleHeader,
        }}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
