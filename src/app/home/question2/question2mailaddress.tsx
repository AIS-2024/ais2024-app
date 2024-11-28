import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ChangeButton from "../../../components/ChangeButton";
import { AntDesign } from "@expo/vector-icons";
import Address from "../../../components/Address";

const handlepress = () : void => {
  router.push("home/question2/question2")
}

const Question2 = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Address />
        <View style={styles.headerContainer}>
            <Text style={styles.header}>【重要】Amazon株式会社からの緊急のご連絡</Text>

            <Text style={styles.title}>amazn.co.jp</Text>
            <Text style={styles.underline}>___________________________________________</Text>
        </View>


        <View style={styles.mailContainer}>
            <Text style={styles.sectionHeader}>【重要】カスタマセンターからのご案内</Text>

            <Text>あなたのAmazonアカウント：○○○@sample.jp、異常なログインが見つかり、配送先住所が変更されました！</Text>

        <View style={styles.address}>
            <Text>ログイン日時：2024-10-05, 4:23:31</Text>
            <Text>IPアドレス：[000.0.0.00]</Text>
            <Text>装備：iphone8 IOS 18.0.1</Text>
            <Text>場所：水戸市</Text>
        </View>

            <Text>つきましては、お客様の情報を保護するために次の措置を講じました</Text>

            <Text>--お客様のアカウントのパスワードを無効にいたしました</Text>
            <Text>--不正アクセスによって行われた変更につきましては、無効にいたしました</Text>

            <Text style={styles.warning}>お客様のアカウントに再度有効化していただけるようになります。次のリンクをクリックして指示に従ってください。</Text>

            <TouchableOpacity style={styles.button} onPress={handlepress}>
              <Text style={styles.buttonText}>アカウント管理に移動</Text>
            </TouchableOpacity> 


        <View style={styles.footerContainer}>
            <Text style={styles.underline}>___________________________________________</Text>
            <Text>Copyright ⓒ 2020 Amazon Inc. All rights reserved</Text>
            <Text>発行元：Amazon株式会社</Text>
        </View>

        </View>
        <ChangeButton>
          <AntDesign name='exclamation' size={40} />
        </ChangeButton>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 80,
    alignItems: "center"
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 20
  },
  header: {
    fontSize: 12,
    marginBottom: 10,
    alignSelf: "flex-end"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  underline: {
    marginBottom: 10,
  },
  mailContainer: {
    alignItems: "flex-start",
    gap: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf:"center"
  },
  address: {
    marginTop: 15,
    marginBottom: 15
  },
  text: {
    marginBottom: 5,
    textAlign: "left",
  },
  group: {
    marginBottom: 10,
  },
  warning:{
    marginBottom: 15
  },
  button: {
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "#62AEF4",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    marginTop:40,
    marginBottom: 40,
  },
  buttonText: {
    color: "#62AEF4",
    textAlign: "center",
    fontSize: 16,
  },
  footerContainer: {
    alignItems: "center",
    alignSelf: "center",

  },
  navButton: {
    alignItems: 'center',
  },
})

export default Question2
