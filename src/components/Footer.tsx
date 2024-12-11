/** @format */
import { router } from "expo-router"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react";

const Footer = () => {
    return (
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>報告</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>移動</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>返信・転送</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>削除</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>その他</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      navButton: {
        alignItems: 'center',
      },
      navButtonText: {
        fontSize: 14,
        color: '#007AFF',
      }
})

export default Footer
