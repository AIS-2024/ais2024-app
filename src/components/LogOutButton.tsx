import React, { useState } from "react";
import { TouchableOpacity,StyleSheet,Text, Alert, ActivityIndicator, Pressable, View } from "react-native";
import { signOut } from "firebase/auth";
import { router } from "expo-router";
import { auth } from "../config";

const LogOutButton=()=>{

    const handlePress=()=>{
        signOut(auth).then(()=>{
            router.replace("/");
        }).catch((error)=>{
            Alert.alert('ログアウトに失敗しました')
        });
                
    }

    return(
        <TouchableOpacity onPressIn={handlePress} style={styles.logoutButton}>
            <Text style={styles.text}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    logoutButton: {
        marginRight: 10, // ヘッダー右端からの余白
        padding: 10,
        borderRadius: 5,
        backgroundColor:'orange',
        zIndex: 10,
      },
    text:{
        fontSize:12,
        lineHeight:24,
        color:'#000000'
    }
})

export default LogOutButton