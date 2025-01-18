/** @format */
// 正しい例 //

import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";
import Address from "../../../components/Address";
import AnswerButton from "../../../components/AnswerButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../../config";
import FooterButton from "../../../components/FooterButton";

const handlepressCorrect = () => {
  router.push("/home/correct?questionNumber=5"); // クエリパラメータを渡す
};
const handlepressIncorrect = () => {
  router.push("/home/incorrect");
};

const Question1 = () => {
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
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Address />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            クレジットカード情報の更新、追加などにつきまして、以下の手順をご確認ください。アカウントサービスからAmazon情報を管理するページにアクセスして、更新してください。
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            また、Amazonプライム期間が終了したら、お急ぎ便無料やプライム・ビデオ見放題　などのプライム会員特典のご利用ができなくなります。（主なプライム会員特典を確認するには{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.link}>こちら </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            をクリックしてください）。お早めにお手続きの程よろしくお願い致します
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.main}>
            継続してプライム会員特典をお楽しみいただきたい場合は、｢Amazonプライム会員情報の管理｣ページににて｢会員資格を帰属する｣をクリックしてください。
          </Text>
        </TouchableOpacity>

        <Text style={styles.button} onPress={handlepressIncorrect}>会員情報の管理ページで確認</Text>

        <TouchableOpacity onPress={handlepressIncorrect}>
          <Text style={styles.alert}>
            なお、72時間以内にご確認がない場合、誠に申し訳ございません、お客様の安全のため、アカウントの利用制限をさせていただきますので、あらかじめご了承ください。
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressCorrect}>
          <Text style={styles.inquiry}>
            アカウントに登録のEメールアドレスにアクセスできない場合
          </Text>

          <Text style={styles.inquiry}>
            お問い合わせ：Amazonカスタマーサービス。<Text style={styles.link}>(070-1234-5678)</Text>
          </Text>

          <Text style={styles.main}>
            Amazonサービスをご利用いただき、ありがとうございました。
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>Amazon.co.jp　カスタマーサービス<Text style={styles.footer}>Amazon.co.jp　カスタマーサービス</Text></TouchableOpacity>
      </ScrollView>
      <FooterButton ref={buttonRef} label="まちがいなし" onPress={handlepressIncorrect} />
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
    padding: 25,
    backgroundColor: "#ffffff",
    flex: 1,
    paddingBottom: 100
  },
  main: {
    marginBottom: 20,
  },
  link: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#FFB74B",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    margin: 12,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 25,
    alignSelf: "center"
  },
  alert: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  inquiry: {
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  footer: {
    marginTop: 60,
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

export default Question1;
