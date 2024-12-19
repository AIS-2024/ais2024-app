import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import CollectionTop from '../../../../components/CollectionTop';
import data from './data';
import BackButton from '../../../../components/BackButton';



const CollectionDetail = () => {
  const { id } = useLocalSearchParams();
  const item = typeof id === 'string' ? data[parseInt(id) - 1] : null;

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>データが見つかりませんでした。</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
        <ScrollView contentContainerStyle={styles.container}>
            <CollectionTop />

            <View style={styles.explanationContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>解説</Text>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.text}>{item.text2}</Text>
            </View>
        </ScrollView>
        <BackButton />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: "#ffffff",
      paddingBottom: 80,
      justifyContent: "flex-start",
      },
    explanationContainer: {
      alignItems: "flex-start",
      paddingLeft: 30,
      paddingTop: 30,
      width: "95%",
      },
    title: {
      fontWeight: "bold",
      fontSize: 30,
      textAlign: 'left',
      paddingBottom: 30
      },
    subTitle: {
      fontSize: 20,
      textAlign: 'left',
      width: "100%",
      paddingBottom: 10
      },
    text: {
      fontSize: 20,
      textAlign: 'left',
      paddingBottom: 30,
      width: "100%",
      lineHeight: 28,
      },
      errorText: {
        fontSize: 18,
        color: 'red',
      }
  });

export default CollectionDetail;
