import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from "react-native";
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';

const SignUp = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const router = useRouter();

    const handlePress1 = () :void=> {
        router.push('../home');
    };
    const handlePress2 = () :void => {
        router.back();
    };



    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>新規登録</Text>
            </View>
            <View>
                <View style={styles.boxes}>
                    <Text>名前:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(newText) => setName(newText)}
                        placeholder="名前を入力"
                    />
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
                    <Text>年齢:</Text>
                    <TextInput
                        style={styles.input}
                        value={age}
                        onChangeText={(newText) => setAge(newText)}
                        placeholder="年齢を入力"
                        keyboardType="numeric"
                    />
                    <Text>性別:</Text>
                    <TextInput
                        style={styles.input}
                        value={sex}
                        onChangeText={(newText) => setSex(newText)}
                        placeholder="性別を入力"
                    />
                </View>
                <View style={styles.button}>
                    <Pressable style={styles.registerButton} onPress={handlePress1}>
                        <Text style={styles.buttonText}>登録</Text>
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
    registerButton: {
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

export default SignUp;
