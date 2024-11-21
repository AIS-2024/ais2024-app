import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handlePress1 = () => {
        router.push('/question/app');
    };
    const handlePress2 = () => {
        router.push('/question/home');
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>ログイン</Text>
            </View>
            <View>
                <View style={styles.boxes}>
                    <Text>メールアドレス:</Text>
                    <TextInput
                        style={styles.input}
                        value={mail}
                        onChangeText={(newText) => setMail(newText)}
                        placeholder="メールアドレスを入力"
                    />
                    <Text>パスワード:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={(newText) => setPassword(newText)}
                        placeholder="パスワードを入力"
                        secureTextEntry
                    />
                </View>
                <View style={styles.button}>
                    <Pressable style={styles.loginButton} onPress={handlePress1}>
                        <Text style={styles.buttonText}>ログイン</Text>
                    </Pressable>
                    <Pressable style={styles.backButton} onPress={handlePress2}>
                        <Text style={styles.buttonText}>戻る</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3F54C7'
    },
    headerText: {
        fontSize: 24,
        paddingBottom: 20,
        color: '#FFF'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
        marginVertical: 10
    },
    button: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    loginButton: {
        alignItems: 'center',
        backgroundColor: '#3F54C7',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10
    },
    backButton: {
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10
    },
    boxes: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    }
});

export default Login;
