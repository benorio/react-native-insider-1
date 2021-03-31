import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'abcdefgijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

export default function App() {
  const [pwd, setPwd] = useState('');

  const [size, setSize] = useState(5);
  
  function generatePass(){

    let pass = '';
    for (let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPwd(pass)
  }

  function copyPass(){
    Clipboard.setString(pwd);
    alert('Senha copiada com sucesso !');
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/logo.png')}
      style={styles.logo}
      />
      <Text style={styles.titulo}>  {size} Caracteres</Text>
      <View style={styles.area}>
        <Slider style={{height:50}} minimumValue={5} maximumValue={15}
          minimumTrackTintColor="red" maximumTrackTintColor="black" 
          value={size} onValueChange={(valor) => setSize(valor.toFixed(0))}/>
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      
      {pwd !== '' && (
        <View styles={styles.area}>
          <Text styles={styles.pwd} onLongPress={copyPass}>{pwd}</Text> 
        </View>
        
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60    
  },
  titulo:{
    fontSize:30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 7
  },
  button:{
      backgroundColor:'#FFA200',
      width: '80%',
      height:50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
      marginBottom: 25
  },
  buttonText: {
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold'
  },
  pwd: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
});
