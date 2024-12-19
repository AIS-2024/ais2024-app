/** @format */
// 正しい例 //

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ChangeButton from "../../../components/ChangeButton";
import { AntDesign } from "@expo/vector-icons";
import Address from "../../../components/Address";
import AnswerButton from "../../../components/AnswerButton";

const quiz1 = () => {
  const router = useRouter();

  const handlepressCorrect = () => {
    router.push("/home/correct");
    router.push("/home/correct?questionNumber=2"); // クエリパラメータを渡す
  };
  const handlepressIncorrect = () => {
    router.push("/home/incorrect");
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handlepressIncorrect}>
        <Address />
      </TouchableOpacity>

      <TouchableOpacity style={styles.mailTitleContent} onPress={handlepressIncorrect}>
        <Text style={styles.mailTitle}>
          【重要】Amazon.co.jp: お支払い方法の設定を更新してください
        </Text>
      </TouchableOpacity>

      <View>
        <View style={styles.divider} />
          <TouchableOpacity onPress={handlepressIncorrect}>
            <Image
              source={require("../../../../assets/amazonLogo.png")}
              style={styles.amazonLogo}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={handlepressIncorrect}>
              <Text style={styles.mailFirst}>
                この度はAmazon.co.jpをご利用いただき、ありがとうございます。{" "}
                {"\n"} {"\n"}
                ご注文の商品の出荷に際し、以下の情報が不足しているため、出荷が遅延する可能性がございます。
                {"\n"}
                {"\n"}
                ・住所{"\n"}
                ・電話番号{"\n"}
                ・配達希望日{"\n"}
                {"\n"}
                恐れ入りますが、以下のリンクより必要な手続きを入力していただき、更新手続きをお願いいたします。
                {"\n"}
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.mailLink}>
                ----------------------------------------{"\n"}
                <TouchableOpacity onPress={handlepressIncorrect}>
                  <Text style={styles.link} onPress={handlepressIncorrect}>
                    情報更新ページ
                  </Text>
                </TouchableOpacity>
                {"\n"}
                ----------------------------------------{"\n"}
              </Text>
            </View>
            <TouchableOpacity onPress={handlepressIncorrect}>
              <Text style={styles.mailSecond}>
                ご入力いただいた情報は、厳重に保管し、プライバシーの保護に努めております。
                {"\n"}
                ご不明な点がございましたら、カスタマーサービスへお問い合わせください。
                {"\n"}
                今後ともAmazon.co.jpへのご愛顧のほどよろしくお願いいたします。
                {"\n"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer} onPress={handlepressIncorrect}>
              <Text>Amazon.co.jp</Text>
            </TouchableOpacity>
          </View>
        </View>
      <AnswerButton label='間違い無し' onPress={handlepressCorrect} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mailTitleContent: {
    backgroundColor: "#F5F5F5",
    height: 122,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  mailTitle: {
    fontSize: 20,
  },
  amazonLogo: {
    width: 200,
  },
  fromContent: {
    flexDirection: "row",
    padding: 20,
  },
  iconContent: {
    width: 70,
    height: 70,
    backgroundColor: "#3988A1",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLetter: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  fromAmazon: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
  },
  to: {
    fontSize: 15,
    paddingLeft: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#696969",
  },
  mailFirst: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  mailLink: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  mailSecond: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  footer: {
    paddingHorizontal: 20,
  },
  link: {
    color: "#438FC6",
  },
});

export default quiz1;
