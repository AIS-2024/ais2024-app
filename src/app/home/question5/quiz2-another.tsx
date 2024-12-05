// フィッシングの別バージョン //
// 回答はhttps://bit.ly/.. //
import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react';
import { useRouter } from 'expo-router';
import ChangeButton from "../../../components/ChangeButton";
import { AntDesign } from "@expo/vector-icons";
import Address from "../../../components/Address";

const Quiz2 = () => {
    const router = useRouter();

    const handlePress = () => {
        router.push('/home/question5/quiz2');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.message1}>
                    <View style={styles.messageBox1}>
                        <View style={styles.message1Container}>
                            <View></View>
                            <View>
                            <Text>【重要】Amazonアカウントが一時的に停止されています{"\n"}
                            あなたのアカウントは私たちの利用規約に違反しています。 Amazon.co.jpアカウントは一時的に停止されています。{"\n"}
理由: お支払い情報を更新できませんでした{"\n"}
再度アカウントを有効にするには、以下のリンクと手順を開いて、このアカウントがあなたのアカウントであることを確認してください。{"\n"}
                            </Text>
                            <Text style={styles.link}>https://bit.ly/..</Text>
                            <Text>Amazon.co.jp どうぞよろしくお願いいたします。</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <ChangeButton>
                <AntDesign name='exclamation' size={40} />
            </ChangeButton>
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
