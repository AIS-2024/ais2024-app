import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from 'react';
import { useRouter } from 'expo-router';
import ChangeButton from "../../../components/ChangeButton";
import { AntDesign } from "@expo/vector-icons";

const Quiz2 = () => {
    const router = useRouter();

    const handlePress = () => {
        router.push('/home/question/spot');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <View style={styles.icon}>
                        <Text style={styles.iconLetter}>A</Text>
                        </View>
                        <Text style={styles.fromAmazon}>Amazon</Text>
                    </View>
                </View>
                <View style={styles.message1}>
                    <View style={styles.messageBox1}>
                        <View style={styles.message1Container}>
                            <View></View>
                            <View>
                            <Text>支払いの問題でAmazonがロックされました。</Text>
                            <Text style={styles.link} onPress={handlePress}>https://bit.ly/..</Text>
                            <Text>本日中にご確認いただけない場合、法的な手続きをとることがあります。</Text>
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
