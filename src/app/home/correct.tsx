import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Correct = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/home/home");
  };

  return (
    <ScrollView style={styles.all}>
      <View>
        <View style={styles.correctContent}>
          <Text style={styles.correct}>正解！</Text>
        </View>

        <View style={styles.explainContent}>
          <Text style={styles.explain}>解説</Text>
          <ScrollView style={styles.explainScroll}>
            <Text style={styles.explainLetter}>
              解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容
              解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容
              解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.backButton} onPress={handleHome}>
            <Text style={styles.back}>ホームに戻る</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#F9F7E8",
  },
  correctContent: {
    paddingTop: 70,
    alignItems: "center",
    paddingBottom: 20,
  },
  correct: {
    fontSize: 96,
    color: "#D42727",
  },
  explainContent: {
    alignSelf: "center",
    backgroundColor: "#ffffff",
    width: "90%", // 画面幅に応じて調整
    maxHeight: 500,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  explain: {
    fontSize: 40,
    color: "#3F54C7",
    marginBottom: 10,
  },
  explainScroll: {
    flexGrow: 0,
    maxHeight: 350,
  },
  explainLetter: {
    fontSize: 20,
    lineHeight: 28,
  },
  backButton: {
    backgroundColor: "#FFB74B",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 50,
  },
  back: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Correct;
