import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

const MeuApp = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState ('');
  const [nomeCompleto, setNomeCompleto] = useState ('');
  const [idade, setIdade] = useState ('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe seu nome"
        onChangeText={setNome}
        value={nome}
      />
      
      <TextInput style={styles.input} placeholder="Informe o sobrenome"
      onChangeText={setSobrenome}
      value={sobrenome} />
      
      <TextInput
      style={styles.input}
      placeholder="Informe o ano de nascimento"
      onChangeText={setIdade}
      value={idade}
      
      />
      <Button title="Gravar" color="#191970" onPress={() => {

        if (idade >= 18 ){
          setNomeCompleto (`${nome} ${sobrenome}, maior de idade`)
         } else {
          setNomeCompleto (`${nome} ${sobrenome}, menor de idade`)
        }
        } 
      } 
        />
      {(nomeCompleto != '') ? <Text>Ola {nomeCompleto}</Text>: ''}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#5F9EA0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTitle: {
    color: '#191970',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
    padding: 5,
    textAlign: 'center',
    fontSize: 14,
    placeholderTextColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

export default MeuApp;
