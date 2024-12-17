import { router } from "expo-router"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler"
import BackButton from "../../components/BackButton"

const handlePress1 = () : void => {
    router.push("/home/question5/quiz2")
}
const handlePress2 = () : void => {
    router.push("/home/question5/quiz2-another")
}

const smsSelect = () => {
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
                </ScrollView>
                <BackButton />

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
    mailTitle:{
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
    }
})

export default smsSelect
