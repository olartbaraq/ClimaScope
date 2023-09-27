import React from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native';
import Svgs from '../assets/svgs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradientText } from 'react-native-linear-gradient-text';


const Today = () => {

  const Hourly = [
    {id: 1, time: '01:00', temp: '29', weather: 'rain'},
    {id: 2, time: '02:00', temp: '21', weather: 'cloudy'},
    {id: 3, time: '03:00', temp: '22', weather: 'cloudy'},
    {id: 4, time: '04:00', temp: '24', weather: 'sunny'},
    {id: 5, time: '05:00', temp: '25', weather: 'clear'},
    {id: 6, time: '06:00', temp: '29', weather: 'sunny'},
    {id: 7, time: '07:00', temp: '30', weather: 'rain'},
    {id: 8, time: '08:00', temp: '19', weather: 'humid'},
    {id: 9, time: '09:00', temp: '28', weather: 'rain'},
    {id: 10, time: '10:00', temp: '32', weather: 'rain'},
    {id: 11, time: '11:00', temp: '27', weather: 'rain'},
    {id: 12, time: '12:00', temp: '26', weather: 'clear'},
  ]


  
  return (
    <ScrollView>
      <View style={styles.section1}>
        <View style={styles.dateBackground}>
          <Text style={styles.todayDate}>Saturday,11 Sept</Text>
        </View>

        <View style={styles.upperWeatherIcon}>
          <Svgs name={'cloudy'} width={wp(45)} height={hp(45)} />
       
          <View style={styles.valuesAndWeather}>
            <LinearGradientText
              colors={['#A5A2B5', '#545760']}
              text='33°'
              // {`${weather.Icons}`}
              start={{ x: 0.1, y: -0.3}} 
              end={{ x: -0.2, y: 1}}
              textStyle={styles.weatherValue}
            />
            {/* <Text style={styles.weatherValue}>33°</Text> */}
            <Text style={styles.weatherName}>Partly cloudy</Text>
          </View>
        </View>
      </View>

      <View style={styles.latAndLong}>
        <View style={styles.lat}>
          <Text style={styles.latKey}>Latitude</Text>
          <Text style={styles.latValue}>3.4227</Text>
        </View>

        <View style={styles.lat}>
        <Text style={styles.latKey}>Longitude</Text>
          <Text style={styles.latValue}>7.4568</Text>
        </View>
        
      </View>

      <View style={styles.separator}></View>

      <View style={styles.overalWeather}>

        <View style={styles.colum1}>
          <View style={styles.columnRow}>
            <Svgs name={'cloudy'} width={wp(6)} height={hp(6)} />

            <View style={styles.rowText}>
              <Text style={styles.precipitation}>Pressure</Text>
              <Text style={styles.value}>21%</Text>
            </View>

          </View>

          <View style={styles.columnRow}>
            <Svgs name={'sunny'} width={wp(6)} height={hp(6)} />

            <View style={styles.rowText}>
              <Text style={styles.precipitation}>Wind</Text>
              <Text style={styles.value}>10 km/h</Text>
            </View>
            
          </View>

        </View>
        
        <View style={styles.colum1}>
          <View style={styles.columnRow}>
            <Svgs name={'humid'} width={wp(6)} height={hp(6)} />

            <View style={styles.rowText}>
              <Text style={styles.precipitation}>Humidity</Text>
              <Text style={styles.value}>59%</Text>
            </View>

          </View>

          <View style={styles.columnRow}>
            <Svgs name={'sunset'} width={wp(6)} height={hp(6)} />
            <View style={styles.rowText}>
              <Text style={styles.precipitation}>Sunset</Text>
              <Text style={styles.value}>29%</Text>
            </View>
            
          </View>
          
        </View>

      </View>

      <View style={styles.separator}></View>

      <FlatList
        data={Hourly}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item: card}) => (
          <View style={styles.wholeCard}>
            <View style={styles.eachCard}>
              <Text style={styles.time}>{card.time}</Text>
              <Svgs name={card.weather} width={wp(10)} height={hp(10)} />
              <Text style={styles.time}>{card.weather}</Text>
              <Text style={styles.temp}>{card.temp}°C</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.separator}></View>


    </ScrollView>
    );
};

const styles = StyleSheet.create({
  section1: {
    flexDirection: 'column',
    height: hp(22),
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
    height: hp(15),
    width: wp(100)
  },

  valuesAndWeather: {
    flexDirection: 'column',
    height: hp(14),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(-6),
    marginRight: wp(5)
  },

  weatherValue: {
    fontSize: hp(12),
    color: '#979797',
    fontWeight: 'bold',
  },

  weatherName: {
    fontSize: hp(2.2),
    marginRight: hp(7),
    color: '#fff',
    fontFamily: 'FuturaPTLight'
  },

  latAndLong: {
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    width: wp(94)
  },

  lat: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  latKey: {
    marginRight: wp(1),
    color: '#9B9EAD',
    fontSize: hp(2),
    fontFamily: 'FuturaPTLight'
  },

  latValue: {
    color: '#fff',
    fontSize: hp(2),
    fontFamily: 'FuturaPTLight'
  },

  separator: {
    borderWidth: hp(0.022),
    borderColor: '#9B9EAD',
  },

  overalWeather: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    width: wp(97)
  },

  columnRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },

  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(3),
  },

  precipitation: {
    marginRight: wp(2),
    color: '#9B9EAD',
    fontSize: hp(2.2),
    fontFamily: 'FuturaPTLight'
  },

  value: {
    color: '#fff',
    fontSize: hp(2.2),
    fontFamily: 'FuturaPTLight'
  },

  eachCard: {
    marginVertical: hp(2),
    borderRadius: hp(3.5),
    width: wp(17),
    height: hp(20),
    backgroundColor: '#32333E',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(3)
  }, 

  time: {
    color: '#fff',
    fontSize: hp(2),
    fontFamily: 'FuturaPTLight'
  },

  temp: {
    color: '#fff',
    fontSize: hp(2),
    fontFamily: 'FuturaPTMedium'
  }

});

export default Today;