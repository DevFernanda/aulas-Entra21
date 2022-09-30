import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from 'react'
import SelectDropdown from 'react-native-select-dropdown'

import firebase from './configuracoes/firebaseConfig'

const database = firebase.firestore()



export default function Cadastrar({ navigation, route }) {
  const [motivo, setMotivo] = useState('')
  const [medico, setMedico] = useState('')
  useEffect(() => {
    database.collection("medicos")
      .onSnapshot((query) => {
        const list = []
        query.forEach(doc => {
          list.push({ ...doc.data(), id: doc.id })
        })
        setMedico(list)
        
      })
  }, [])
   

  function cadastrar() {
    if (motivo === '' || medico === '') {
      Toast.show({
        type: 'info',
        text1: 'Atenção!',
        text2: 'Todos os campos devem ser preenchidos.'
      })
    } else {
      database.collection("consultas").add({
        motivo: motivo,
        medico: medico,
        date: route.params.dia.dateString
      })
      navigation.navigate('agenda')
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/cadastro-bg.png')} resizeMode="cover" style={styles.image}>
        <View>
          <Text style={styles.input}>{route.params.dia.dateString}</Text>

          <View style={styles.bodyContainer}>

            <TextInput
              style={styles.input}
              placeholder="Motivo"
              onChangeText={setMotivo}
              value={motivo}
            />
            
          <SelectDropdown
          data={medico}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}

          buttonTextAfterSelection={(selectedItem, index) => {
            console.log('log 1' + selectedItem);
            return selectedItem.Nome
          }}
          rowTextForSelection={(item, index) => {
            console.log('log 2' + item);

            return  item.Nome
          }} 
          />

         

            <TouchableOpacity
              style={styles.button}
              onPress={cadastrar}

            >
              <Text style={styles.textobotao}>SALVAR</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.logoContainer}>
            <Image source={require('../assets/medpill.png')} resizeMode='contain' style={styles.logoBot} ></Image>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 3,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '66.6%',
  },
  logoContainer: {
    flex: 1,
    width: '100%',
    height: '33.3%',
    flexDirection: 'column-reverse',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    width: '40%',
    backgroundColor: "#2b335a",
    padding: 10,
    borderRadius: 30,
    marginTop: 50
  },
  textobotao: {
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    padding: 5,
    fontSize: 20,
    color: 'white',
    textAlign: "center",
    marginBottom: 10
  },
  input: {
    padding: 5,
    width: '70%',
    borderBottomColor: "white",
    borderBottomWidth: 1.5,
    color: "white",
    marginTop: 5

  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBot: {
    with: '40%',
    height: '40%',
    marginBottom: 28
  }

});