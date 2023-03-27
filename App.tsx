import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Alert} from 'react-native';

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App(){
  const [nome, setnome] = useState('');
  const [idade, setidade] = useState('');
  const [limite, setlimite] = useState(1000);
  const [genero, setgenero] = useState(0);
  const [gender, setGender] = useState([
  { key: 1, nome: 'Masculino' },
  { key: 2, nome: 'Feminino' },
  { key: 3, nome: 'Prefiro não dizer' }
  ]);
  
  
  function setargenero(valor : number){
    setgenero(valor);
  }
  
  function Nome(item : string) {
    setnome(item);
  }

  function Idade(item : string) {
    setidade(item);
  }

  function limitador(number : number){
    setlimite(number);
  }

  function Mostrar(){
    alert("\nNOME: " + nome
          + "\nIDADE: " + idade
          + "\nGENERO: " + gender[genero].nome
          + "\nLIMITE: " + limite.toFixed(0.1)
    );
  }

  return(
    <View style={styles.container}>
      <View>
        <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}> Perfil </Text>
      </View>
      <View>
      <TextInput placeholder="Digite seu nome" style = {styles.input}
      onChangeText={Nome}/>
      <TextInput placeholder="Digite sua idade" style = {styles.input}
      onChangeText={Idade}/>
      <Picker
        style={styles.picker}
        selectedValue={genero}
        onValueChange={(itemValue, itemIndex) => setgenero(itemValue)}>
        <Picker.Item key={0} value={0} label="Masculino"/>
        <Picker.Item key={1} value={1} label="Feminino"/>
        <Picker.Item key={2} value={2} label="Prefiro não dizer"/>
      </Picker>
      </View>
      <View>
        <Text style ={{fontSize: 15, margin: 5}}>Coloque seu limite: {limite.toFixed(0.1)} </Text>
        <Slider
          maximumValue={2000}
          minimumValue={0}
          value={limite}
          onValueChange={limitador}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={Mostrar}>
        <Text style={styles.btntext}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 10
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 20
  },
  picker: {
    width: '40%',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    margin: 10,
    backgroundColor: '#00ffd5',
    padding: 10,
    borderRadius: 5,
  },
  btntext:{
    color: 'white',
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'center',
  }
});