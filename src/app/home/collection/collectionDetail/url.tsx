/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CollectionTop from "../../../../components/CollectionTop";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import BackButton from "../../../../components/BackButton";
import { useState, useEffect } from "react";
import { db } from "../../../../config";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { Explanation } from "../../../types/explanation";

const Url: React.FC = () => {
    const [explanation, setExplanation] = useState<Explanation[]>([]);
  
    useEffect(() => {
      const fetchExplanation = async () => {
        const docRef = doc(db, "解説", "解説1");
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          setExplanation([{ Explanation: data.解説文 }]);
        } else {
          console.log("ドキュメントが見つかりません");
        }
      };
  
      fetchExplanation();
    }, []);
  
return (
  <GestureHandlerRootView style={styles.container}>
    <ScrollView>
      <CollectionTop />
      {explanation.map((item, index) => (
        <Text key={index}>{item.Explanation}</Text>
      ))}
      <BackButton />
    </ScrollView>
  </GestureHandlerRootView>
);
}
// const Url = () => {
//   return (
//     <GestureHandlerRootView>
//       <ScrollView contentContainerStyle={styles.container}>
//         <CollectionTop />

//         <View style={styles.explanationContainer}>
//           <Text style={styles.title}>URL</Text>
//           <Text style={styles.text}>解説</Text>
//           <Text style={styles.text}>偽URLの見分け方は～</Text>
//           <Text style={styles.text}>正規のURLは～</Text>
//         </View>
      
//         <BackButton />
//       </ScrollView>
//     </GestureHandlerRootView>
//   );
// };

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
