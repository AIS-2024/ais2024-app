import React from "react"
import { View, Text, StyleSheet } from "react-native"

const collectionTop = () => {
    return (
        <View style={styles.topContainer}>
            <Text style={styles.topText}>コレクション</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
topContainer: {
    backgroundColor: "#3F54C7",
    height: "10%",
    width: "100%",
    justifyContent: "center", 
    alignItems: "center",
  },
  topText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
})

export default collectionTop