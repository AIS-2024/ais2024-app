import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Alert, ActivityIndicator } from "react-native";
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { FirebaseError } from "firebase/app";
import {signInWithEmailAndPassword}from "firebase/auth";
import { auth,db } from "../../config";

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const allFieldsFilled = mail !== "" && password !== "";

    const handlePress1 = async()=> {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth,mail, password);
            const user = userCredential.user;
        Alert.alert("ログイン成功", "ログインしました！");
        router.replace("/home/home")
        } catch (error:unknown) {
            if (error instanceof FirebaseError){
                Alert.alert("エラー", error.code);
            }else {
                Alert.alert("エラー","未知のエラーが発生しました。");
            }
        }finally {
            setLoading(false); // ローディング終了
            }
  };
  const handlePress2 = () :void => {
        router.back();
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
                    <Pressable style={[styles.loginButton, !allFieldsFilled && styles.disabledButton]} onPress={handlePress1} disabled={loading || !allFieldsFilled}>
                    {loading ? (
                            <ActivityIndicator size="small" color="#ffffff" /> // サーキュラーインジケータを表示
                        ) : (
                            <Text style={styles.buttonText}>ログイン</Text>
                        )}
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
    disabledButton: {
        opacity: 0.5 // ボタンが無効な場合の色
    },
    backButton: {
        alignItems: 'center',
        backgroundColor: '#000000',
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
