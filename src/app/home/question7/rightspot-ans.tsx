import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from "expo-router";
import Address from '../../../components/Address';
import ChangeButton from '../../../components/ChangeButton';
import { AntDesign } from '@expo/vector-icons';
import AnswerButton from '../../../components/AnswerButton';

const handlepressIncorrect = (): void => {
  router.push("/home/incorrect");
};

const handlepressCorrect = (): void => {
  router.push("/home/correct?questionNumber=8");
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <TouchableOpacity onPress={handlepressIncorrect}>
        {/* 差出人情報 */}
        <Address />
      </TouchableOpacity>

      
        <View style={styles.separator} />
        <TouchableOpacity onPress={handlepressIncorrect}>
        {/* タイトル */}
        <Text style={styles.mainTitle}>300円割引が、Amazonの受け取りスポット利用時</Text>
        </TouchableOpacity>
        {/* 画像
        <Image
          source={require('./assets/MailIcon.png/300.png')}
          style={styles.promoImage}
        /> */}

        {/* 説明テキスト */}
        <TouchableOpacity onPress={handlepressIncorrect}>
        <Text style={styles.description}>
          ぜひAmazonの受け取りスポットをご利用ください。¥2000以上のお買い物をすると、300円割引をご利用いただけます。
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
        <Text style={styles.description}>
          Amazonの受け取りスポットは、自宅や職場など毎日訪れる場所の近くに設置されています。受け取り方法も簡単です。確認用のメールに記載された手順に従ってお受け取りください。
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepressIncorrect}>
        <Text style={styles.description}>
          プロモーションコード 300PICKUP をレジで使用すると、割引が適用されます。
        </Text>
        </TouchableOpacity>
        {/* 底部のアイコンナビゲーション */}
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navButton} onPress={handlepressIncorrect}>
            <Text style={styles.navButtonText}>報告</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handlepressIncorrect}>
            <Text style={styles.navButtonText}>移動</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handlepressIncorrect}>
            <Text style={styles.navButtonText}>返信・転送</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handlepressIncorrect}>
            <Text style={styles.navButtonText}>削除</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handlepressIncorrect}>
            <Text style={styles.navButtonText}>その他</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handlepressIncorrect}>
      <AnswerButton label='間違い無し' onPress={handlepressCorrect} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
    marginBottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 14,
    color: '#007AFF',
  },
actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '150%',
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
  actionText: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  },
});
