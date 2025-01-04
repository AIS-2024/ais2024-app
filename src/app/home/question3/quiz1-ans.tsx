/** @format */
// 正しい例 //

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import ChangeButton from "../../../components/ChangeButton";
import { AntDesign } from "@expo/vector-icons";
import Address from "../../../components/Address";
import AnswerButton from "../../../components/AnswerButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../../config";
import FooterButton from "../../../components/FooterButton";

const quiz1 = () => {
  const router = useRouter();

  const handlepressCorrect = () => {
    router.push("/home/correct?questionNumber=8"); // クエリパラメータを渡す
  };
  const handlepressIncorrect = () => {
    router.push("/home/incorrect");
  };

  const [step, setStep] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // モーダルの表示非表示を管理
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });


  const buttonRef = useRef<View>(null);
  const steps = [
    {
      title: "解答について",
      description: "画面に表示されているメールには詐欺メールに書かれているような表現が含まれている可能性があります。\n怪しいと感じる表現が含まれる部分をタップして解答してください。\n特に怪しいと感じる部分がなければ右下の「間違い無し」ボタンを押してください。問題がないメールの場合もあります。",
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

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Address />
        </TouchableOpacity>

        <TouchableOpacity style={styles.mailTitleContent} onPress={handlepressIncorrect}>
          <Text style={styles.mailTitle}>
            【重要】Amazon.co.jp: お支払い方法の設定を更新してください
          </Text>
        </TouchableOpacity>

        <View>
          <View style={styles.divider} />
          <TouchableOpacity onPress={handlepressIncorrect}>
            <Image
              source={require("../../../../assets/amazonLogo.png")}
              style={styles.amazonLogo}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={handlepressIncorrect}>
              <Text style={styles.mailFirst}>
                この度はAmazon.co.jpをご利用いただき、ありがとうございます。{" "}
                {"\n"} {"\n"}
                ご注文の商品の出荷に際し、以下の情報が不足しているため、出荷が遅延する可能性がございます。
                {"\n"}
                {"\n"}
                ・住所{"\n"}
                ・電話番号{"\n"}
                ・配達希望日{"\n"}
                {"\n"}
                恐れ入りますが、以下のリンクより必要な手続きを入力していただき、更新手続きをお願いいたします。
                {"\n"}
              </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.mailLink}>
                ----------------------------------------{"\n"}
                <TouchableOpacity onPress={handlepressIncorrect}>
                  <Text style={styles.link} onPress={handlepressIncorrect}>
                    情報更新ページ
                  </Text>
                </TouchableOpacity>
                {"\n"}
                ----------------------------------------{"\n"}
              </Text>
            </View>
            <TouchableOpacity onPress={handlepressIncorrect}>
              <Text style={styles.mailSecond}>
                ご入力いただいた情報は、厳重に保管し、プライバシーの保護に努めております。
                {"\n"}
                ご不明な点がございましたら、カスタマーサービスへお問い合わせください。
                {"\n"}
                今後ともAmazon.co.jpへのご愛顧のほどよろしくお願いいたします。
                {"\n"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer} onPress={handlepressIncorrect}>
              <Text>Amazon.co.jp</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      <FooterButton label="まちがいなし" onPress={handlepressCorrect} />
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
  },
  mailTitleContent: {
    backgroundColor: "#F5F5F5",
    height: 122,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  mailTitle: {
    fontSize: 20,
  },
  amazonLogo: {
    width: 200,
  },
  fromContent: {
    flexDirection: "row",
    padding: 20,
  },
  iconContent: {
    width: 70,
    height: 70,
    backgroundColor: "#3988A1",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLetter: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  fromAmazon: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
  },
  to: {
    fontSize: 15,
    paddingLeft: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#696969",
  },
  mailFirst: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  mailLink: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  mailSecond: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  footer: {
    paddingHorizontal: 20,
  },
  link: {
    color: "#438FC6",
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

export default quiz1;
