import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from "react-native"
import { auth, db } from '../config';

const Address = () => {
  const [username, setUsername] = useState("");


  const fetchUsername = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.warn("User not logged in.");
      return null;
    }

    const userDoc = doc(db, "userInfo", user.uid);
    try {
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        return docSnap.data().name;
      } else {
        console.warn("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    return null;
  };

  useEffect(() => {
    const loadUsername = async () => {
      const name = await fetchUsername();
      setUsername(name || "user");
    };
    loadUsername();
  }, []);
    return (
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View style={styles.senderInfo}>
            <Text style={styles.senderText}>差出人：amazon.co.jp</Text>
            <Text style={styles.recipientText}>宛先：{username}</Text>
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
