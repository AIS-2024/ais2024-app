/** @format */

import React from "react";
import { Link, Redirect, router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";

const handlepress1 = (): void => {
  router.push("./auth/SignUp");
};

const handlepress2 = (): void => {
  router.push("./auth/Login");
};

const Index = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        router.replace("/home/home");
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlepress1}>
        <Text style={styles.buttonText}>新規登録</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlepress2}>
        <Text style={styles.buttonText}>ログイン</Text>
      </TouchableOpacity>

      <View style={styles.intro}>
        <Text style={styles.introText}>
          フィッシング詐欺について、実際に送られてくるメッセージの内容を通して学ぼう！{"\n"}{"\n"}
          フィッシング詐欺によく使われる文章や、本来だったら送られてこないような違和感のある文章を選択して解答！{"\n"}{"\n"}
          全ての問題を解いてコレクションのコンプリートを目指そう！
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    width: "60%",
    height: 70,
    backgroundColor: "#3F54C7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
  intro: {
    backgroundColor: "#fff",
    borderColor: "#ff8c00",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2
  },
  introText: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold'
  }
});

export default Index;
