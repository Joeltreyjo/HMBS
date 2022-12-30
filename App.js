 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Screens/Home';
import Doc from './src/Screens/Doc';
import Login from './src/Screens/Login';

const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen
        name='Login'
        component={Login}
        />

        <Stack.Screen
        name='Home'
        component={Home}
        />

<Stack.Screen
        name='Schedule'
        component={Doc}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
