/** @format */

import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Link, Redirect,router } from "expo-router";
import { Text } from "react-native";
import { auth } from "../config";
import { useEffect } from "react";

const Index = () => {
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user!==null){
            router.replace("/home/home")
        }
    })
},[])
  return (
    <>
      <Text>Indexページ</Text>
      <Link href="./auth/SignUp">新規登録ページに移動</Link>
      <Link href="./auth/Login">ログインページに移動</Link>
    </>
  );
};

export default Index;