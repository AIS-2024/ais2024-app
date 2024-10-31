/** @format */

import { Stack } from "expo-router";
import React from "react";

const Index = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "ホーム" }} />
        <Stack.Screen name="Login" options={{ title: "ログイン" }} />
        <Stack.Screen name="SignUp" options={{ title: "新規登録" }} />
        <Stack.Screen
          name="collection/index"
          options={{ title: "コレクション" }}
        />
        <Stack.Screen
          name="collection/CollectionDetail"
          options={{ title: "コレクション" }}
        />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Index;
