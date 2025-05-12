import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  useEffect(() => {
    console.log('useEffect');
    NavigationBar.setBackgroundColorAsync('#333333').then(() => {
      console.log('NavigationBar.setBackgroundColorAsync is called');
      console.log("navigation color is:", NavigationBar.getBackgroundColorAsync());
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
