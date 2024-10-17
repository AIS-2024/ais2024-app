import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>おめでとう五座います！当選しました貴方は！</Text>
      </View>

      <View style={styles.infoLink}>
        <Text style={styles.linkText}>注文履歴</Text>
        <Text>｜</Text>
        <Text style={styles.linkText}>アカウントサービス</Text>
        <Text>｜</Text>
        <Text style={styles.linkText}>Amazon.co.jp</Text>
      </View>

      <Text style={{ textAlign: 'right' }}>ご注文の確認</Text>

      <View style={styles.infoLink}>
        <Text>注文番号：</Text>
        <Text style={styles.linkText}>508-8864920-6546310</Text>
      </View>

      <View style={styles.mail}>
        <Text>username様</Text>
        <Text style={styles.mainText}>招待者に選ばれました。</Text>
        <Text>
          招待リクエストをお送りいただき、ありがとうございます。お客様は、招待販売の招待者にえらばれました。当選した商品をご購入いただけます。{"\n"}
          {"\n"}
          本招待メールによる注文の有効期限は、本招待メールが
        </Text>
        <Text style={styles.linkText}>Amazon.co.jp</Text>
        <Text>から発信されてから72時間以内です。</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>商品を見る</Text>
        </View>

        <Text>
          商品を購入するには、「商品を見る」ボタンをクリックして商品ページへアクセスし、商品を注文してください、{"\n"}
          {"\n"}
          商品のは発想準備が完了したら、お知らせいたします。
        </Text>
      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#EEE',
    height: 155,
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  infoLink: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 5
  },
  linkText: {
    color: '#007AFF'
  },
  mail: {
    paddingHorizontal: 20
  },
  mainText: {
    fontSize: 36,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  button: {
    backgroundColor: '#FF9500',
    width: 150,
    height: 35,
    marginTop: 80,
    marginBottom: 30
  },
  buttonText: {
    textAlign: 'center',
    marginVertical: 'auto'
  }
});
