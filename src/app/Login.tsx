/** @format */

import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Login = () => {
  return (
    <>
      <Text>Loginページ</Text>
      <Link replace href="./home">
        Homeページに移動
      </Link>
    </>
  );
};

export default Login;
