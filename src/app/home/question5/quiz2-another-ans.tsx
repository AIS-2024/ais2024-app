// フィッシングの別バージョン //
// 回答はhttps://bit.ly/.. //
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import AnswerButton from "../../../components/AnswerButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../../../config";
import FooterButton from "../../../components/FooterButton";

const Quiz2 = () => {
  const router = useRouter();

  const handlepressCorrect = () => {
    router.push("/home/correct");
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
      description: "画面に表示されているメッセージにはSMS詐欺で送られてくるメッセージに書かれているような表現が含まれている可能性があります。\n怪しいと感じる表現が含まれる部分をタップして解答してください。\n特に怪しいと感じる部分がなければ画面下の「まちがいなし」ボタンを押してください。問題がないメッセージの場合もあります。",
      target: buttonRef,
    }
  ]
  useEffect(() => {
    const timeout = setTimeout(() => {
      const checkFirstVisit = async () => {
        const user = auth.currentUser;
        if (user) {
          const key = `hasVisitedAnswerSMS_${user.uid}`
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
        <View style={styles.message1}>
          <View style={styles.messageBox1}>
            <View style={styles.message1Container}>
              <View>
                <TouchableOpacity onPress={handlepressIncorrect}>
                  <Text>【重要】Amazonアカウントが一時的に停止されています{"\n"}{"\n"}
                    あなたのアカウントは私たちの利用規約に違反しています。 Amazon.co.jp{"\n"}
                    アカウントは一時的に停止されています。{"\n"}
                    理由: お支払い情報を更新できませんでした{"\n"}
                    再度アカウントを有効にするには、以下のリンクと手順を開いて、{"\n"}
                    このアカウントがあなたのアカウントであることを確認してください。{"\n"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlepressCorrect}>
                  <Text style={styles.link}>https://bit.ly/..</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlepressIncorrect}>
                  <Text>Amazon.co.jp どうぞよろしくお願いいたします。</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingBottom: 20,
    height: 120,
    alignItems: "center",
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 40
  },
  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    width: 60,
    borderRadius: 60,
  },
  iconLetter: {
    color: '#FFFFFF',
    fontSize: 40
  },
  fromAmazon: {
    paddingTop: 5,
  },
  message1: {
    marginVertical: 20,
    paddingHorizontal: 30,
    paddingRight: 100
  },
  messageBox1: {
    backgroundColor: "#D9D9D9",
    padding: 15,
    borderRadius: 10,
  },
  message1Container: {
    marginVertical: 10,
    flexDirection: 'row'
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
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

export default Quiz2;
