import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Teste from './src/teste';
import Login from './src/login';
import CadastroTest from './src/cadastroTest';
import Medicos from './src/medicos';



const Stack = createStackNavigator();


export default function App() {
  const [id, setId] = useState('')
  
  React.useEffect(() => {
    decodificaToken()
  }, [id])
  
  async function decodificaToken(){
    var token = await AsyncStorage.getItem('login')
    if(token != null){
      var token_decode = await jwt_decode(token)
      setId (token_decode.id)
  }
}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen 
        name="Teste" 
        component={Teste} 
        options={{
          title: 'Teste de Rotas',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF'

        }}
        />
   
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroTest} />
        <Stack.Screen name="Medicos" component={Medicos} />
       
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}