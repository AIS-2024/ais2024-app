import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question1 from './app/question/question1';
import Question2 from './app/question/question2';

const App = () => {
  return (
    <View style={styles.container}>
      <Question2 />  
    
    </View>

    // <StatusBar style="auto" />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App