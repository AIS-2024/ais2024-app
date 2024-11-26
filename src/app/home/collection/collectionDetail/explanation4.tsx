/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CollectionTop from "../../../../components/CollectionTop";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { getReactNativePersistence } from "firebase/auth";

import BackButton from "../../../../components/BackButton";
import { useState, useEffect } from "react";
import { db } from "../../../../config";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { Explanation } from "../../../types/explanation";

const Explanation4: React.FC = () => {
  const [explanation, setExplanation] = useState<Explanation[]>([]);
  const [explanation2, setExplanation2] = useState<Explanation[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const fetchExplanation = async () => {
      const docRef = doc(db, "user", "YHQOFOUjDHixCrpjM9V5");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setExplanation([{ Explanation: data.解説文4の1 }]);
        setExplanation2([{ Explanation: data.解説文4の2 }]);
        setTitle(data.タイトル4); // タイトルを取得して保存
      } else {
        console.log("ドキュメントが見つかりません");
      }
    };

    fetchExplanation();
  }, []);
  
return (
  <GestureHandlerRootView >
    <ScrollView contentContainerStyle={styles.container}>
      <CollectionTop />

      <View style={styles.explanationContainer}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>解説</Text>
      {explanation.map((item, index) => (
        <Text key={index} style={styles.text}>{item.Explanation}</Text>
      ))}

        {explanation2.map((item, index) => (
        <Text key={index} style={styles.text}>{item.Explanation}</Text>
      ))}
      </View>
      <BackButton />
    </ScrollView>
  </GestureHandlerRootView>
);
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 80,
    justifyContent: "flex-start",
    },
  explanationContainer: {
    alignItems: "flex-start",
    paddingLeft: 30,
    paddingTop: 30,
    width: "95%",
    },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'left',
    paddingBottom: 30
    },
  subTitle: {
    fontSize: 20,
    textAlign: 'left',
    width: "100%",
    paddingBottom: 10
    },
  text: {
    fontSize: 20,
    textAlign: 'left',
    paddingBottom: 30,
    width: "100%",
    lineHeight: 28,
    },
});

export default Explanation4;
