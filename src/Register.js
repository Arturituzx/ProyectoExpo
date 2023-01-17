import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions,TouchableHighlight } from 'react-native';
import Svg, { Path, Ellipse} from "react-native-svg";
const {width, height} = Dimensions.get('window');

export default function Register() {
    function SvgTop(){
      return(
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
    return(
        <View style={styles.mainContainer}>
        <View style={styles.containerSvg}>
        <SvgTop/>
        </View>
            <View style={styles.container}>
                <Text style={styles.title}>Formulario de Registro</Text>
                    <TextInput style={styles.Textinput}
                    placeholder='Nombres'
                    />
                    <TextInput style={styles.Textinput}
                    placeholder='Apellido Paterno'/>
                    <TextInput style={styles.Textinput}
                    placeholder='Correo'/>
                    <TextInput style={styles.Textinput}
                    secureTextEntry={true}
                    placeholder='Contraseña'/>
                    <TextInput style={styles.Textinput}
                    placeholder='Celular'/>
                    <TouchableHighlight style={styles.button}>
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableHighlight>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    mainContainer:{
      backgroundColor: "#f1f1f1",
      flex: 1,
    },
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    Textinput:{
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff'
        },
    title:{
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 15
    },
    button:{
        width: '20%',
        backgroundColor: 'skyblue',
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 25
    },
    textButton:{
        textAlign:'center',
        color: 'white'
    },
    containerSvg:{
        width: width,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },


});