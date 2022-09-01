import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, View } from "react-native";

const UselessTextInput = () => {
  const [text, setText] = useState('');
  const [frutas, setFruta] = useState(["Maçã", "Banana"]);
  const [message, setMessage] = useState("")
  const addFruta = () => {
    if (text == ''){
      setMessage("DIGITE VALOR!")
      return
    } else {
       setFruta((f)=> [...f, text])
       setText('')
    }
  }
  return (
    <SafeAreaView style= {styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        
      />
      {(text == '') ? <Text style = {styles.message}>  {message} </Text> : ''}
      <TouchableOpacity
        style={styles.button}
        onPress={addFruta}

        >
        
        <Text style={styles.textobotao}>Adicionar</Text>
      </TouchableOpacity>
    <View >
    {
      frutas.map((f,i) =>  <Text style = {styles.result} key={i}>{f}</Text>)
    }
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#B0C4DE',
    borderRadius: 7
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderColor: 'white',
    borderRadius: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4682B4",
    padding: 10,
    borderRadius: 30
  },
  textobotao: {
    color: 'azure'
  },  
  message: {
    fontSize: 12,
    color: '#778899',
    fontWeight: 'bold',
    padding: 1,
    textAlign: 'center',
    marginBottom: 3
  },
  result: {
    padding: 5,
    fontSize: 14
  }
});

export default UselessTextInput;