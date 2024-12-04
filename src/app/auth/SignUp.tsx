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
            router.replace("/home/Home");
            await setDoc(userDocRef, {
                name: name,
                age: parseInt(age, 10), // 年齢をint型に変換 (10進数として整数に変換する)
                sex: sex
            });
            
            const explanations = [
                { 正誤: "誤",タイトル: "メールアドレス", 解説文1: "詐欺メールは正規のメールアドレスを偽ったアドレスを使用することがあります。Amazonからのメールは、通常「Amazon.com」や「Amazon.co.jp」など、正確で公式なドメイン名が使われています。しかし、詐欺メールの場合、非常に似ているが微妙に違うアドレスが使われることがあります。", 解説文2: "詐欺の特徴：文字の一部が欠けている、文字の順番が逆になっている 、追加のスペースや文字が含まれている　等" },
                { 正誤: "誤",タイトル: "電話番号", 解説文1: "最近、大手サービスを名乗る詐欺電話が増えており、その中には070や080から始まる携帯番号であるケースもあります。これらの番号は、詐欺師が悪用することが多いため、特に注意が必要です。", 解説文2: "詐欺の特徴： 不審な携帯番号からの着信 大手サービスからの公式な連絡は、通常、登録された固定電話番号や認証された連絡先を使用します。070や080から始まる携帯番号から連絡が来た場合、それは詐欺の可能性が高いです。" },
                { 正誤: "誤",タイトル: "タイトル3", 解説文1: "解説文3の1", 解説文2: "解説文3の2" },
                { 正誤: "誤",タイトル: "タイトル4", 解説文1: "解説文4の1", 解説文2: "解説文4の2" },
                { 正誤: "誤",タイトル: "タイトル5", 解説文1: "解説文5の1", 解説文2: "解説文5の2" },
                { 正誤: "誤",タイトル: "タイトル6", 解説文1: "解説文6の1", 解説文2: "解説文6の2" },
                { 正誤: "誤",タイトル: "タイトル7", 解説文1: "解説文7の1", 解説文2: "解説文7の2" },
                { 正誤: "誤",タイトル: "タイトル8", 解説文1: "解説文8の1", 解説文2: "解説文8の2" },
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
