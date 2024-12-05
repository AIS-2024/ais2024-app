/** @format */
// 回答画面 //

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import AnswerButton from "../../../components/AnswerButton";
import Address from "../../../components/Address";

const handlePress = (): void => {
  router.push("/home/question1/nottori");
};
const handlePressHome = (): void => {
  router.push("/home/home");
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={handlePressHome}><Address /></TouchableOpacity>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.title} onPress={handlePress}>
          おめでとう五座います！当選しました貴方は！
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoLink} onPress={handlePressHome}>
        <Text style={styles.linkText}>注文履歴</Text>
        <Text>｜</Text>
        <Text style={styles.linkText}>アカウントサービス</Text>
        <Text>｜</Text>
        <Text style={styles.linkText}>Amazon.co.jp</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePressHome}><Text style={{ textAlign: "right" }}>ご注文の確認</Text></TouchableOpacity>

      <TouchableOpacity style={styles.infoLink} onPress={handlePressHome}>
        <Text>注文番号：</Text>
        <Text style={styles.linkText}>508-8864920-6546310</Text>
      </TouchableOpacity>

      <View style={styles.mail}>
      <TouchableOpacity onPress={handlePressHome}><Text>username様</Text></TouchableOpacity>
      <TouchableOpacity onPress={handlePressHome}><Text style={styles.mainText}>招待者に選ばれました。</Text></TouchableOpacity>
      <TouchableOpacity onPress={handlePressHome}><Text>
          招待リクエストをお送りいただき、ありがとうございます。お客様は、招待販売の招待者にえらばれました。当選した商品をご購入いただけます。
          {"\n"}
          {"\n"}
          本招待メールによる注文の有効期限は、本招待メールが
        </Text></TouchableOpacity>
        <TouchableOpacity onPress={handlePressHome}><Text style={styles.linkText}>Amazon.co.jp</Text></TouchableOpacity>
        <TouchableOpacity onPress={handlePressHome}><Text>から発信されてから72時間以内です。</Text></TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonText} onPress={handlePressHome}>
            <Text style={styles.buttonText}>商品を見る</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handlePressHome}>
        <Text>
          商品を購入するには、「商品を見る」ボタンをクリックして商品ページへアクセスし、商品を注文してください、
          {"\n"}
          {"\n"}
          商品の発送準備が完了したら、お知らせいたします。
        </Text>
        </TouchableOpacity>
      </View>
      <AnswerButton>
        <AntDesign name='check' size={40} onPress={handlePress}/>
      </AnswerButton>
    </ScrollView>
  );
}

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
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#FF9500",
    width: 150,
    height: 35,
    marginTop: 80,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    marginVertical: "auto",
  },
});
