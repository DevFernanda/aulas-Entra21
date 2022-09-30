import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Schedule from './src/agenda'
import Teste from './src/teste'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import Calendario from './src/calendar'
import Cadastrar from './src/teste';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='agenda' 
          component={Schedule}
        />
        
        <Stack.Screen
          name='teste' 
          component={Cadastrar}
        />

      </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
