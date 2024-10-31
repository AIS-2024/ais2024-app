/** @format */

import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Home = () => {
  return (
    <>
      <Text>Homeページ</Text>
      <Link href="./question/goji">問題ページ1</Link>
      <Link href="./question/nottori">問題ページ2</Link>
      <Link href="./question/question1">問題ページ3</Link>
      <Link href="./question/question2">問題ページ4</Link>
    </>
  );
};

export default Home;
