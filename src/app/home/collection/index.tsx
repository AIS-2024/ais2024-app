/** @format */

import { Link, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CollectionTop from "../../../components/collectionTop";
import BackButton from "../../../components/BackButton";

const handlepress1 = () : void => {
  router.push("/home/collection/collectionDetail/url")
}

const Collection = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>

        <CollectionTop />
    
        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}>URL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}>支払い方法</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
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
    alignItems: "center"
  },

  detailButton: {
    backgroundColor: "#D9D9D9",
    width: "80%",
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20
  }
})

export default Collection;
