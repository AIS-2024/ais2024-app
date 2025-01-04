import { Stack } from "expo-router";
import React from "react";
import LogOutButton from "../components/LogOutButton";

const Layout = () => {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerRight: () => route.name.startsWith("home/") ? <LogOutButton /> : null,
        headerStyle: {
          // ヘッダーの背景色などを設定
        },
        headerTintColor: '#000000', // 戻るボタンやタイトルの色
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      })}
    >
      <Stack.Screen name="index" options={{ title: "スタート", headerLeft: () => false }} />
      <Stack.Screen name="auth/Login" options={{ title: "ログイン" }} />
      <Stack.Screen name="auth/SignUp" options={{ title: "新規登録" }} />
      <Stack.Screen name="home/home" options={{ title: "ホーム", headerLeft: () => false }} />
      <Stack.Screen name="home/collection/index" options={{ title: "コレクション" }} />
      <Stack.Screen name="home/mailSelect" options={{ title: "メール問題選択" }} />
      <Stack.Screen name="home/smsSelect" options={{ title: "SMS問題選択" }} />
      <Stack.Screen name="home/question4/call" options={{ title: "電話問題" }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
