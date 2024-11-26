import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { registerRootComponent } from "expo";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const correct = () => {
    const router = useRouter();
  
    const handlePress = () => {
      router.push("/app/login");
    };
    return (
      <ScrollView style={styles.all}>
        <View>
            <View style = {styles.correctContent}>
                <Text style={styles.correct}>正解！</Text>
            </View>
            <View style = {styles.explainContent}>
                <View>
                    <Text style = {styles.explain}>解説</Text>
                </View>
                <View>
                    <Text style = {styles.explainLetter}>解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容解説の内容</Text>
                </View>
                <View style = {styles.backButton}>
                    <Text style = {styles.back}>ホームに戻る</Text>
                </View>
            </View>
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
     all: {
        flex: 1,
        backgroundColor: "#F9F7E8"
    },
    correctContent:{
        paddingTop:70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom:20
    },
    correct:{
        fontSize:96,
        color:"#D42727"
    },
    explainContent:{
        alignSelf:'center',
        backgroundColor:"#ffffff",
        width:310,
        height:500,
        padding:10,
        justifyContent: "space-between"
    },
    explain:{
        fontSize:40,
        color:"#3F54C7",
        paddingBottom:20,
    },
    explainLetter:{
        fontSize:20

    },
    backButton:{
        backgroundColor:"#FFB74B",
        alignSelf:'center',
        padding: 10,
        marginBottom:20,
        borderRadius: 50,
    },
    back:{
        fontSize:24
    } 
  })

  export default correct;