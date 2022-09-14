import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native'


export default function Medicos({ navigation }) {
    const [nome, setNome] = useState('')
    const [especialidade, setEspec] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [msg, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            cadastrar()
        }
    }
    function limpar() {
        setNome('')
        setEspec('')
        setTelefone('')
        setEndereco('')
    }

    function validarDados() {
        if (nome == '') {
            setMessage("Digite o nome")
            return false
        } if (especialidade == '') {
            setMessage("Digite o sobrenome")
            return false
        } if (telefone == '') {
            setMessage("Digite Telefone!")
            return false
        } if (endereco == '') {
            setMessage("Digite endereco!")
            return false
        }
        return true
    }

    function cadastrar() {
        fetch('http://localhost:8080/medicos',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    especialidade: especialidade,
                    telefone: telefone,
                    endereco: endereco
                })
            }
        )
            .then(() => { setMessage("Médico cadastrado com sucesso") })
            .then(() => limpar())
            .catch((err) => { setMessage("Médico não foi inserido", err) })
    }

    return (
        <View style={styles.container}>
            <Text>
                Cadastro de médicos
            </Text>

            <TextInput
                placeholder="Digite o nome"
                onChangeText={setNome}
                value={nome}


            />


            <TextInput

                placeholder="Digite a especialidade"
                onChangeText={setEspec}
                value={especialidade}
            />

            <TextInput

                placeholder="Digite o telefone"
                onChangeText={setTelefone}
                value={telefone}
            />

            <TextInput

                placeholder="Digite o endereço"
                onChangeText={setEndereco}
                value={endereco}
            />
            <TouchableOpacity

                onPress={callSave}
            >
                <Text>Cadastrar</Text>
            </TouchableOpacity>

            {(msg.search('Médico') > -1) ? <Text style={styles.text}>{msg}</Text> : null}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

