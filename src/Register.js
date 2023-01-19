import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableHighlight, Button } from 'react-native';
import * as Icons from "react-native-heroicons/solid";
import Svg, { Path, Ellipse } from "react-native-svg";
import React, { useState } from 'react';
const { width, height } = Dimensions.get('window');
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Register() {
    
        const [selectedDate, setSelectedDate] = useState();
        const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

        const showDatePicker = () => {
            setDatePickerVisibility(true);
        };

        const hideDatePicker = () => {
            setDatePickerVisibility(false);
        };

        const handleConfirm = (date) => {
            setSelectedDate(date);
            hideDatePicker();
        };

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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSvg}>
        <SvgTop />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Registro</Text>
        <TextInput style={styles.Textinput}
          placeholder='Nombres'
        />
        <TextInput style={styles.Textinput}
          placeholder='Apellido Paterno' />
        <View style={styles.searchSection}>

          <TextInput 
            style={styles.input}
            editable={false}
            placeholder="Fecha de Nacimiento"
            value={Text}
            onChangeText={(searchString) => { this.setState({ searchString }) }}
            underlineColorAndroid="transparent"
          />
          <Icons.CalendarDaysIcon onPress={() => showMode('date')}
            color='#0096D6'
            style={{ marginRight: 6 }}
          />
        </View>
        {/* <TextInput style={styles.Textinput} editable={false} color="black" keyboardType='numeric' textAlign="center" border="1" borderColor='cofco.50' placeholder={text} /> */}
        <TextInput style={styles.Textinput}
          placeholder='Correo' />
        <TextInput style={styles.Textinput}
          secureTextEntry={true}
          placeholder='Contraseña' />
        <TextInput style={styles.Textinput}
          placeholder='Celular' />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.textButton}>Send</Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{`Date:  ${selectedDate? moment(selectedDate).format("MM/DD/YYYY"):"Please select date"}`}</Text>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal themeVariant='light'
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            />
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