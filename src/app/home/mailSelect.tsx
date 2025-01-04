import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import BackButton from "../../components/BackButton"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { auth } from "../../config"

const handlePress1 = (): void => {
    router.push("/home/question1/nottori")
}
const handlePress2 = (): void => {
    router.push("/home/question8/goji")
}
const handlePress3 = (): void => {
    router.push("/home/question2/amazn")
}
const handlePress4 = (): void => {
    router.push("/home/question3/quiz1")
}
const handlePress5 = (): void => {
    router.push("/home/question7/rightspot")
}
const handlePress6 = (): void => {
    router.push("/home/question6/question1")
}

const mailSelect = () => {
    const [modalVisible, setModalVisible] = useState(false); // モーダルの表示非表示を管理

    useEffect(() => {
        const checkFirstVisit = async () => {
            const user = auth.currentUser;
            if (user) {
                const hasVisited = await AsyncStorage.getItem(user.uid);
                if (!hasVisited) {
                    // 初回訪問の場合、モーダルを表示
                    setModalVisible(true);
                    await AsyncStorage.setItem(user.uid, 'true');
                }
            }
        };
        checkFirstVisit();
    }, []);
    return (
        <GestureHandlerRootView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>全受信</Text>
                </View>

                <TouchableOpacity onPress={handlePress1} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle}>Amazon.co.jpでのご注文</Text>
                        <Text style={styles.text} numberOfLines={2}>誰かがあなたのAmazonアカウントを使用して別のモバイルデバイスからこの注文を購入しようとしました。Amazonのアカウントセキュリティポリシーに従い、Amazonアカウントを凍結しました。</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress2} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle}>招待者に選ばれました。</Text>
                        <Text style={styles.text} numberOfLines={2}>招待リクエストをお送りいただき、ありがとうございます。お客様は、招待販売の招待者にえらばれました。当選した商品をご購入いただけます。本招待メールによる注文の有効期限は、本招待メールがAmazon.co.jpから発信されてから72時間以内です。</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress3} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazn.co.jp</Text>
                        <Text style={styles.mailTitle}>【重要】Amazon株式会社からの緊急のご連絡</Text>
                        <Text style={styles.text} numberOfLines={2}>あなたのAmazonアカウント：○○○@sample.jp、異常なログインが見つかり、配送先住所が変更されました！</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress4} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle} numberOfLines={1}>【重要】Amazon.co.jp: お支払い方法の設定を更新してください</Text>
                        <Text style={styles.text} numberOfLines={2}>この度はAmazon.co.jpをご利用いただき、ありがとうございます。</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress5} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle} numberOfLines={1}>300円割引が、Amazonの受け取りスポット利用時</Text>
                        <Text style={styles.text} numberOfLines={2}>ぜひAmazonの受け取りスポットをご利用ください。¥2000以上のお買い物をすると、300円割引をご利用いただけます。</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress6} style={styles.mailBorder2}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle}>Amazon情報の更新</Text>
                        <Text style={styles.text} numberOfLines={2}>クレジットカード情報の更新、追加などにつきまして、以下の手順をご確認ください。アカウントサービスからAmazon情報を管理するページにアクセスして、更新してください。</Text>
                    </View>
                </TouchableOpacity>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.dialog}>
                            <Text style={styles.dialogText}>問題選択画面について</Text>
                            <Text style={styles.dialogText}>一覧からいずれかのメール（問題）をタップして選択します。</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.closeButtonText}>閉じる</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </GestureHandlerRootView>
    )

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#ffffff"
    },
    title: {
        marginLeft: 30,
        paddingTop: 20,
        paddingBottom: 10,
        width: "100%"
    },
    titleText: {
        fontWeight: "bold",
        marginLeft: -10,
        fontSize: 30,
        color: "#000000"
    },
    from: {
        alignSelf: "flex-start",
        paddingTop: 10,
        paddingBottom: 3,
        fontWeight: "bold",
        fontSize: 18
    },
    mailTitle: {
        fontSize: 16,
    },
    mailBorder: {
        marginLeft: 30,
        alignItems: "flex-end",
        borderColor: "#E8E8E8",
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        width: "100%",
    },
    mailBorder2: {
        marginLeft: 30,
        alignItems: "flex-end",
        borderColor: "#E8E8E8",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: "100%",
    },
    mailContainer: {
        alignSelf: "flex-start",
        width: "90%",
        paddingBottom: 10
    },
    text: {
        fontSize: 16,
        color: '#808080',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    dialog: {
        backgroundColor: "white",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    dialogText: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        padding: 10,
        backgroundColor: "blue",
        borderRadius: 5,
    },
    closeButtonText: {
        color: "white",
        fontWeight: "bold",
    },
})

export default mailSelect
