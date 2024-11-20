import { router } from "expo-router"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const handlePress = () => {
    router.back()
}

const BackButton = () => {
    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>もどる</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button: {
        backgroundColor: "#ADD6E8",
        height: 80,
        width: 80,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8},
        right: 40,
        bottom: 40,
        borderRadius: 20,
        position: 'absolute',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: '#fff',
        fontSize: 25,
    }
})

export default BackButton