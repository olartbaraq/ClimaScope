import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Svgs from '../assets/svgs';
import Icons from '../utils/Icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Today = () => {

  function getRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumberBetween0And1 = Math.random();
    
    // Scale the random number to be between 0 and 500
    const randomNumberBetween0And500 = randomNumberBetween0And1 * 500;
    
    // Use Math.floor to round down to the nearest integer
    const randomIntegerBetween0And500 = Math.floor(randomNumberBetween0And500);
    
    return randomIntegerBetween0And500;
  }

  const randomNumber = getRandomNumber()

  const getAirQuality = (randomNumber) => {
    let category;
    let description;
  
    if (randomNumber >= 0 && randomNumber <= 50) {
      category = "Good";
      description = "You have a good air quality, enjoy your outdoor activities";
    } else if (randomNumber <= 100) {
      category = "Moderate";
      description = "Your air quality is moderate, Plan strenuous outdoor activities when air quality is better";
    } else if (randomNumber <= 150) {
      category = "Unhealthy for Sensitive Groups";
      description = "Your air quality is unhealthy for sensitive groups, cut back or reschedule outdoor activities when air quality is better";
    } else if (randomNumber <= 200) {
      category = "Unhealthy";
      description = "Your air quality is unhealthy, avoid strenuous outdoor activities";
    } else if (randomNumber <= 300) {
      category = "Very Unhealthy";
      description = "Your air quality is very unhealthy, avoid physical outdoor activities";
    } else {
      category = "Hazardous";
      description = "Your air quality is hazardous, avoid all outdoor activities";
    }
  
    return { randomNumber, category, description };
  };

  const airQualityInfo = getAirQuality(304);

  const fillValue = ((airQualityInfo.randomNumber) / 5)
  
  

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

  const Daily = [
    {id: 1, weekday: 'Today', weather: 'rain', High: '39', Low: '25'},
    {id: 2, weekday: 'Sunday', weather: 'cloudy', High: '39', Low: '25'},
    {id: 3, weekday: 'Monday', weather: 'humid', High: '39', Low: '25'},
    {id: 4, weekday: 'Tuesday', weather: 'sunny', High: '39', Low: '25'},
    {id: 5, weekday: 'Wednesday', weather: 'clear', High: '39', Low: '25'},
    {id: 6, weekday: 'Thursday', weather: 'sunny', High: '39', Low: '25'},
    {id: 7, weekday: 'Friday', weather: 'rain', High: '39', Low: '25'},
  ]

  const [Click, setClick] = useState(false)
  const [selectedDaily, setSelectedDaily] = useState(null);


  const revealHandler = (id) => {
    setSelectedDaily(id)
    setClick(prev => !prev);
  }
  
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
        renderItem={({ item: card }) => {

          let cardStyle = styles.eachCard;
          if (card.time === '04:00') {
            cardStyle = { ...styles.eachCard, ...styles.color };
          }

          return (
            <View style={cardStyle}>
              <Text style={styles.time}>{card.time}</Text>
              <Svgs name={card.weather} width={wp(10)} height={hp(10)} />
              <Text style={styles.time}>{card.weather}</Text>
              <Text style={styles.temp}>{card.temp}°C</Text>
            </View>
          );
        }}
      />

      <View style={styles.separator}></View>


      <View style={styles.weeksWeather}>
        <LinearGradient
          colors={['#232329', '#2F313A']}
          useAngle={true} angle={60} angleCenter={{x:0.5,y:0.5}}
          style={styles.linearGradient}
        >

          <Text style={styles.highLow}>High  |  Low</Text>

          <View style={styles.wholePicker}>
            {Daily.map((picker) => (
              <View key={picker.id} style={[styles.eachPickerWhole, Click && selectedDaily == picker.id && { height: hp(23), marginTop: hp(1), backgroundColor: '#444447', borderRadius: hp(2)}]}>
                <View style={[styles.eachPickerUp, Click && selectedDaily == picker.id && { marginLeft: wp(3) }]}>
                  <View style={styles.leftPart}>

                    <TouchableOpacity
                      style={styles.upButton}
                      onPress={() => revealHandler(picker.id)}
                    >
                      {(Click && selectedDaily == picker.id) ? (<Icons name={'upButton'} />) : (<Icons name={'downButton'} />)}
                    </TouchableOpacity>

                    <Text style={styles.day}>{picker.weekday}</Text>
                  </View>

                  <Svgs style={styles.svg} name={picker.weather} width={wp(6)} height={hp(6)} />
                  <Text style={styles.tempsValue}>{picker.High}°  |   {picker.Low}°</Text>
                </View>

                {Click && selectedDaily == picker.id && (
                  <FlatList
                  data={Hourly}
                  horizontal={true}
                  keyExtractor={item => item.id}
                  renderItem={({ item: card }) => {
          
                    let cardStyle = styles.eachCard2;
                              
                    return (
                      <View style={cardStyle}>
                        <Text style={styles.time2}>{card.time}</Text>
                        <Svgs name={card.weather} width={wp(5)} height={hp(5)} />
                        <Text style={styles.temp2}>{card.temp}°C</Text>
                      </View>
                    );
                  }}
                />
                )}
              </View>
            ))}
          </View>
        </LinearGradient>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.airQuality}>
        <Text style={styles.AQtext}>Air Quality</Text>
        <View style={styles.AQCircle}>
          <AnimatedCircularProgress
            size={120}
            width={5}
            fill={fillValue}
            tintColor="#fff"
            backgroundColor="#32333E"
            arcSweepAngle={240}
            rotation={-120}
            >
            {
              (fill) => (
                <View style={styles.airText}>
                  <Text style={styles.airNum}>{ airQualityInfo.randomNumber }</Text>
                  <Text style={styles.airCat}>{ airQualityInfo.category }</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>

          <Text style={styles.airDesc}>{airQualityInfo.description}</Text>

          <Text style={styles.zero}>0</Text>
          <Text style={styles.fiveHundred}>500</Text>
        </View>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.sunAndMoon}>
        <Text style={styles.sunMoonText}>Sun & Moon</Text>

        <View style={styles.sunAnime}>
          <View style={styles.sunRiseBody}>
            <Text style={styles.sunRiseText}>05:57 AM</Text>
            <Text style={styles.sunrise}>Sunrise</Text>
          </View>

          <AnimatedCircularProgress
            size={120}
            width={2}
            fill={60}
            tintColor="#fff"
            backgroundColor="#32333E"
            arcSweepAngle={180}
            rotation={-90}
            renderCap={({center}) => <Svgs name={'sunny'} width={wp(6)} height={hp(6)} />}
          />

          <View style={styles.sunRiseBody}>
            <Text style={styles.sunRiseText}>06:12 PM</Text>
            <Text style={styles.sunrise}>Sunset</Text>
          </View>
        </View>
      </View>

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
    borderWidth: hp(0.1),
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
    marginHorizontal: wp(3),
    borderWidth: hp(0.1),
  },

  eachCard2: {
    marginVertical: hp(1),
    borderRadius: hp(3.5),
    width: wp(11),
    height: hp(15),
    backgroundColor: '#32333E',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(2),
    borderWidth: hp(0.1),
  },

  color: {
    backgroundColor: '#414146',
    borderColor: '#fff',
    borderWidth: hp(0.1),
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
  },

  time2: {
    color: '#fff',
    fontSize: hp(1.5),
    fontFamily: 'FuturaPTLight'
  },

  temp2: {
    color: '#fff',
    fontSize: hp(1.5),
    fontFamily: 'FuturaPTMedium'
  },

  weeksWeather: {
    marginHorizontal: wp(3),
    marginVertical: hp(2),
    borderRadius: wp(2)
  },

  highLow: {
    color: '#fff',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2),
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginTop: hp(2)
  },

  wholePicker: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  eachPickerUp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  leftPart: {
    flexDirection: 'row',
    width: wp(20),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: wp(20)
  },

  upButton: {
    marginLeft: wp(1),
    marginTop: hp(-0.5)
  },

  day: {
    color: '#fff',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2),
  },

  tempsValue: {
    marginLeft: wp(22),
    color: '#fff',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2),
  },

  svg: {
    marginTop: hp(1)
  },

  linearGradient: {
    borderRadius: hp(2)
  },

  airQuality: {
    backgroundColor: '#232329',
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    padding: wp(2),
    borderRadius: hp(3)
  },

  AQtext: {
    color: '#fff',
    fontFamily: 'FuturaPTMedium',
    fontSize: hp(2),
    marginLeft: wp(5)
  },

  AQCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1)
  },

  airText: {
    flexDirection: 'column',
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(-3),
    paddingHorizontal: wp(5)
  },

  airDesc: {
    color: '#9B9EAD',
    fontSize: hp(2),
    fontFamily: 'FuturaPTLight',
    marginRight: wp(6),
    width: wp(50)
  },

  airCat: {
    color: '#fff',
    fontSize: hp(1.5),
    fontFamily: 'FuturaPTLight',
    
  },

  airNum: {
    color: '#fff',
    fontSize: hp(4),
    fontFamily: 'FuturaPTMedium',
  },

  zero: {
    position: 'absolute',
    left: wp(2),
    bottom: hp(2),
    color: '#fff',
    fontSize: hp(1),
    fontFamily: 'FuturaPTLight',
  },

  fiveHundred: {
    position: 'absolute',
    left: wp(24),
    bottom: hp(2),
    color: '#fff',
    fontSize: hp(1),
    fontFamily: 'FuturaPTLight',
  },

  sunAndMoon: {
    backgroundColor: '#232329',
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    padding: wp(2),
    borderRadius: hp(3)
  },

  sunMoonText: {
    color: '#fff',
    fontFamily: 'FuturaPTMedium',
    fontSize: hp(2),
    marginLeft: wp(5)
  }

});

export default Today;