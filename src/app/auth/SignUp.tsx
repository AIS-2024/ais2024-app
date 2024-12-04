import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, Pressable,Alert } from "react-native";
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { auth,db } from "../../config";

const SignUp = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const allFieldsFilled = name !== "" && mail !== "" && password !== "" && age !== "" && sex !== "";

    const handlePress1 = async()=> {
        if(!allFieldsFilled){
            Alert.alert("入力エラー", "全てのフィールドに入力してください。")
            return;
        }
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, mail, password);
            const user = userCredential.user;
            const userDocRef = doc(db, "userInfo", user.uid); // Firestore の "userInfo" コレクション
            Alert.alert("登録成功", `登録が完了しました！`);
            router.replace("/home/home");
            await setDoc(userDocRef, {
                name: name,
                age: parseInt(age, 10), // 年齢をint型に変換 (10進数として整数に変換する)
                sex: sex
            });
            
            const explanations = [
                { isCorrect: false },
                { isCorrect: false },
                { isCorrect: false },
                { isCorrect: false },
                { isCorrect: false },
                { isCorrect: false },
                { isCorrect: false },
                { isCorrect: false },
            ];
    
            // サブコレクションに解説文を追加
            for (let i = 0; i < explanations.length; i++) {
                const explanation = explanations[i];
                const explanationDocRef = doc(userDocRef, "explanations", `explanation${i + 1}`);
                await setDoc(explanationDocRef, explanation);
            }
            
          } catch (error:unknown) {
            if (error instanceof FirebaseError) {
      switch (error.code) {
        case "auth/email-already-in-use":
          Alert.alert("エラー", "このメールアドレスはすでに使用されています。");
          break;
        case "auth/invalid-email":
          Alert.alert("エラー", "メールアドレスの形式が無効です。");
          break;
        case "auth/weak-password":
          Alert.alert("エラー", "パスワードが弱すぎます（最低6文字必要）。");
          break;
        default:
          Alert.alert("エラー", "新規登録中にエラーが発生しました。");
        }
        }else {
            Alert.alert("エラー","未知のエラーが発生しました。");
          }
        } finally {
        setLoading(false); // ローディング終了
        }
        
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
                    <Pressable style={[styles.registerButton, !allFieldsFilled && styles.disabledButton]} onPress={handlePress1} disabled={loading || !allFieldsFilled}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#ffffff" /> // サーキュラーインジケータを表示
                        ) : (
                            <Text style={styles.buttonText}>登録</Text>
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
    registerButton: {
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
