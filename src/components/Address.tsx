import React from 'react';
import { View, Text, StyleSheet } from "react-native"

const Address = () => {
    return (
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View style={styles.senderInfo}>
            <Text style={styles.senderText}>差出人：amazon.co.jp</Text>
            <Text style={styles.recipientText}>宛先：〇〇</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      avatarText: {
        fontSize: 24,
        fontWeight: 'bold',
      },senderInfo: {
        flexDirection: 'column',
    },
    senderText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    recipientText: {
      fontSize: 14,
      color: '#555',
    }
})

export default Address
