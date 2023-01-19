import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Svg, { Path, Ellipse } from "react-native-svg";
const { width, height } = Dimensions.get('window');
import ButtonGradient from '../ButtonGradient';
import { Config } from './configuration/config';
import SpinnerModal from './utils/components/spinnerModal';
export default function Login() {

  const url_data = Config.URL_SERVER + "/login"
  const [loading, setLoading] = useState(false)
  const [correo, setCorreo] = useState(null)
  const [password, setPassword] = useState(null)

  const submit = async () => {
    const formData = {
      correo, password
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
    setLoading(true)
    try {

      const res = await Axios.post(url_data, formData);
      setLoading(false)
      if(res.data.error == null) {
        console.log(res.data);
      }
      
    } catch (error) {
      setLoading(false)
      Alert.alert(
        "Error",
        `${error.response.data.error}`,
        [
          {
            text: "Ok",
            onPress: () => { }
          }
        ]
      )
      console.log(error);
    }
  }

  function SvgTop() {
    return (
      <Svg
        width={428}
        height={320}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Ellipse
          cx={327}
          cy={238}
          rx={113}
          ry={82}
          fill="#BFE3B2"
          fillOpacity={0.38}
        />
        <Path
          d="M0 0h428v229.78s-126-19.766-159 11.53-85.5 50.238-155 43.238-114-9.471-114-9.471V0Z"
          fill="#C1BFFF"
        />
      </Svg>
    )
  }
  const navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
      <SpinnerModal loading={loading} text="Iniciando sesión" />
      <View style={styles.containerSvg}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subTitle}>Sign in to your account</Text>
        <TextInput onChangeText={(e) => setCorreo(e)}
          style={styles.Textinput}
          placeholder='john-example@gmail.com'
        />
        <TextInput
          style={styles.Textinput} onChangeText={(e) => setPassword(e)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgPass")}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </TouchableOpacity>
        <ButtonGradient onPress={() => submit()} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.forgotPassword}>Don't have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvg: {
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
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
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  }
});