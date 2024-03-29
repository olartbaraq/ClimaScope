import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Screenheader } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Today, Precipitation, Forecast, Radarsun } from '../screens';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Tab = createMaterialTopTabNavigator();

const Toptab = ({navigation}) => {

  const [weatherValue, setWeatherValue] = useState(null);

  return (
    <View style={styles.body}>
      <Screenheader navigation={navigation}  weatherValue={weatherValue}/>

      <Tab.Navigator
        initialRouteName="Today"
        screenOptions={{
          tabBarGap: wp(1),
          tabBarLabelStyle: { fontSize: hp(1.7), fontFamily: 'FuturaPTMedium', color: '#fff', textTransform: 'capitalize'},
          tabBarItemStyle: { width: wp(27), height: hp(5) },
          tabBarStyle: { backgroundColor: 'transparent',
                          borderTopWidth: 0,
                          elevation: 0,
                          borderBottomColor: '#fff'
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff',
        },
        }}
      >
        {/* <Tab.Screen name="Today" component={Today} /> */}
        <Tab.Screen name="Today">
          {() => <Today weatherValue={weatherValue} setWeatherValue={setWeatherValue} />}
        </Tab.Screen>
        <Tab.Screen name="Forecast" component={Forecast} />
        <Tab.Screen name="Precipitation" component={Precipitation} />
        <Tab.Screen name="Radar Sun & Moon" component={Radarsun} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default Toptab;