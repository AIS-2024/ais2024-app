import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Address from '../../../components/Address';
import Footer from '../Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* 差出人情報 */}
        <Address />

        <View style={styles.separator} />

        {/* タイトル */}
        <Text style={styles.mainTitle}>300円割引が、Amazonの受け取りスポット利用時</Text>

        {/* 画像
        <Image
          source={require('./assets/MailIcon.png/300.png')}
          style={styles.promoImage}
        /> */}

        {/* 説明テキスト */}
        <Text style={styles.description}>
          ぜひAmazonの受け取りスポットをご利用ください。¥2000以上のお買い物をすると、300円割引をご利用いただけます。
        </Text>
        <Text style={styles.description}>
          Amazonの受け取りスポットは、自宅や職場など毎日訪れる場所の近くに設置されています。受け取り方法も簡単です。確認用のメールに記載された手順に従ってお受け取りください。
        </Text>
        <Text style={styles.description}>
          プロモーションコード 300PICKUP をレジで使用すると、割引が適用されます。
        </Text>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
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
  },
  senderInfo: {
    flexDirection: 'column',
  },
  senderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipientText: {
    fontSize: 14,
    color: '#555',
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
  }
});
