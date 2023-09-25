import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Screenheader } from '../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Today, Precipitation, Forecast, Radarsun } from '../screens';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Tab = createMaterialTopTabNavigator();

const Toptab = ({navigation}) => {

  return (
    <View style={styles.body}>
      <Screenheader navigation={navigation}/>

      <Tab.Navigator
        initialRouteName="Today"
        screenOptions={{
          tabBarGap: wp(1),
          tabBarLabelStyle: { fontSize: 13, fontFamily: 'Roboto', color: '#fff', textTransform: 'capitalize'},
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
        <Tab.Screen name="Today" component={Today} />
        <Tab.Screen name="Forecast" component={Precipitation} />
        <Tab.Screen name="Precipitation" component={Forecast} />
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