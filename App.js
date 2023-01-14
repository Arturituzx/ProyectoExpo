import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Svg, { Path, Ellipse } from "react-native-svg";
const { width, height } = Dimensions.get('window');
import ButtonGradient from './ButtonGradient';
import Login from './src/Login';
import Home from './src/Home';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={"#054169"} />
      <NavigationContainer >
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} ></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </>
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