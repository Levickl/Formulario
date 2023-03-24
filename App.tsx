import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput} from 'react-native';

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App(){
  const [nome, setnome] = useState('');
  let genero;
  return(
    <View style={styles.container}>
      <View>
        <Text style = {{ textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}> Perfil </Text>
      </View>
      <View>
      <TextInput placeholder="Digite seu nome" style = {styles.input}/>
      <TextInput placeholder="Digite sua idade" style = {styles.input}/>
      <Picker selectedValue={genero}>
        <Picker.Item key={0} value={0} label="Masculino"/>
        <Picker.Item key={1} value={1} label="Feminino"/>
        <Picker.Item key={1} value={1} label="Prefiro não dizer"/>
      </Picker>
      </View>
      <Slider
        maximumValue={100}
        minimumValue={0}
        value={50}/>
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
  }
});