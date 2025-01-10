import { Stack } from "expo-router";
import React from "react";
import LogOutButton from "../components/LogOutButton";

const Layout = () => {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerRight: () => route.name.startsWith("home/") ? <LogOutButton /> : null,
        headerStyle: {
          backgroundColor: "#263db1",
        },
        headerTintColor: '#ffffff', // 戻るボタンやタイトルの色
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      })}
    >
      <Stack.Screen name="index" options={{ title: "スタート", headerLeft: () => false }} />
      <Stack.Screen name="auth/Login" options={{ title: "ログイン", headerLeft: () => false }} />
      <Stack.Screen name="auth/SignUp" options={{ title: "新規登録", headerLeft: () => false }} />
      <Stack.Screen name="home/home" options={{ title: "ホーム", headerLeft: () => false }} />
      <Stack.Screen name="home/collection/index" options={{ title: "コレクション" }} />
      <Stack.Screen name="home/mailSelect" options={{ title: "メール問題選択" }} />
      <Stack.Screen name="home/smsSelect" options={{ title: "SMS問題選択" }} />
      <Stack.Screen name="home/question4/callbefore" options={{ title: "電話問題" }} />
      <Stack.Screen name="home/question1/nottori" options={{ title: "メール問題1" }} />
      <Stack.Screen name="home/question1/nottori-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question8/goji" options={{ title: "メール問題2" }} />
      <Stack.Screen name="home/question8/goji-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question2/amazn" options={{ title: "メール問題3" }} />
      <Stack.Screen name="home/question2/amazn-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question3/quiz1" options={{ title: "メール問題4" }} />
      <Stack.Screen name="home/question3/quiz1-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question7/rightspot" options={{ title: "メール問題5" }} />
      <Stack.Screen name="home/question7/rightspot-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question6/question1" options={{ title: "メール問題6" }} />
      <Stack.Screen name="home/question6/question1-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question5/quiz2" options={{ title: "SMS問題1" }} />
      <Stack.Screen name="home/question5/quiz2-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/question5/quiz2-another" options={{ title: "SMS問題2" }} />
      <Stack.Screen name="home/question5/quiz2-another-ans" options={{ title: "解答画面" }} />
      <Stack.Screen name="home/correct" options={{ title: "正解" }} />
      <Stack.Screen name="home/incorrect" options={{ title: "不正解" }} />
      <Stack.Screen name="home/hint" options={{ title: "遊び方" }} />
      <Stack.Screen name="home/collection/collectionDetail/[id]" options={{ title: "コレクション"}} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
