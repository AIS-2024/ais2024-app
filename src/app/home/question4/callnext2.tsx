import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from "expo-router";
import Address from '../../../components/Address';
const handlePress = (): void => {
    router.push("/home/question4/callnext");
  };
export default function CallNextScreen() {
  return (
    <ScrollView><View style={styles.container}>
      <Address />
          {/* 警告メッセージ */}
          <View style={styles.warningContainer}>
          <TouchableOpacity style={styles.navButton}>
              <Text style={styles.warningText}>
                  【重要】 あなたのAmazonのアカウントで不正な行為が確認されたため、アカウントを凍結しました
              </Text>
          </TouchableOpacity>
          </View>

          {/* アイコンと差出人情報 */}
          <View style={styles.senderContainer}>
              <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>A</Text>
              </View>
              <Text style={styles.senderName}>Amazon</Text>
          </View>

          {/* メッセージ本文 */}
          <Text style={styles.messageText}>
              Amazonカスタマーサポートです。{"\n\n"}
              電話でご連絡した通り、あなたのAmazonのアカウントで不正な行為が確認されたためアカウントを凍結しました。{"\n\n"}
              アカウントを引き続き利用するために下のリンクよりアカウントにログインしてください。
          </Text>

          {/* ログインリンク */}
          <TouchableOpacity onPress={() => Linking.openURL('https://www.amazon.co.jp')} style={styles.loginLinkContainer}>
              <Text style={styles.loginLink}>ログイン</Text>
          </TouchableOpacity>

          {/* 注意テキスト */}
          <Text style={styles.noticeText}>
              ご入力いただいた情報は、厳重に保管し、プライバシーの保護に努めております。
              ご不明な点がございましたら、カスタマーサービスへお問い合わせください。
          </Text>


          {/* 移動ボタン */}
      </View><View style={styles.actionContainer}>
              <TouchableOpacity style={styles.declineButton} onPress={handlePress}>
                  <Icon name="exclamation-circle" size={28} color="white" />
                  <Text style={styles.actionText}>戻る</Text>
              </TouchableOpacity>
          </View></ScrollView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  warningContainer: {
    backgroundColor: '#F8D7DA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  warningText: {
    color: '#721C24',
    fontSize: 14,
  },
  senderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  messageText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  loginLinkContainer: {
    marginBottom: 15,
  },
  loginLink: {
    color: '#007BFF',
    fontSize: 16,
  },
  noticeText: {
    fontSize: 12,
    color: '#333',
    marginTop: 20,
  },
  footerIconContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#F56342',
    borderRadius: 25,
    padding: 10,
  },

  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '150%',
    marginTop: 30,
    bottom: 150,
  },
  declineButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#5CB85C', // 赤
  },

  actionText: {
    fontSize: 14,
    color: 'white',
    marginTop: 8,
  },
  //タッチャブル//
  navButton: {
    alignItems: 'center',
    textDecorationLine: 'underline',
  },

});
