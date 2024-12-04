import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CollectionTop from "../../../components/CollectionTop";
import BackButton from "../../../components/BackButton";
import { collection, getDocs, DocumentData } from "firebase/firestore";  // DocumentDataのインポート
import { auth, db } from "../../../config";

const Collection = () => {
  const [loading, setLoading] = useState(true); // ローディング状態
  const [explanations, setExplanations] = useState<{
    id: string;
    正誤: string;
    タイトル: string;
    解説文1: string;
    解説文2: string;
  }[]>([]); // 型を明示的に指定

  // Firestoreからデータを取得する関数
  const fetchExplanations = async () => {
    setLoading(true);
    try {
      // 現在のユーザーIDを取得
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.error("ユーザーが認証されていません");
        return;
      }

      // Firestoreから「explanations」データを取得
      const explanationsRef = collection(db, "userInfo", userId, "explanations"); // userInfo/{uid}/explanations サブコレクション
      const querySnapshot = await getDocs(explanationsRef);

      // データの取得
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data() as { 正誤: string; タイトル: string; 解説文1: string; 解説文2: string }; // 型の明示
        return {
          id: doc.id,
          正誤: docData.正誤,
          タイトル: docData.タイトル,
          解説文1: docData.解説文1,
          解説文2: docData.解説文2,
        };
      });

      setExplanations(data); // 取得したデータを状態にセット
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setLoading(false); // ローディング終了
    }
  };

  // コンポーネントがマウントされたらデータを取得
  useEffect(() => {
    fetchExplanations();
  }, []);

  const handlePress = (id: string): void => {
    router.push(`/home/collection/collectionDetail/${id}`);
  };

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
        <CollectionTop />
        
        {explanations.map((explanation) => (
          <TouchableOpacity
            key={explanation.id}
            onPress={() => explanation.正誤 === "正" ? handlePress(explanation.id) : undefined}  // 正誤が「正」のときのみ遷移
            style={[
              styles.detailButton,
              explanation.正誤 !== "正" && styles.disabledButton,  // 正誤が「正」じゃない場合、無効スタイルを適用
            ]}
            disabled={explanation.正誤 !== "正"}  // 正誤が「正」のときだけ有効
          >
            <Text style={styles.buttonText}>{explanation.正誤 === "正" ? explanation.タイトル : "？？？"}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BackButton />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 80,
    alignItems: "center",
  },

  detailButton: {
    backgroundColor: "#D9D9D9",
    width: "80%",
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  disabledButton: {
    backgroundColor: "#B0B0B0",
  },
});

export default Collection;
