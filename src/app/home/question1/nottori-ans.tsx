/** @format */

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Address from "../../../components/Address";
import Footer from "../../../components/Footer";
import AnswerButton from "../../../components/AnswerButton";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FooterButton from "../../../components/FooterButton";

const router = useRouter()

const handlePress = (): void => {
  router.push("/home/correct?questionNumber=0"); // クエリパラメータを渡す
};

const handlePress1 = (): void => {
  router.push("/home/incorrect");
};

const Nottori = () => {
  const [username, setUsername] = useState("");

  const [step, setStep] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // モーダルの表示非表示を管理
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });


  const buttonRef = useRef<View>(null);
  const steps = [
    {
      title: "解答について",
      description: "画面に表示されているメールには詐欺メールに書かれているような表現が含まれている可能性があります。\n怪しいと感じる表現が含まれる部分をタップして解答してください。\n特に怪しいと感じる部分がなければ画面下の「まちがいなし」ボタンを押してください。問題がないメールの場合もあります。",
      target: buttonRef,
    }
  ]
  useEffect(() => {
    const timeout = setTimeout(() => {
      const checkFirstVisit = async () => {
        const user = auth.currentUser;
        if (user) {
          const key = `hasVisitedAnswer_${user.uid}`
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
      <ScrollView >
        <TouchableOpacity onPress={handlePress1}>
          <Address />
        </TouchableOpacity>
        <TouchableOpacity style={styles.header} onPress={handlePress1}>
          <Text style={styles.title}>
            Amazon.co.jpでのご注文{"\n"}
            508-8864920-6546310（1点）
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoLink} onPress={handlePress1}>
          <Text style={styles.linkText}>注文履歴</Text>
          <Text>｜</Text>
          <Text style={styles.linkText}>アカウントサービス</Text>
          <Text>｜</Text>
          <Text style={styles.linkText}>Amazon.co.jp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoLink} onPress={handlePress1}>
          <Text>注文番号：</Text>
          <Text style={styles.linkText}>508-8864920-6546310</Text>
        </TouchableOpacity>

        <View style={styles.mail}>
          <TouchableOpacity onPress={handlePress1}>
            <Text>{username}様</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress1}>
            <Text style={styles.mainBlack}>
              誰かがあなたのAmazonアカウントを使用して別のモバイルデバイスからこの注文を購入しようとしました。Amazonのアカウントセキュリティポリシーに従い、Amazonアカウントを凍結しました。
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.mainRed}>
              ◆アカウントが盗まれる危険性があります。この注文を一度も購入したことが無い場合は、24時間以内に以下のリンクをクリックして、この注文をキャンセル、Amazonアカウントを復元してください
            </Text>
          </TouchableOpacity>

          <View style={styles.order}>
            <View style={styles.orderInner}>
              <TouchableOpacity onPress={handlePress1}>
                <Text style={styles.category}>お届け予定：</Text>
                <Text style={styles.categoryText}>水曜日, 06/07{"\n"}</Text>
                <Text style={styles.category}>{"\n"}配送オプション：</Text>
                <Text style={styles.categoryText}>お急ぎ便</Text>
              </TouchableOpacity>
              <View style={styles.button}>
                <TouchableOpacity style={styles.buttonText} onPress={handlePress1}>
                  <Text style={styles.buttonText}>この注文をキャンセルする</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.orderInner} onPress={handlePress1}>
              <Text style={styles.category}>お届け先：</Text>
              <Text style={styles.categoryText}>
                username 様{"\n"}
                〒100-8111{"\n"}
                東京都千代田区{"\n"}
                千代田1-1{"\n"}
              </Text>
              <Text style={styles.categoryText}>{"\n"}注文合計</Text>
              <Text style={styles.categoryTextRight}>￥{"\n"}98,300</Text>
              <Text>{"\n"}支払方法</Text>
              <Text>クレジットカード：</Text>
              <Text style={styles.textRight}>￥{"\n"}98,300</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </ScrollView>
      <FooterButton ref={buttonRef} label="まちがいなし" onPress={handlePress1} />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 100,
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
  mainBlack: {
    paddingVertical: 10,
  },
  mainRed: {
    fontSize: 18,
    paddingVertical: 10,
    color: "#FF3B30",
  },
  button: {
    backgroundColor: "#FF9500",
    width: 150,
    height: 35,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 12,
  },
  order: {
    backgroundColor: "#EEE",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderInner: {
    flex: 1,
    marginHorizontal: 10,
  },
  category: {
    color: "#666",
  },
  categoryText: {
    fontWeight: "bold",
  },
  categoryTextRight: {
    fontWeight: "bold",
    textAlign: "right",
  },
  textRight: {
    textAlign: "right",
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

export default Nottori;
