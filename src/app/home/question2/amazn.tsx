import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Address from "../../../components/Address";
import { auth, db } from "../../../config";
import { doc, getDoc } from "firebase/firestore";
import AnswerButton from "../../../components/AnswerButton";
import ChangeButton from "../../../components/ChangeButton";
import { AntDesign } from "@expo/vector-icons";

const handlePress = () => {
  router.push("/home/question2/amazn-ans");
};

const Question2 = () => {
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

  const [useraddress, setUseraddress] = useState("");


  const fetchUseraddress = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.warn("User not logged in.");
      return null;
    }

    const userDoc = doc(db, "userInfo", user.uid);
    try {
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        return docSnap.data().mail;
      } else {
        console.warn("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    return null;
  };

  useEffect(() => {
    const loadUseraddress = async () => {
      const address = await fetchUseraddress();
      setUseraddress(address || "user");
    };
    loadUseraddress();
  }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View style={styles.senderInfo}>
            <Text style={styles.senderText}>差出人：amazn.co.jp</Text>
            <Text style={styles.recipientText}>宛先：{username}</Text>
          </View>
        </View>
          </TouchableOpacity>

          {/* <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handlepressIncorrect}>
              <Text style={styles.header}>【重要】Amazon株式会社からの緊急のご連絡</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlepressCorrect}>
              <Text style={styles.title}>amazn.co.jp</Text>
            </TouchableOpacity> */}
            <Text style={styles.underline}>___________________________________________</Text>
        {/* </View> */}


        <View style={styles.mailContainer}>
          <TouchableOpacity>
            <Text style={styles.sectionHeader}>【重要】カスタマセンターからのご案内</Text>

            <Text>あなたのAmazonアカウント：{useraddress}、異常なログインが見つかり、配送先住所が変更されました！</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.address}>
            <Text>ログイン日時：2024-10-05, 4:23:31</Text>
            <Text>IPアドレス：[000.0.0.00]</Text>
            <Text>装備：iphone8 IOS 18.0.1</Text>
            <Text>場所：水戸市</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>つきましては、お客様の情報を保護するために次の措置を講じました</Text>

            <Text>--お客様のアカウントのパスワードを無効にいたしました</Text>
            <Text>--不正アクセスによって行われた変更につきましては、無効にいたしました</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.warning}>お客様のアカウントに再度有効化していただけるようになります。次のリンクをクリックして指示に従ってください。</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>アカウント管理に移動</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.footerContainer}>
            <Text style={styles.underline}>___________________________________________</Text>
            <Text>Copyright ⓒ 2020 Amazon Inc. All rights reserved</Text>
            <Text>発行元：Amazon株式会社</Text>
          </TouchableOpacity>

        </View>
        <ChangeButton>
        <AntDesign name='exclamation' size={40} onPress={handlePress} />
      </ChangeButton>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 80,
    alignItems: "center"
  },
  headerContainer: {
    alignItems: "center",
    // marginBottom: 10,
    // paddingTop: 20,
    alignSelf: "flex-start"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  underline: {
    marginBottom: 10,
  },
  mailContainer: {
    alignItems: "flex-start",
    gap: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf:"center"
  },
  address: {
    marginTop: 15,
    marginBottom: 15
  },
  text: {
    marginBottom: 5,
    textAlign: "left",
  },
  group: {
    marginBottom: 10,
  },
  warning:{
    marginBottom: 15
  },
  button: {
    padding: 10,
    backgroundColor: "transparent",
    borderColor: "#62AEF4",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    marginTop:40,
    marginBottom: 40,
  },
  buttonText: {
    color: "#62AEF4",
    textAlign: "center",
    fontSize: 16,
  },
  footerContainer: {
    alignItems: "center",
    alignSelf: "center",

  },
  navButton: {
    alignItems: 'center',
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

export default Question2
