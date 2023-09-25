import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icons from '../utils/Icons';





const Today = () => {
  return (
    <ScrollView>
      <View style={styles.section1}>
        <Text style={styles.todayDate}>Saturday,11 Sept</Text>

        <View style={styles.upperWeatherIcon}>
          <Icons name={'Partly cloudy'} />

          <View style={styles.valuesAndWeather}>
            <Text style={styles.weatherValue}>33°C</Text>
            <Text style={styles.weatherName}>Partly cloudy</Text>
          </View>

        </View>

        <View style={styles.lowerWeatherIcon}>

          <View style={styles.leftValue}>
            <Text style={styles.temp}>29°C/27°C | Feels like </Text>
            <Text style={styles.temp2}>39°C</Text>
          </View>

          <View style={styles.rightValue}>

          </View>
        </View>
      </View>


    </ScrollView>
    );
};

const styles = StyleSheet.create({
  
});

export default Today;