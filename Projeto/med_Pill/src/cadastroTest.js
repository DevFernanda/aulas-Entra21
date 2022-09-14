import { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default function CadastroTest({navigation}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            save()
        }
    }
    function limpar() {
        setNome('')
        setSobrenome('')
        setEmail('')
        setSenha('')
    }

    function save() {
        fetch('http://localhost:8080/usuarios',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json', 'content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    sobrenome: sobrenome,
                    email: email,
                    senha: senha,

                })
            }
        )
            .then(() => { setMessage("Registro inserido com sucesso") })
            .then(() => limpar())
            .then(() => navigation.navigate('Login'))
            .catch((err) => { setMessage("Registro não foi inserido", err) })
    }


    function validarDados() {
        if (nome == '') {
            setMessage("DIGITE NOME!")
            return false
        } if (sobrenome == '') {
            setMessage("DIGITE SOBRENOME!")
            return false
        } if (email == '') {
            setMessage("DIGITE EMAIL!")
            return false
        } if (senha == '') {
            setMessage("DIGITE SENHA!")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/cadastro-bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.bodyContainer}>

                    {/* <View style={styles.inputContainer}> */}
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        onChangeText={setNome}
                        value={nome}
                    />
                    {(message.search('NOME') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Sobrenome"
                        style={styles.input}
                        onChangeText={setSobrenome}
                        value={sobrenome}
                    />
                    {(message.search('SOBRENOME') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                    {(message.search('EMAIL') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        onChangeText={setSenha}
                        value={senha}
                    />
                    {(message.search('SENHA') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                    {/* </View> */}


                    {(message.search('EMAIL') > -1) | (message.search('SENHA') > -1) | (message.search('NOME') > -1) | (message.search('SOBRENOME') > -1) ? <Text style={styles.text}>{message}</Text> : null}


                    <TouchableOpacity
                        style={styles.button}
                        onPress={callSave}
                    >
                        <Text style={styles.textobotao}>CADASTRAR</Text>
                    </TouchableOpacity>

                    {(message.search('Registro') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                </View>

                <View style={styles.logoContainer}>
                    <Image source={require('../assets/medpill.png')} resizeMode='contain' style={styles.logoBot} ></Image>
                </View>

            </ImageBackground>
        </View>
    )
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
        //margin: 'auto'        
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
        color: "white"

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












