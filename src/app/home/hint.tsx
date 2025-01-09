import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

type AccordionProps = {
  title: string;
  detail: string;
  onPress?: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ title, detail, onPress }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity onPress={onPress || toggleAccordion} style={styles.accordionWrapper}>
      <View style={styles.accordionHeader}>
        <View style={styles.accordionIcon}>
          <Text style={{ fontSize: 14 }}>{isOpen ? "▲" : "▼"}</Text>
        </View>
        <Text style={styles.accordionTitle}>{title}</Text>
      </View>
      {isOpen && (
        <View style={styles.accordionContent}>
          <Text style={styles.accordionDetail}>{detail}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Hint = () => {
  const accordionItems = [
    { title: "このゲームについて", detail: "フィッシング詐欺対策アプリです。実際に送られてくるメッセージの内容を通して学ぼう！フィッシング詐欺によく使われる文章や、本来だったら送られてこないような違和感のある文章を選択して解答！全ての問題を解いてコレクションのコンプリートを目指そう！" },
    { title: "問題選択の仕方", detail: "ホーム画面からアプリアイコンをタッチして、問題形式を決定します。メール、SMSはアプリアイコンをタッチした後に見出しをタッチしてそれぞれの問題を選択します。" },
    { title: "メール問題の解き方", detail: "問題画面のメールからフィッシング詐欺と見抜ける要素を探します。画面下のボタンを押すと解答画面になるのでフィッシング詐欺の要素を直接タッチ！無ければ画面下の「間違いなし」を選択してください。" },
    { title: "SMS問題の解き方", detail: "問題画面のSMSからフィッシング詐欺と見抜ける要素を探します。画面下のボタンを押すと解答画面になるのでフィッシング詐欺の要素を直接タッチ！無ければ画面下の「間違いなし」を選択してください。" },
    { title: "電話問題の解き方", detail: "電話アプリを開くと着信画面になるので、電話に出てください。問題画面のメールに遷移します。そこからフィッシング詐欺と見抜ける要素を探します。画面下のボタンを押すと解答画面になるのでフィッシング詐欺の要素を直接タッチ！無ければ画面下の「間違いなし」を選択してください。" },
    { title: "コレクションについて", detail: "正解画面で見ることの出来た解説と、より詳しい解説を見ることができます。目指せコンプリート！" },
  ];

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>遊び方</Text>
        </View>

        {accordionItems.map((item, index) => (
          <Accordion key={index} title={item.title} detail={item.detail} />
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    marginLeft: 30,
    paddingTop: 20,
    paddingBottom: 10,
    width: "100%",
  },
  headerTitle: {
    fontWeight: "bold",
    marginLeft: -10,
    fontSize: 30,
    color: "#000000",
  },
  accordionWrapper: {
    marginLeft: 30,
    borderColor: "#E8E8E8",
    borderTopWidth: 1,
    width: "100%",
  },
  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  accordionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10
  },
  accordionIcon: {
    width: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  accordionContent: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 60
  },
  accordionDetail: {
    fontSize: 14,
    color: "#333",
  },
});

export default Hint;
