import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.main}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
});
