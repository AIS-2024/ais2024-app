// フィッシングの例 //
// 回答は「本日中にご確認いただけない場合、法的な手続きをとることがあります。」脅しの文章//
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';
import { useRouter } from 'expo-router';
import AnswerButton from "../../../components/AnswerButton";

const Quiz2 = () => {
    const router = useRouter();

    const handlepressCorrect = () => {
        router.push("/home/correct");
      };
    const handlepressIncorrect = () => {
        router.push("/home/incorrect");
      };
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.message1}>
                    <View style={styles.messageBox1}>
                        <View style={styles.message1Container}>
                            <View>
                                <TouchableOpacity onPress={handlepressIncorrect}>
                                    <Text>支払いの問題でAmazonがロックされました。</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handlepressIncorrect}>
                                    <Text style={styles.link}>https://www.amazon.co.jp/</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handlepressCorrect}>
                                    <Text>本日中にご確認いただけない場合、法的な手続きをとることがあります。</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <AnswerButton label='間違い無し' onPress={handlepressIncorrect} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        paddingBottom: 20,
        height:120,
        alignItems: "center",
        backgroundColor:'#F5F5F5',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 40
    },
    headerContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    icon:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D9D9D9',
        width:60,
        borderRadius:60,
    },
    iconLetter:{
        color:'#FFFFFF',
        fontSize:40
    },
    fromAmazon:{
        paddingTop:5,
    },
    message1: {
        marginVertical: 20,
        paddingHorizontal:30,
        paddingRight:100
    },
    messageBox1: {
        backgroundColor: "#D9D9D9",
        padding: 15,
        borderRadius: 10,
    },
    message1Container: {
        marginVertical: 10,
        flexDirection:'row'
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
    },
});

export default Quiz2;
