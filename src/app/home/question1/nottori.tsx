/** @format */
// 他パターン無し 内容が詐欺なので //

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import ChangeButton from "../../../components/ChangeButton";
import Address from "../../../components/Address";
import Footer from "../../../components/Footer";
import { auth, db } from "../../../config";
import { doc, getDoc } from "firebase/firestore";

const handlePress = (): void => {
  router.push("/home/question1/nottori-ans");
};

const Nottori = () => {
  const [username, setUsername] = useState("");


  const fetchUsername = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.warn("User not logged in.");
      return null;
    }

    const userDoc = doc(db, "userInfo", user.uid);
    try {
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        return docSnap.data().name;
      } else {
        console.warn("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    return null;
  };

  useEffect(() => {
    const loadUsername = async () => {
      const name = await fetchUsername();
      setUsername(name || "user");
    };
    loadUsername();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Address />
      <View style={styles.header}>
        <Text style={styles.title}>
          Amazon.co.jpでのご注文{"\n"}
          508-8864920-6546310（1点）
        </Text>
      </View>
      <View style={styles.infoLink}>
        <Text style={styles.linkText}>注文履歴</Text>
        <Text>｜</Text>
        <Text style={styles.linkText}>アカウントサービス</Text>
        <Text>｜</Text>
        <Text style={styles.linkText}>Amazon.co.jp</Text>
      </View>
      <View style={styles.infoLink}>
        <Text>注文番号：</Text>
        <Text style={styles.linkText}>508-8864920-6546310</Text>
      </View>

      <View style={styles.mail}>
        <Text>{username}様</Text>
        <Text style={styles.mainBlack}>
          誰かがあなたのAmazonアカウントを使用して別のモバイルデバイスからこの注文を購入しようとしました。Amazonのアカウントセキュリティポリシーに従い、Amazonアカウントを凍結しました。
        </Text>
        <Text style={styles.mainRed}>
          ◆アカウントが盗まれる危険性があります。この注文を一度も購入したことが無い場合は、24時間以内に以下のリンクをクリックして、この注文をキャンセル、Amazonアカウントを復元してください
        </Text>

        <View style={styles.order}>
          <View style={styles.orderInner}>
            <Text style={styles.category}>お届け予定：</Text>
            <Text style={styles.categoryText}>水曜日, 06/07{"\n"}</Text>
            <Text style={styles.category}>{"\n"}配送オプション：</Text>
            <Text style={styles.categoryText}>お急ぎ便</Text>
            <View style={styles.button}>
              <TouchableOpacity style={styles.buttonText}>
                <Text style={styles.buttonText}>この注文をキャンセルする</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orderInner}>
            <Text style={styles.category}>お届け先：</Text>
            <Text style={styles.categoryText}>
              username 様{"\n"}
              〒100-8111{"\n"}
              東京都千代田区{"\n"}
              千代田1-1{"\n"}
            </Text>
            <Text style={styles.categoryText}>{"\n"}注文合計</Text>
            <Text style={styles.categoryTextRight}>￥{"\n"}98,300</Text>
            <Text>{"\n"}支払方法</Text>
            <Text>クレジットカード：</Text>
            <Text style={styles.textRight}>￥{"\n"}98,300</Text>
          </View>
        </View>
        <Footer />
      </View>
      <ChangeButton onPress={handlePress}>
        <AntDesign name='exclamation' size={40} />
      </ChangeButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#EEE",
    height: 155,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  infoLink: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 5,
  },
  linkText: {
    color: "#007AFF",
  },
  mail: {
    paddingHorizontal: 20,
  },
  mainBlack: {
    paddingVertical: 10,
  },
  mainRed: {
    fontSize: 18,
    paddingVertical: 10,
    color: "#FF3B30",
  },
  button: {
    backgroundColor: "#FF9500",
    width: 150,
    height: 35,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 12,
  },
  order: {
    backgroundColor: "#EEE",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderInner: {
    flex: 1,
    marginHorizontal: 10,
  },
  category: {
    color: "#666",
  },
  categoryText: {
    fontWeight: "bold",
  },
  categoryTextRight: {
    fontWeight: "bold",
    textAlign: "right",
  },
  textRight: {
    textAlign: "right",
  },
});

export default Nottori;
