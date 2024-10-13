import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Question1 from './app/question/question1';

const App = () => {
  return (
    // <View style={styles.container}>
    <View>
      <Question1 />  
    
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