import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <Navigation style={styles.root}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#5577'
  },
});

export default App;