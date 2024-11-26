import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { registerRootComponent } from "expo";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const incorrect = () => {
    const router = useRouter();
  
    const handlePress = () => {
      router.push("/app/login");
    };
    return (
      <ScrollView style={styles.all}>
        <View>
            <View>
                <Text style={styles.correct}>不正解...</Text>
            </View>
            <View>
                
                <View style = {styles.backButton}>
                    <Text style = {styles.back}>もう一度挑戦する</Text>
                </View>
            </View>
            <View style = {styles.homeButton}>
                    <Text style = {styles.home}>ホームに戻る</Text>
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

    correct:{
        alignSelf:'center',
        paddingTop:50,
        fontSize:96,
        color:"#3F54C7"
    },
    backButton:{
        backgroundColor:"#FF7B4B",
        alignSelf:'center',
        marginTop:40,
        padding: 10,
        marginBottom:20,
        borderRadius: 50,
    },
    back:{
        fontSize:24
    },
    homeButton:{
        backgroundColor:"#FFB74B",
        alignSelf:'center',
        padding: 10,
        marginBottom:20,
        borderRadius: 50,
    },
    home:{
        fontSize:24
    }
  })

  export default incorrect;