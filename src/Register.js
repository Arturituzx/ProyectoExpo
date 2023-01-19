import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableHighlight, Button, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Select } from 'native-base';
import Axios from 'axios';
import * as Icons from "react-native-heroicons/solid";
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path, Ellipse } from "react-native-svg";
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { validateMail } from './utils/validation';
import { Config } from './configuration/config';
import { TouchableOpacity } from 'react-native';

export default function Register() {

    const url_data = Config.URL_SERVER + "/register"
    const [nombres, setNombres] = useState(null)
    const [correo, setCorreo] = useState(null)
    const [apellidoPaterno, setApellidoPaterno] = useState(null)
    const [apellidoMaterno, setApellidoMaterno] = useState(null)
    const [fechaNacimiento, setFechaNacimiento] = useState(null)
    const [date, setDate] = useState()
    const [showPassword, setShowPassWord] = useState(false);
    const [password, setPassword] = useState(null)
    const [sexo, setSexo] = useState(null)
    const [celular, setCelular] = useState(null)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setDate(date)
        setFechaNacimiento(moment(date).format("YYYY-MM-DD"))

    };

    const submitHandler = async () => {
        const formData = {
            correo, nombres, apellidoPaterno, apellidoMaterno,
            fechaNacimiento, password, celular, sexo, rol: "63c623f56eef5040669d9bd3"
        }
        for (const prop in formData) {
            if (formData[prop] == null || formData[prop] == "") {
                return Alert.alert(
                    "Alerta",
                    "Llene todo los campos",
                    [{ text: "Aceptar", style: "default" }]
                )
            }
        }
        if (!validateMail(correo)) {
            return Alert.alert(
                "Alerta",
                "Ingrese un email válido.",
                [{ text: "Aceptar", style: "default" }]
            )
        }
        try {
            const res = await Axios.post(url_data, formData);
            console.log("Resultado de registro: ", res.data);
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    return (
        <>
            <KeyboardAvoidingView keyboardVerticalOffset='-100'
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container1}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Formulario de Registro</Text>
                        <TextInput style={styles.Textinput} onChangeText={(e) => setNombres(e)}
                            placeholder='Nombres'
                        />
                        <TextInput style={styles.Textinput} onChangeText={(e) => setApellidoPaterno(e)}
                            placeholder='Apellido Paterno' />
                        <TextInput style={styles.Textinput} onChangeText={(e) => setApellidoMaterno(e)}
                            placeholder='Apellido Materno' />
                        <TouchableOpacity style={styles.searchSection} onPress={showDatePicker}>
                            <TextInput
                                style={styles.input}
                                editable={false}
                                placeholder="Fecha de Nacimiento"
                                value={date ? moment(date).format("DD/MM/YYYY") : ""}
                                underlineColorAndroid="transparent"
                            />
                            <Icons.CalendarDaysIcon
                                color='#0096D6'
                                style={{ marginRight: 6 }}
                            />
                        </TouchableOpacity>
                        {/* <TextInput style={styles.Textinput} editable={false} color="black" keyboardType='numeric' textAlign="center" border="1" borderColor='cofco.50' placeholder={text} /> */}
                        <TextInput style={styles.Textinput} onChangeText={(e) => setCorreo(e)}
                            placeholder='Correo' />
                        <View style={styles.searchSection}>
                            <TextInput style={{ height: 50 }} onChangeText={(e) => setPassword(e)}
                                secureTextEntry={showPassword ? false : true}
                                placeholder='Contraseña' />
                            {
                                showPassword ? <Icon name='md-eye-off-outline' color="#0096D6" size={25} style={{ marginRight: 10 }}
                                    onPress={() => setShowPassWord(false)} /> :
                                    <Icon name='ios-eye-outline' color="#0096D6" size={25} style={{ marginRight: 10 }}
                                        onPress={() => setShowPassWord(true)} />
                            }
                        </View>
                        <TextInput style={styles.Textinput} onChangeText={(e) => setCelular(e)}
                            placeholder='Celular' />
                        <Select onValueChange={v => setSexo(v)} style={{ paddingStart: 20 }} fontSize={15} width={'80%'} height={50} marginTop={5} backgroundColor={'#fff'} placeholder={'Sexo'} placeholderTextColor={'#868686'}
                            borderRadius={30} borderColor={'#fff'}
                        >
                            <Select.Item label={'Masculino'} value={'M'} key={'M'} />
                            <Select.Item label={'Femenino'} value={'F'} key={'F'} />
                        </Select>
                        <TouchableHighlight style={styles.button} onPress={() => submitHandler()}>
                            <Text style={styles.textButton}>Send</Text>
                        </TouchableHighlight>
                        <DateTimePickerModal textColor='black' date={date}
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    );
}


const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: "#f1f1f1",
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    Textinput: {
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 15
    },
    button: {
        width: '20%',
        backgroundColor: 'skyblue',
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 25
    },
    textButton: {
        textAlign: 'center',
        color: 'white'
    },
    containerSvg: {
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 10,
        paddingStart: 20,
    },
    searchIcon: {
    },
    input: {
        color: "#000"
    },


});