import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function Login({navigation}) {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            logar()
        }
    }
    function limpar() {
        setSenha('')
        setEmail('')
    }

    function logar() {
        AsyncStorage.removeItem('login')
        fetch('http://localhost:8080/usuarios/login',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                })
            }
        )
            .then(data => data.json())
            .then(result => AsyncStorage.setItem('login', result.token))
            .then(() => limpar())
            .catch((err) => { setMessage("Não foi possível fazer o login", err) })
    }


    function validarDados() {
        if (email == '') {
            setMessage("Digite um email")
            return false
        } if (senha == '') {
            setMessage("Digite a senha")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../assets/login-bg.png')} resizeMode="cover" style={styles.image}>

                <View style={styles.logoContainer}>
                    <Image source={require('../assets/medpill.png')} resizeMode='contain' style={styles.logoTop} ></Image>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.inputContainer}>

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />

                    {(message.search('email') > -1) ? <Text style={styles.text}>{message}</Text> : null}       

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry={true}
                    />
                    {(message.search('senha') > -1) ? <Text style={styles.text}>{message}</Text> : null}
                    </View>

                    <Text style={{ alignSelf: 'flex-end', marginRight: '15%' , marginTop: 20, color: '#FBCB76' }}>Esqueceu sua senha?</Text>

                    

                    <TouchableOpacity
                        style={styles.button}
                        onPress={callSave}
                    >
                        <Text style={styles.textobotao}>ENTRAR</Text>
                    </TouchableOpacity>

                    <View style={styles.cadastrarContainer}>
                        <Text style={{ color: 'white' }}>Não possui uma conta?</Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate("Cadastro")}
                        >
                        <Text style={{ color: '#FBCB76' }}> Cadastre-se</Text>
                        </TouchableOpacity>
                        
                    </View>

                    {(message.search('Não foi') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                </View>



            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 7,
        color: 'black'
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
        flexDirection: 'column'        
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        width: '40%',
        backgroundColor: "#83C4D8",
        padding: 10,
        borderRadius: 30,
        marginTop: 50
    },
    textobotao: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 10,
        color: 'red',
        textAlign: "left",
        marginLeft: '15%',
        marginTop: 3
    },
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        margin: 'auto',
        marginTop: 25
    },
    inputContainer: {
        width: '100%',
        flexDirection: "column",
        
    },
    cadastrarContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    },
    logoTop: {
        with: '40%',
        height: '40%',
        marginTop: 38,
    }

});











