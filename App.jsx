import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Rootstack from './navigations/Rootstack';

  const App = () => {
    return (
      <SafeAreaView style={styles.body}>
        <StatusBar 
          animated={true}
          backgroundColor="#000"
        />
        <Rootstack />
      </SafeAreaView>
    )
  }
  

const styles = StyleSheet.create({
  body: {
    flex: 1,
  }
});

export default App;
