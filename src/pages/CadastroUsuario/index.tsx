import React from "react";
import styles from "../Login/styles";
import { Alert, TextInput, View, Text, Button } from "react-native";

export default function CadastroUsuario() {


    const [nomeUsuario, setName] = React.useState('');

    //let nomeUsuario = ''
    let username = ''
    let password = ''
    let passwordConfirm = ''

    function Salvar() {
        if (nomeUsuario.trim() === '') {
            Alert.alert('Campo Nome vazio');
            return;
        }
        if (username.trim() === '') {
            Alert.alert('Campo Login vazio');
            return;
        }
        if (password.trim() === '') {
            Alert.alert('Campo Password vazio');
            return;
        }
        if (passwordConfirm.trim() === '') {
            Alert.alert('Campo Confirmar Senha vazio');
            return;
        }
        if (password.trim() !== passwordConfirm.trim()) {
            Alert.alert('As senhas não são iguais');
            return;
        }

        Alert.alert('Usuário cadastrado com SUCESSO!');
    } 

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Cadastro Usuário</Text>

            <View style={styles.inputView}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput style={styles.input} onChangeText={value => setName(value)} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Login:</Text>
                <TextInput style={styles.input} onChangeText={value => username = value} />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.input} onChangeText={value => password = value} secureTextEntry />
            </View>

            <View style={styles.inputView}>
                <Text style={styles.label}>Confirmar Senha:</Text>
                <TextInput style={styles.input} onChangeText={value => passwordConfirm = value} secureTextEntry />
            </View>

            <View style={styles.buttonView}>
                <Button title='Entrar' onPress={Salvar} />
            </View>

        </View>
    )
}