/** @format */

import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Home = () => {
  return (
    <>
      <Text>Homeページ</Text>
      <Link href="home/question/goji">問題ページ1</Link>
      <Link href="home/question/nottori">問題ページ2</Link>
      <Link href="home/question/question1call">問題ページ3</Link>
      <Link href="home/question/question2mailaddress">問題ページ4</Link>
      <Link href="home/question/quiz1">問題ページ5</Link>
      <Link href="home/question/quiz2">問題ページ6</Link>
      <Link href="home/question/spot">問題ページ7</Link>
      <Link href="home/question/rightspot">問題ページ8</Link>
      <Link href="home/question/call">問題ページ9</Link>
    </>
  );
};

export default Home;
