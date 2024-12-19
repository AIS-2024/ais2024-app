/** @format */

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter, Link } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { auth, db } from "../../config";
import { Picker } from '@react-native-picker/picker';

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("回答しない");
  const [sex, setSex] = useState("回答しない");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const allFieldsFilled =
    name !== "" && mail !== "" && password !== "" && age !== "" && sex !== "";

  const handlePress1 = async () => {
    if (!allFieldsFilled) {
      Alert.alert("入力エラー", "全てのフィールドに入力してください。");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        mail,
        password
      );
      const user = userCredential.user;
      console.log("User ID:", user.uid);
      const userDocRef = doc(db, "userInfo", user.uid); // Firestore の "userInfo" コレクション

      const explanations = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ];
      router.replace({
        pathname: "/home/home",
        params: { isNewUser: "true" },
      });
      await setDoc(userDocRef, {
        name: name,
        age: age,
        sex: sex,
        mail: mail,
        explanations: explanations,
      });
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            Alert.alert(
              "エラー",
              "このメールアドレスはすでに使用されています。"
            );
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
      } else {
        Alert.alert("エラー", "未知のエラーが発生しました。");
      }
    } finally {
      setLoading(false); // ローディング終了
    }
  };
  const handlePress2 = (): void => {
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>新規登録</Text>
      </View>
      <View>
        <View style={styles.boxes}>
          <View style={styles.title}>
            <Text>名前　</Text>
            <View style={styles.alert}>
              <Text style={styles.alertText}>必須</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(newText) => setName(newText)}
            placeholder="名前を入力"
          />
          <View style={styles.title}>
            <Text>メールアドレス　</Text>
            <View style={styles.alert}>
              <Text style={styles.alertText}>必須</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={mail}
            onChangeText={(newText) => setMail(newText)}
            placeholder="メールアドレスを入力"
          />
          <View style={styles.title}>
            <Text>パスワード　</Text>
            <View style={styles.alert}>
              <Text style={styles.alertText}>必須</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(newText) => setPassword(newText)}
            placeholder="パスワードを入力"
            secureTextEntry
          />
          <View style={styles.title}>
            <Text>年齢　</Text>
            <View style={styles.alertFree}>
              <Text style={styles.alertText}>任意</Text>
            </View>
          </View>
          <Picker
        selectedValue={age}
        onValueChange={(itemValue) => setAge(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="回答しない" value="回答しない" />
        <Picker.Item label="10歳未満" value="10歳未満" />
        <Picker.Item label="10代" value="10代" />
        <Picker.Item label="20代" value="20代" />
        <Picker.Item label="30代" value="30代" />
        <Picker.Item label="40代" value="40代" />
        <Picker.Item label="50代" value="50代" />
        <Picker.Item label="60代" value="60代" />
        <Picker.Item label="70代" value="70代" />
        <Picker.Item label="80歳以上" value="80歳以上" />
      </Picker>
      <View style={styles.title}>
          <Text>性別　</Text>
          <View style={styles.alertFree}>
              <Text style={styles.alertText}>任意</Text>
            </View>
          </View>
          <Picker
        selectedValue={sex}
        onValueChange={(itemValue) => setSex(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="回答しない" value="回答しない" />
        <Picker.Item label="男性" value="男性" />
        <Picker.Item label="女性" value="女性" />
      </Picker>
        </View>
        <View style={styles.button}>
          <Pressable
            style={[
              styles.registerButton,
              !allFieldsFilled && styles.disabledButton,
            ]}
            onPress={handlePress1}
            disabled={loading || !allFieldsFilled}
          >
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
    backgroundColor: "#fff",
  },
  header: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3F54C7",
  },
  headerText: {
    fontSize: 24,
    paddingBottom: 20,
    color: "#FFF",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
  },
  button: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  registerButton: {
    alignItems: "center",
    backgroundColor: "#3F54C7",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  disabledButton: {
    opacity: 0.5, // ボタンが無効な場合の色
  },
  backButton: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  boxes: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  title:{
    flexDirection: "row", // 横並びにする
    width:"100%",
    alignItems:"center"
  },
  alert:{
    backgroundColor:"red",
    borderRadius: 6,
    paddingVertical: 2, // 上下の余白
    paddingHorizontal: 4, // 左右の余白
  },
  alertFree:{
    backgroundColor:"gray",
    borderRadius: 6,
    paddingVertical: 2, // 上下の余白
    paddingHorizontal: 4, // 左右の余白
  },
  alertText:{
    color:"#ffffff",
    fontWeight: "bold",
  },
  picker: { height: 60, width: '100%' },
});

export default SignUp;
