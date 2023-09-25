import React from 'react'
import { View, StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native';
import Icons from '../utils/Icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DrawerContent = ({navigation}) => {

  const links = [
    {id:1, name: 'Homepage', icon_name: 'homepage'},
    {id:2, name: 'Notifications', icon_name: 'notifications'},
    {id:3, name: 'Feedback', icon_name: 'feedback'},
    {id:4, name: 'Share your weather', icon_name: 'share'},
  ]
  
  const locations = [
    {id:1, city: 'Ibadan', country: 'NG', temp: '29', weather: 'Clear', icon_name: 'location'}, 
    {id:2, city: 'Chennai', country: 'IND', temp: '30', weather: 'Haze', icon_name: 'location'}, 
    {id:3, city: 'New York', country: 'USA', temp: '20', weather: 'Snow', icon_name: 'location'}, 
    {id:4, city: 'Lagos', country: 'NG', temp: '29', weather: 'Sunny', icon_name: 'location'}, 
    {id:5, city: 'New Delhi', country: 'IND', temp: '30', weather: 'Partly cloudy', icon_name: 'location'}
  ]



  return (
    <>
      <View style={styles.Header}>
        <TouchableOpacity 
          onPress={() => navigation.closeDrawer()}
          style={styles.close_button}>
            <Icons name={'close'}/>
        </TouchableOpacity>
      </View>
          
      <View style={styles.drawerContainer}>
        <View style={styles.separator}></View>

        <View style={styles.locationContainer}>
          <View style={styles.editLocation}>
            <Text style={styles.locationText}>Location</Text>
          </View>

          {locations.map((location) => (
            <View key={location.id} style={styles.eachLocation}>
              <Pressable
                style={styles.locationButton}
                //onPress={locationHandler}
              >
                <View style={styles.icon}>
                  <Icons name={'location'} />
                </View>

                <View style={styles.place}>
                  <Text style={styles.cityBold}>{location.city}, {location.country}</Text>
                  <Text style={styles.cityLight}>{location.temp}°C, {location.weather}</Text>
                </View>
              </Pressable>
            
            </View>
          ))}
    
        </View>

          <View style={styles.separator}></View>

          <Text style={styles.toolsText}>Tools</Text>

          <View style={styles.tools}>
            {links.map((link) => (
              <View key={link.id} style={styles.eachTools}>
                <Pressable
                  style={styles.linkButton}
                  //onPress={linkHandler}
                >
                  <Icons name={link.icon_name} />
                  <View style={styles.link}>
                    <Text style={styles.eachText}>{link.name}</Text>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  Header: {
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(7),
    paddingVertical: hp(1)
  },

  close_button: {
    alignSelf: 'flex-end'
  },

  separator: {
    borderWidth: hp(0.03),
    borderColor: '#9B9EAD',
  },

  locationContainer: {
    flexDirection: 'column',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    justifyContent: 'space-around'
  },

  editLocation: {
    width: wp(16),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: hp(2)
  },

  locationText: {
    color: '#9B9EAD',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2.2)
  },

  locationEdit: {
    color: '#FFC100',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2.3)
  },

  locationButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(47),
    paddingVertical: hp(1)
  },

  place: {
    width: wp(35),
    alignSelf: 'flex-start'
  },

  cityBold: {
    color: '#fff',
    fontFamily: 'FuturaPTMedium',
    fontSize: hp(2.2)
  },

  cityLight: {
    color: '#9B9EAD',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(1.5)
  },

  toolsText: {
    color: '#9B9EAD',
    fontFamily: 'FuturaPTLight',
    fontSize: hp(2.2),
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
  },

  tools: {
    flexDirection: 'column',
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.2),
    justifyContent: 'space-around'
  },

  linkButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(57),
    paddingVertical: hp(1)
  },

  link: {
    width: wp(45),
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },

  eachText: {
    color: '#fff',
    fontFamily: 'FuturaPTMedium',
    fontSize: hp(2.2)
  }

});

export default DrawerContent;