import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet, Image } from 'react-native';

const emails = [
  {
    id: '1',
    sender: 'Amazon',
    subject: 'Your Order Has Shipped!',
    date: '2024-10-12',
    preview: 'Your order #12345 has been shipped and is on its way...',
    avatar: 'https://via.placeholder.com/50', // ここに任意のアバター画像のURL
  },
  {
    id: '2',
    sender: 'Amazon',
    subject: 'Welcome to Amazon Prime',
    date: '2024-10-10',
    preview: 'Thank you for joining Amazon Prime! You now have access to...',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    sender: 'Amazon Support',
    subject: 'Password Reset Request',
    date: '2024-10-08',
    preview: 'We received a request to reset your password. If this was...',
    avatar: 'https://via.placeholder.com/50',
  },
];

const EmailCard = ({ email }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: email.avatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.sender}>{email.sender}</Text>
          <Text style={styles.date}>{email.date}</Text>
        </View>
      </View>
      <Text style={styles.subject}>{email.subject}</Text>
      <Text style={styles.preview}>{email.preview}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={emails}
        renderItem={({ item }) => <EmailCard email={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    flexDirection: 'column',
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  subject: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  preview: {
    fontSize: 14,
    color: '#666',
  },
});
