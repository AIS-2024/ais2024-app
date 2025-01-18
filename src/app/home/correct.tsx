import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { getFirestore, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import data from "./collection/collectionDetail/data";

const Correct = () => {
  const router = useRouter();
  const searchParams = useLocalSearchParams();
  const [questionNumber, setQuestionNumber] = useState<number | null>(null);

  const db = getFirestore(); // Firestore インスタンス
  const auth = getAuth(); // 認証インスタンス

  useEffect(() => {
    const num = searchParams.questionNumber ? parseInt(searchParams.questionNumber as string, 10) : null;
    setQuestionNumber(num); // Store questionNumber as a number
    console.log("Received questionNumber:", num);
  }, [searchParams]);

  // const handleHome = () => {
  //   router.push("/home/home");
  // };

  const firstItem = questionNumber !== null ? data[questionNumber] : null;
  const { text, text2 } = firstItem || { text: "", text2: "" };

  const updateExplanationStatus = async (questionNumber: number) => {
    const user = auth.currentUser; // 現在のユーザー
    if (user) {
      try {
        // Firestoreのパスを指定（`userInfo`コレクション内のドキュメント）
        const userInfoRef = doc(db, "userInfo", user.uid); // userInfo コレクションの中のユーザーのドキュメントを参照

        // 更新するフィールドを指定
        const explanationField = `explanations.${questionNumber}`; // explanationsの配列の特定のインデックスを指定

        // 現在のデータを取得して、必要に応じて更新を行う
        const userDoc = await getDoc(userInfoRef);
        if (userDoc.exists()) {
          const currentData = userDoc.data();
          const currentExplanations = currentData.explanations || {}; // explanationsフィールドが存在しない場合に備え

          // 更新する値をtrueに設定
          const updatedExplanations = {
            ...currentExplanations,
            [questionNumber]: true,
          };

          // データをセットする
          await setDoc(userInfoRef, { explanations: updatedExplanations }, { merge: true });

          console.log(`explanations.${questionNumber} updated to true`);
        } else {
          console.error("User document not found.");
        }
      } catch (error) {
        console.error("Error updating explanation status:", error);
      }
    }
  };

  // ボタンを押したときに呼ばれる
  const handleUpdate = () => {
    if (questionNumber !== null) {
      updateExplanationStatus(questionNumber);
      router.push("/home/home");
    }
  };

  return (
    <View style={styles.all}>
      <View>
        <View style={styles.correctContent}>
          {questionNumber !== 8 ? <Text style={styles.correct}>素晴らしい判断です!!  </Text> : <Text style={styles.correct}>正解！</Text>}
        </View>
        {/* 素晴らしい判断です！,危険を回避した 安心、安全な選択です！*/}
        <View style={styles.explainContent}>
          <Text style={styles.explain}>解説</Text>
          <ScrollView style={styles.explainScroll}>
            <Text style={styles.explainLetter}>
              {text || "解説の内容が表示されません"}
            </Text>
            <Text style={styles.explainLetter}>
              {"\n"}
              {text2 || "解説の内容が表示されません"}
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.backButton} onPress={handleUpdate}>
            <Text style={styles.back}>ホームに戻る</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: "#fbf8ff",
  },
  correctContent: {
    paddingTop: 40,
    alignItems: "center",
    paddingBottom: 20,
  },
  correct: {
    textAlign: "center",
    fontSize: 70,
    color: "#D42727",
    padding: 10
  },
  explainContent: {
    alignSelf: "center",
    backgroundColor: "#ffffff",
    width: "90%", // 画面幅に応じて調整
    maxHeight: 475,
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
    color: "#4f64d7",
    marginBottom: 10,
  },
  explainScroll: {
    flexGrow: 1,
    maxHeight: 250,
  },
  explainLetter: {
    fontSize: 20,
    lineHeight: 28,
  },
  backButton: {
    backgroundColor: "#263db1",
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
