/** @format */

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  Modal,
  findNodeHandle,
  UIManager,
  InteractionManager,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import { router, useNavigation } from "expo-router";
import LogOutButton from "../../components/LogOutButton";
import { auth } from "../../config";
import { useLocalSearchParams } from "expo-router/build/hooks";

const handlepress1 = (): void => {
  router.push("home/mailSelect");
};

const handlepress2 = (): void => {
  router.push("home/smsSelect");
};

const handlepress3 = (): void => {
  router.push("home/question4/call");
};

const handlepress4 = (): void => {
  router.push("home/collection");
};

const handlepress5 = (): void => {
  router.push("home/hint");
};

const Home = () => {
  const searchParams = useLocalSearchParams();
  const isNewUser = searchParams.isNewUser === "true";
  const [step, setStep] = useState(0);
  const [modalVisible, setModalVisible] = useState(false); // モーダルの表示非表示を管理
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });
  const [arrowPositionChange, setArrowPositionChange] =
    useState<boolean>(false);

  const tentative = useRef<View>(null);
  const mailIconRef = useRef<View>(null);
  const smsIconRef = useRef<View>(null);
  const callIconRef = useRef<View>(null);
  const collectionIconRef = useRef<View>(null);

  //ダイアログメッセージのリスト
  const steps = [
    {
      title: "ようこそ！",
      description: "アプリの使い方を説明します。",
      target: tentative,
    },
    {
      title: "メールアイコンについて",
      description: "メールの問題を解くことができます。",
      target: mailIconRef,
    },
    {
      title: "SMSアイコンについて",
      description: "SMS形式の問題を解くことができます。",
      target: smsIconRef,
    },
    {
      title: "電話アイコンについて",
      description: "電話形式の問題を解くことができます。",
      target: callIconRef,
    },
    {
      title: "コレクションについて",
      description: "正解した問題の解説を閲覧できます。",
      target: collectionIconRef,
    },
  ];

  //measureTargetでアイコンの位置を取得
  const measureTarget = async (targetRef: React.RefObject<View>) => {
    return new Promise<{ top: number; left: number }>((resolve, reject) => {
      const handle = findNodeHandle(targetRef.current);

      if (handle) {
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
          resolve({ top: pageY + height, left: pageX + width / 2 });
        });
      } else {
        reject("Invalid target handle");
      }
    });
  };

  //矢印の位置をarrowPositionに設定
  const showTooltip = async () => {
    try {
      if (step === 0) {
        setArrowPosition({ top: -100, left: -100 });
      } else {
        const position = await measureTarget(steps[step]?.target);
        setArrowPosition(position);
      }
    } catch (error) {
      console.error("Error measuring target:", error);
    } finally {
      if (step >= 1) setArrowPositionChange(true);
    }
  };

  //ボタン押下でダイアログを進める
  const nextStep = () => {
    setStep(step + 1);
  };

  //stepが変更されるたびに実行
  useEffect(() => {
    if (step < steps.length) {
      showTooltip();
    } else {
      setModalVisible(false); // 最後のステップでモーダルを閉じる
      setArrowPositionChange(false);
    }
  }, [step]);

  //画面遷移後200ミリ秒後にモーダルを表示
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isNewUser) {
        setArrowPositionChange(false);
        setModalVisible(true);
        showTooltip();
      }
    }, 200);

    return () => clearTimeout(timeout); // クリーンアップ
  }, []);

  return (
    <ImageBackground
      source={{
        uri: "https://www.letemsvetemapplem.eu/wp-content/uploads/2023/06/iOS-17-tapety-2.png",
      }} // 背景画像のURLを指定
      style={styles.background}
    >
      <View style={styles.iconContainer}>
        <TouchableOpacity ref={mailIconRef} onPress={handlepress1}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d0/95/24/d0952470-b2fe-f628-1e30-0c4a444aadb3/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.mailIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity ref={smsIconRef} onPress={handlepress2}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/9d/84/0b/9d840b19-1f87-4e2a-c2ce-ab56d31839d7/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity ref={callIconRef} onPress={handlepress3}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/09/09/6409090d-8811-e92f-2ebf-37f842b72e98/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/340x340bb.webp",
            }}
            style={styles.Icon}
          />
        </TouchableOpacity>

        <TouchableOpacity ref={collectionIconRef} onPress={handlepress4}>
          <Image
            source={{
              uri: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7d/d1/9e/7dd19ecc-fef9-bc7e-0a1d-10796501161e/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/434x0w.webp",
            }}
            style={styles.Icon}
          />

        </TouchableOpacity>
        {/* チュートリアルモーダル */}
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            {/* 矢印 */}
            {arrowPositionChange ? (
              <View
                style={[
                  styles.arrow,
                  {
                    top: arrowPosition.top, // 矢印の位置（ターゲットボタンの下部に合わせる）
                    left: arrowPosition.left - 15, // 矢印の中央をターゲットに合わせる
                  },
                ]}
              />
            ) : (
              <View></View>
            )}
            {/* ダイアログ */}
            <View style={styles.dialog}>
              <Text style={styles.dialogText}>{steps[step]?.title}</Text>
              <Text style={styles.dialogText}>{steps[step]?.description}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={nextStep}>
                {step >= 4 ? (
                  <Text style={styles.closeButtonText}>閉じる</Text>
                ) : (
                  <Text style={styles.closeButtonText}>次へ</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={styles.hint} onPress={handlepress5}>
          <Text>
            遊び方などはこちら！
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    top: 50,
    flexDirection: "row",
    flexWrap: "wrap", // 折り返しを有効化
    justifyContent: "space-between", // 各行で均等に配置
    alignItems: "flex-start",
    width: "80%",
  },
  mailIcon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginBottom: 15, // 下に余白を追加
  },
  Icon: {
    width: 65,
    height: 65,
    borderRadius: 15,
    marginBottom: 15, // 下に余白を追加
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  tooltip: {
    position: "absolute",
    padding: 10,
    backgroundColor: "yellow",
    borderRadius: 5,
    zIndex: 10,
  },

  startTutorialButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  nextButton: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "green",
    borderRadius: 5,
  },
  nextButtonText: {
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  arrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 40,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
  },
  dialog: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
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
  hint: {
    backgroundColor: "#fff",
    margin: 10,
    padding: 10
  }
});

export default Home;
