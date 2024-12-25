/** @format */

import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import CollectionTop from "../../../components/CollectionTop";
import BackButton from "../../../components/BackButton";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config";

const Collection = () => {
  const [loading, setLoading] = useState(true);
  const [explanations, setExplanations] = useState<boolean[]>([]);
  const [titles, setTitles] = useState<string[]>([]);

  const data = [
    { title: "乗っ取り" },
    { title: "メールアドレス" },
    { title: "誤字" },
    { title: "電話" },
    { title: "タイトル5" },
    { title: "電話番号" },
    { title: "受け取りスポット" },
    { title: "タイトル8" },
  ];

  const fetchExplanations = async () => {
    setLoading(true);
    console.log("explanations:", explanations);
    
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        console.error("ユーザーが認証されていません");
        return;
      }

      const userInfoRef = doc(db, "userInfo", userId);
      const userInfoSnapshot = await getDoc(userInfoRef);

      if (userInfoSnapshot.exists()) {
        const userInfoData = userInfoSnapshot.data();
        console.log("userInfoData.explanations:", userInfoData.explanations);
        setExplanations(
          Object.values(userInfoData.explanations || {}).slice(0, data.length) as boolean[]
        );
        
      } else {
        console.error("userInfoドキュメントが見つかりません");
      }

      const titlePromises = Array.from({ length: 8 }, async (_, index) => {
        const explanationRef = doc(db, "user", `explanation${index + 1}`);
        const explanationSnapshot = await getDoc(explanationRef);
        if (explanationSnapshot.exists()) {
          const explanationData = explanationSnapshot.data();
          return explanationData.タイトル || "タイトルなし";
        }
        return "タイトルなし";
      });

      const fetchedTitles = await Promise.all(titlePromises);
      setTitles(fetchedTitles);
    } catch (error) {
      console.error("データの取得に失敗しました:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExplanations();
  }, []);

  const handlePress = (id: string): void => {
    router.push({
      pathname: `/home/collection/collectionDetail/${id}`,
    });
  };

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
        <CollectionTop />

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          explanations.map((value, index) => {
            const matchedTitle = data[index]?.title || "タイトルなし";

            return (
              <TouchableOpacity
                key={index}
                onPress={() => value && handlePress((index + 1).toString())}
                style={[styles.detailButton, !value && styles.disabledButton]}
                disabled={!value}
              >
                <Text style={styles.buttonText}>
                  {value ? matchedTitle : "？？？"}
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
