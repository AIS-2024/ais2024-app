/** @format */
// 誤字の間違いあり //

import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import ChangeButton from "../../../components/ChangeButton";
import Address from "../../../components/Address";
import Footer from "../../../components/Footer";
import { auth, db } from "../../../config";
import { doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FooterButton from "../../../components/FooterButton";

const handlePress = (): void => {
  router.push("/home/question8/goji-ans");
};

export default function App() {
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // モーダルの表示非表示を管理
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });


  const buttonRef = useRef<View>(null);
  const steps = [
    {
      title: "問題について",
      description: "問題の回答をスタートするには！ボタンを押します。",
      target: buttonRef,
    }
  ]
  useEffect(() => {
    const timeout = setTimeout(() => {
      const checkFirstVisit = async () => {
        const user = auth.currentUser;
        if (user) {
          const key = `hasVisitedQuestion_${user.uid}`
          const hasVisited = await AsyncStorage.getItem(key);
          if (!hasVisited) {
            // 初回訪問の場合、モーダルを表示
            setModalVisible(true);
            showTooltip();
            await AsyncStorage.setItem(key, 'true');
          }
        }
      };
      checkFirstVisit();
    }, 200);

    return () => clearTimeout(timeout); // クリーンアップ
  }, []);

  //measureTargetでアイコンの位置を取得
  const measureTarget = async (targetRef: React.RefObject<View>) => {
    return new Promise<{ top: number; left: number }>((resolve, reject) => {
      if (targetRef.current) {
        // UIManager.measureInWindowを使用して位置を取得
        targetRef.current.measureInWindow((x, y, width, height) => {
          resolve({ top: y, left: x + width / 2 });
        });
      } else {
        reject("Invalid targetRef");
      }
    });
  };

  //矢印の位置をarrowPositionに設定
  const showTooltip = async () => {
    try {
      const currentStep = steps[step];

      if (!currentStep?.target) {
        console.warn("Target ref is undefined for step:", step);
        return;
      }
      const position = await measureTarget(currentStep.target);
      setArrowPosition(position);
    } catch (error) {
      console.error("Error measuring target:", error);
    }
  };


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
    <View style={styles.container}>
      <ScrollView>
        <Address />
        <View style={styles.header}>
          <Text style={styles.title}>
            おめでとう五座います！当選しました貴方は！
          </Text>
        </View>

        <View style={styles.infoLink}>
          <Text style={styles.linkText}>注文履歴</Text>
          <Text>｜</Text>
          <Text style={styles.linkText}>アカウントサービス</Text>
          <Text>｜</Text>
          <Text style={styles.linkText}>Amazon.co.jp</Text>
        </View>

        <Text style={{ textAlign: "right" }}>ご注文の確認</Text>

        <View style={styles.infoLink}>
          <Text>注文番号：</Text>
          <Text style={styles.linkText}>508-8864920-6546310</Text>
        </View>

        <View style={styles.mail}>
          <Text>{username}様</Text>
          <Text style={styles.mainText}>招待者に選ばれました。</Text>
          <Text>
            招待リクエストをお送りいただき、ありがとうございます。お客様は、招待販売の招待者にえらばれました。当選した商品をご購入いただけます。
            {"\n"}
            {"\n"}
            本招待メールによる注文の有効期限は、本招待メールが
          </Text>
          <Text style={styles.linkText}>Amazon.co.jp</Text>
          <Text>から発信されてから72時間以内です。</Text>

          <View style={styles.button}>
            <TouchableOpacity style={styles.buttonText}>
              <Text style={styles.buttonText}>商品を見る</Text>
            </TouchableOpacity>
          </View>

          <Text>
            商品を購入するには、「商品を見る」ボタンをクリックして商品ページへアクセスし、商品を注文してください、
            {"\n"}
            {"\n"}
            商品の発送準備が完了したら、お知らせいたします。
          </Text>
          <Footer />
        </View>
      </ScrollView>
      <FooterButton ref={buttonRef} label="回答する" onPress={handlePress} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          {/* 矢印 */}
          <View
            style={[
              styles.arrow,
              {
                top: arrowPosition.top - 45, // 矢印の位置（ターゲットボタンの下部に合わせる）
                left: arrowPosition.left - 15, // 矢印の中央をターゲットに合わせる
              },
            ]}
          />

          {/* ダイアログ */}
          <View style={styles.dialog}>
            <Text style={styles.dialogText}>{steps[step]?.title}</Text>
            <Text style={styles.dialogText}>{steps[step]?.description}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>閉じる</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#EEE",
    height: 155,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  infoLink: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 5,
  },
  linkText: {
    color: "#007AFF",
  },
  mail: {
    paddingHorizontal: 20,
  },
  mainText: {
    fontSize: 36,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#FF9500",
    width: 150,
    height: 35,
    marginTop: 80,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    marginVertical: "auto",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20
  },
  dialog: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  arrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 40,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
  },
});
