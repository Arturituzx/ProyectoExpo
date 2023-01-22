import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Home from '../../components/Home';
import TabsNavigation from './Home/tabsNavigation';

const Stack = createStackNavigator();
export default function HomeStack() {

    return (


        <Stack.Navigator >
            <Stack.Screen name='HomeTabs' component={TabsNavigation} options={{ headerShown: false }} />
            {/* <Stack.Navigator initialRouteName={register ? "verification" : recovery ? "recovery" : "wallethome"}>    */}

            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
    );
}