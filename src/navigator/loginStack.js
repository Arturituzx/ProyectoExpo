import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from '../Login';
import Register from '../Register';
import ForgPass from '../ForgPass';

const Stack = createStackNavigator();
export default function LoginStack() {

    return (


        <Stack.Navigator initialRouteName={"Login"}>
            {/* <Stack.Navigator initialRouteName={register ? "verification" : recovery ? "recovery" : "wallethome"}>    */}

            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} ></Stack.Screen>

            <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='ForgPass' component={ForgPass} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
    );
}