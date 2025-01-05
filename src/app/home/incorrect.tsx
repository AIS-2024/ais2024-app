import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Incorrect = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.back();
  };

  const handleHome = () => {
    router.push("/home/home");
  };

  return (
    <ScrollView style={styles.all}>
      <View>
        <Text style={styles.correct}>不正解...</Text>
        <TouchableOpacity style={styles.button} onPress={handleRetry}>
          <Text style={styles.buttonText}>もう一度挑戦する</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={handleHome}>
          <Text style={styles.buttonText}>ホームに戻る</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#fbf8ff",
  },
  correct: {
    alignSelf: "center",
    paddingTop: 50,
    fontSize: 96,
    color: "#454653",
  },
  button: {
    backgroundColor: "#4f64d7",
    alignSelf: "center",
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  homeButton: {
    backgroundColor: "#545b88",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Incorrect;
