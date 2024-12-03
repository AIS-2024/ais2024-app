/** @format */

import { Stack } from "expo-router";
import React from "react";
import LogOutButton from "../components/LogOutButton";

const Layout = () => {
  return (
    
      <Stack screenOptions={({route})=>({
            headerRight: () => route.name.startsWith("home/")?<LogOutButton />:null,
            headerStyle:{
                //backgroundColor:'#000000'等でヘッダーのスタイルを調整できる
            },
            headerTintColor:'#000000', //ヘッダーの文字の色
             headerTitleStyle:{
                 fontSize:22,
                 fontWeight:'bold'
             }
        })}>
        <Stack.Screen name="index" options={{ title: "スタート" ,headerLeft:()=> false}} />
        <Stack.Screen name="auth/Login" options={{ title: "ログイン" }} />
        <Stack.Screen name="auth/SignUp" options={{ title: "新規登録" }} />
        <Stack.Screen name="home/home" options={{title:"ホーム",headerLeft: () => false}} />
        <Stack.Screen
          name="home/collection/index"
          options={{ title: "コレクション" }}
        />
        
        {/* <Stack.Screen name="home" options={{ headerShown: false }} /> */}
      </Stack>
    
  );
};

export default Layout;
