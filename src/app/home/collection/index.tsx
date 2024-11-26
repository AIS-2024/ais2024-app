/** @format */

import { Link, router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import CollectionTop from "../../../components/CollectionTop";
import BackButton from "../../../components/BackButton";

const handlepress1 = () : void => {
  router.push("/home/collection/collectionDetail/mailaddress")
}

const handlepress2 = () : void => {
  router.push("/home/collection/collectionDetail/telephoneNumber")
}

const handlepress3 = () : void => {
  router.push("/home/collection/collectionDetail/explanation3")
}

const handlepress4 = () : void => {
  router.push("/home/collection/collectionDetail/explanation4")
}

const handlepress5 = () : void => {
  router.push("/home/collection/collectionDetail/explanation5")
}

const handlepress6 = () : void => {
  router.push("/home/collection/collectionDetail/explanation6")
}

const handlepress7 = () : void => {
  router.push("/home/collection/collectionDetail/explanation7")
}

const handlepress8 = () : void => {
  router.push("/home/collection/collectionDetail/explanation8")
}

const Collection = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.container}>

        <CollectionTop />
    
        <TouchableOpacity onPress={handlepress1} style={styles.detailButton}>
          <Text style={styles.buttonText}>メールアドレス</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress2} style={styles.detailButton}>
          <Text style={styles.buttonText}>電話番号</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress3} style={styles.detailButton}>
          <Text style={styles.buttonText}>解説3</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress4} style={styles.detailButton}>
          <Text style={styles.buttonText}>解説4</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress5} style={styles.detailButton}>
          <Text style={styles.buttonText}>解説5</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress6} style={styles.detailButton}>
          <Text style={styles.buttonText}>解説6</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress7} style={styles.detailButton}>
          <Text style={styles.buttonText}>解説7</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlepress8} style={styles.detailButton}>
          <Text style={styles.buttonText}>解説8</Text>
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
