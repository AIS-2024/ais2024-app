/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CollectionTop from "../../../../components/collectionTop";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import BackButton from "../../../../components/BackButton";

const Url = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>
        <CollectionTop />

        <View style={styles.explanationContainer}>
          <Text style={styles.title}>URL</Text>
          <Text style={styles.text}>解説</Text>
          <Text style={styles.text}>偽URLの見分け方は～</Text>
          <Text style={styles.text}>正規のURLは～</Text>
        </View>
      
        <BackButton />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 80,
    alignItems: "flex-start",
  },
  explanationContainer: {
    alignItems: "flex-start",
    paddingLeft: 30,
    paddingTop: 30,
    width: "80%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'left',
    paddingBottom: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
  },
});

export default Url;
