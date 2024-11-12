/** @format */

import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Home = () => {
  return (
    <>
      <Text>Homeページ</Text>
      <Link href="home/question1/nottori">問題ページ1</Link>
      <Link href="home/question2/question2">問題ページ2</Link>
      <Link href="home/question3/quiz1">問題ページ3</Link>
      <Link href="home/question4/">問題ページ4</Link>
      <Link href="home/question5/quiz2">問題ページ5</Link>
      <Link href="home/question6/question1">問題ページ6</Link>
      <Link href="home/question7/">問題ページ7</Link>
      <Link href="home/question8/goji">問題ページ8</Link>
      <Link href="home/collection/">コレクション</Link>
    </>
  );
};

export default Home;
