import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icons from '../utils/Icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const Today = () => {
  return (
    <ScrollView>
      <View style={styles.section1}>
        <View style={styles.dateBackground}>
          <Text style={styles.todayDate}>Saturday,11 Sept</Text>
        </View>

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
            <Text style={styles.wind}>Wind 9 KM</Text>
          </View>
        </View>
      </View>

      <View style={styles.separator}></View>

    </ScrollView>
    );
};

const styles = StyleSheet.create({
  section1: {
    flexDirection: 'column',
    height: hp(40),
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
  },

  dateBackground: {
    backgroundColor: '#32333E',
    height: hp(5),
    width: wp(35),
    borderRadius: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },

  todayDate: {
    color: '#979797',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2)
  },

  upperWeatherIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(20),
    width: wp(70)
  }

});

export default Today;