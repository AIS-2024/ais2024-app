/** @format */

import React from "react";
import { Link, Redirect } from "expo-router";
import { Text } from "react-native";

const Index = () => {
  return (
    <>
      <Text>Indexページ</Text>
      <Link href="./auth/SignUp">新規登録ページに移動</Link>
      <Link href="./auth/Login">ログインページに移動</Link>
    </>
  );
};

export default Index;