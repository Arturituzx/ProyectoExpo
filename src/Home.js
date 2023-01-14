import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Svg, { Path, Ellipse} from "react-native-svg";
const {width, height} = Dimensions.get('window');
import ButtonGradient from '../ButtonGradient';

export default function Home() {
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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSvg}>
      <SvgTop/>
      </View>
      <View style={styles.container}>
      <Text style={styles.title}>Hola putitos</Text>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSvg:{
    width: width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title:{
    fontSize: 80,
    color: "#34434D",
    fontWeight: 'bold',
  },
  subTitle:{
    fontSize: 20,
    color: 'gray',
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
    forgotPassword:{
      fontSize: 14,
      color: 'gray',
      marginTop: 20
    }
});