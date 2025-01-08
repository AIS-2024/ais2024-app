import { router } from "expo-router"
import React, { useEffect, useState } from "react"
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import BackButton from "../../components/BackButton"
import { auth } from "../../config"
import AsyncStorage from "@react-native-async-storage/async-storage"

const handlePress1 = (): void => {
    router.push("/home/question5/quiz2")
}
const handlePress2 = (): void => {
    router.push("/home/question5/quiz2-another")
}

const smsSelect = () => {
    const [modalVisible, setModalVisible] = useState(false); // モーダルの表示非表示を管理

    useEffect(() => {
        const checkFirstVisit = async () => {
            const user = auth.currentUser;
            if (user) {
                const key = `hasVisitedSMS_${user.uid}`
                const hasVisited = await AsyncStorage.getItem(key);
                if (!hasVisited) {
                    // 初回訪問の場合、モーダルを表示
                    setModalVisible(true);
                    await AsyncStorage.setItem(key, 'true');
                }
            }
        };
        checkFirstVisit();
    }, []);
    return (
        <GestureHandlerRootView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>メッセージ</Text>
                </View>

                <TouchableOpacity onPress={handlePress1} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle}>昨日</Text>
                        <Text style={styles.text} numberOfLines={2}>支払いの問題でAmazonがロックされました。</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePress2} style={styles.mailBorder}>
                    <View style={styles.mailContainer}>
                        <Text style={styles.from}>Amazon.co.jp</Text>
                        <Text style={styles.mailTitle}>昨日</Text>
                        <Text style={styles.text} numberOfLines={2}>【重要】Amazonアカウントが一時的に停止されています</Text>
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
        flex: 1,
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

export default smsSelect
