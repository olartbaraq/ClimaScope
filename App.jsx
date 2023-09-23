
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


  const App = () => {
    return (
      <View>
        <Text style={styles.text}>Welcome</Text>
      </View>
    )
  }
  

const styles = StyleSheet.create({
  text: {
    fontFamily: 'FuturaPTLight',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default App;
