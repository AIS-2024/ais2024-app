import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from "expo-router";
import AnswerButton from "../../../components/AnswerButton";
const handlepress = () : void => {
  router.push("/home/incorrect")
}

const handlepresscorect = (): void => {
  router.push("/home/correct");
};

export default function CallScreen() {
  return (
    <View style={styles.container}>
      {/* 相手の名前 */}
      <Text style={styles.callerName}>+241 35313084</Text>

      {/* オプションボタン */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="bell-o" size={24} color="white" />
          <Text style={styles.optionText}>あとで通知</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handlepress}>
          <Icon name="comment-o" size={24} color="white" />
          <Text style={styles.optionText}>メッセージを送信</Text>
        </TouchableOpacity>
      </View>

      {/* 通話操作ボタン */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.declineButton} onPress={handlepress}>
          <Icon name="phone" size={28} color="white" />
          <Text style={styles.actionText}>拒否</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.answerButton} onPress={handlepress}>
          <Icon name="phone" size={28} color="white" />
          <Text style={styles.actionText}>応答</Text>
        </TouchableOpacity>
      </View>
      <AnswerButton label='何もしない' onPress={handlepresscorect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B36', // ダークブルーの背景色
    justifyContent: 'center',
    alignItems: 'center',
  },
  callerName: {
    fontSize: 28,
    color: 'white',
    marginBottom: 80,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 50,
  },
  optionButton: {
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 30,
  },
  declineButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#D9534F', // 赤
  },
  answerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#5CB85C', // 緑
  },
  actionText: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  },
});
