import React from 'react'
import { View, StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native';
import Icons from '../utils/Icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Screenheader = ({navigation,  weatherValue}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
        >
            <Icons name={'menu'} />
        </TouchableOpacity>

        <View style={styles.location}>
            {!weatherValue ? (<Text style={styles.locationText}></Text>) : (<Text style={styles.locationText}>{weatherValue?.location?.region}/{weatherValue?.location?.timezone_id.split('/')[0]}</Text>)}
            
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: hp(6),
        width: wp(70),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    location: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    locationText : {
        color: '#fff',
        fontFamily: 'FuturaPTMedium',
        fontSize: hp(2.2),
        alignItems: 'center',
    },

    menuButton : {
        alignSelf: 'flex-start',
        paddingHorizontal: wp(3),
        paddingVertical: hp(1.5)
    }
});

export default Screenheader