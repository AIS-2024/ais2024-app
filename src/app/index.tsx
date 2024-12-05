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
        router.replace("/home/Home");
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
});

export default Index;
