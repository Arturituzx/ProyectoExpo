import React, { useEffect, useRef, useState } from 'react';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { DrawerContent } from '../navigator/DrawerContent'
import { Image, View, Text, Pressable, useWindowDimensions } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { AuthContext } from './DrawerContent/context';
import axios from 'axios';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();

export default function SideBarStack(props) {


    const dispatch = useDispatch();
    const navigation = useNavigation()
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const { Token, User } = useSelector((reducers) => reducers.loginReducer);
    const [idcita, setidcita ] = useState(null)
    const [ sexo, setsexo] = useState(null)
    const [name , setname ] = useState(null)
    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme
    }

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme
    }
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    const authContext = React.useMemo(() => ({
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        }
    }), []);



    const [vis_out_of_serv, setvis_out_of_serv] = useState(false);
    const toggleOut_of_serv = () => {
        // setModalLoadingOrder(bol_loaderst => !bol_loaderst);
    };

    return (
        <>
        
            <PaperProvider theme={theme}>
                <AuthContext.Provider value={authContext}>
                    <NavigationContainer theme={theme} independent={true}>
                        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}></DrawerContent>}
                            screenOptions={{
                                headerStyle: {
                                    // backgroundColor: "#f4f6f8",
                                    backgroundColor: 'red',
                                },
                                headerTitleStyle: {
                                    fontWeight: "bold",
                                    color: "#d6692a",
                                    fontSize: 24
                                },
                                headerTitleAlign: "left",
                                headerTintColor: "#ee710c"
                                //headerLeft: () => titleHome2()
                            }}
                            drawerPosition="left"
                            drawerType="front"


                        >
                            <Drawer.Screen name='SideHome' component={HomeStack}
                                options={{
                                    headerShown: false
                                }}
                            />
                            
                            {/* <Drawer.Screen name='SideLogout' options={{ title: 'Cerrar sesión', headerShown: false }} component={LogOut} /> */}

                        </Drawer.Navigator>

                    </NavigationContainer>
                </AuthContext.Provider>
            </PaperProvider>
        </>
    );
}