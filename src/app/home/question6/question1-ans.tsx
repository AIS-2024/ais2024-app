/** @format */
// 正しい例 //

import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Address from "../../../components/Address";
import AnswerButton from "../../../components/AnswerButton";

const handlepressCorrect = () => {
  router.push("/home/correct");
};
const handlepressIncorrect = () => {
  router.push("/home/incorrect");
};

const Question1 = () => {
  return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Address />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            クレジットカード情報の更新、追加などにつきまして、以下の手順をご確認ください。アカウントサービスからAmazon情報を管理するページにアクセスして、更新してください。
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            また、Amazonプライム期間が終了したら、お急ぎ便無料やプライム・ビデオ見放題　などのプライム会員特典のご利用ができなくなります。（主なプライム会員特典を確認するには{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.link}>こちら </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            をクリックしてください）。お早めにお手続きの程よろしくお願い致します
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            継続してプライム会員特典をお楽しみいただきたい場合は、｢Amazonプライム会員情報の管理｣ページににて｢会員資格を帰属する｣をクリックしてください。
          </Text>
        </TouchableOpacity>

        <Text style={styles.button} onPress={handlepressIncorrect}>会員情報の管理ページで確認</Text>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.alert}>
            なお、72時間以内にご確認がない場合、誠に申し訳ございません、お客様の安全のため、アカウントの利用制限をさせていただきますので、あらかじめご了承ください。
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.inquiry}>
            アカウントに登録のEメールアドレスにアクセスできない場合
          </Text>

          <Text style={styles.inquiry}>
            お問い合わせ：Amazonカスタマーサービス。
          </Text>

          <Text style={styles.main}>
            Amazonサービスをご利用いただき、ありがとうございました。
          </Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={handlepressIncorrect}><Text style={styles.footer}>Amazon.co.jp　カスタマーサービス</Text></TouchableOpacity>
      <AnswerButton label='間違い無し' onPress={handlepressCorrect} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#ffffff",

  },
  main: {
    marginBottom: 20,
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#FFB74B",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 12,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 25,
    alignSelf: "center"
  },
  alert: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  inquiry: {
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  footer: {
    marginTop: 60,
  },
});

export default Question1;
