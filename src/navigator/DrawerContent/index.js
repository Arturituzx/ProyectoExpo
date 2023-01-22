import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer,
    Paragraph,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
// import { Drawer, DrawerContentScrollView } from 'react-native-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Oticons from 'react-native-vector-icons/Octicons'
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwe5 from "react-native-vector-icons/FontAwesome5"
import Perfil from './perfil';
import Axios from 'axios';
import { useSelector } from 'react-redux';
// de prueba
//import NotifService from '../../../src/NotifService'
import { AuthContext } from './context';

export function DrawerContent(props) {
    //const { initAdrress: { country } } = useSelector(reducers => reducers.deliveryReducer);
    const navigation = useNavigation();
    const paperTheme = useTheme();
    const { toggleTheme } = React.useContext(AuthContext);
    const [rol, setRol] = useState(5)
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [sexo, setSexo] = useState(null)
    const { Token, User } = useSelector((reducers) => reducers.loginReducer);



    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <Perfil correo={User.correo} nombre={User.nombre} sexo={User.iD_SEXO} />
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialC
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('HomeTabs') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <IconMaterialC
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferencias">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Tema Oscuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <IconMaterialC
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Cerrar Sesión"
                    onPress={() => { props.navigation.navigate('SideLogout') }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});