import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question1 from './app/question/question1';
import React from 'react';
import Index from './src/app';

const App = () => {
  return (
    // <View style={styles.container}>
    <View>
      <Index />
    </View>
    // <StatusBar style="auto" />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


export default App