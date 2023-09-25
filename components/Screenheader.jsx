import React from 'react'
import { View, StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native';
import Icons from '../utils/Icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Screenheader = ({navigation}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
        >
            <Icons name={'menu'} />
        </TouchableOpacity>

        <View style={styles.location}>
            <Text style={styles.locationText}>Ibadan, NG</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: hp(6),
        width: wp(60),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    locationText : {
        color: '#fff',
        fontFamily: 'FuturaPTMedium',
        fontSize: hp(2.2)
    },

    menuButton : {
        alignSelf: 'flex-start',
        paddingHorizontal: wp(3),
        paddingVertical: hp(1.5)
    }
});

export default Screenheader