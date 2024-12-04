import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CollectionTop from "../../../components/CollectionTop";
import BackButton from "../../../components/BackButton";
import { collection, getDocs } from "firebase/firestore"; // Firestore関連のインポート
import { auth, db } from "../../../config";

const Collection = () => {
  const [loading, setLoading] = useState(true); // ローディング状態
  const [explanations, setExplanations] = useState<{
    id: string;
    isCorrect: boolean;
  }[]>([]); // explanationsの型定義

  const [explanations2, setExplanations2] = useState<{
    id: string;
    タイトル: string;
  }[]>([]); // explanations2の型定義

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

      // Firestoreから「user」データを取得
      const explanationsRef2 = collection(db, "user");
      const querySnapshot2 = await getDocs(explanationsRef2);

      // explanationsのデータを取得
      const data = querySnapshot.docs.map((doc) => {
        const docData = doc.data() as { isCorrect: boolean }; // 型の明示
        return {
          id: doc.id,
          isCorrect: docData.isCorrect,
        };
      });

      // explanations2のデータを取得
      const data2 = querySnapshot2.docs.map((doc) => {
        const docData2 = doc.data() as { タイトル: string }; // 型の明示
        return {
          id: doc.id,
          タイトル: docData2.タイトル,
        };
      });

      setExplanations(data); // explanationsのデータを状態にセット
      setExplanations2(data2); // explanations2のデータを状態にセット
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setLoading(false); // ローディング終了
    }
  };

  // コンポーネントがマウントされたときにデータを取得
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

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          explanations.map((explanation) => {
            // explanations2から対応するタイトルを取得
            const matchedTitle = explanations2.find((item) => item.id === explanation.id)?.タイトル;

            return (
              <TouchableOpacity
                key={explanation.id}
                onPress={() => explanation.isCorrect ? handlePress(explanation.id) : undefined} // isCorrectがtrueのときのみ遷移
                style={[
                  styles.detailButton,
                  !explanation.isCorrect && styles.disabledButton, // isCorrectがfalseの場合、無効スタイルを適用
                ]}
                disabled={!explanation.isCorrect} // isCorrectがtrueのときだけ有効
              >
                <Text style={styles.buttonText}>
                  {explanation.isCorrect ? matchedTitle || "タイトルなし" : "？？？"}
                </Text>
              </TouchableOpacity>
            );
          })
        )}
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
