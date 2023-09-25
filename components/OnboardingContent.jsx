import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icons from '../utils/Icons';

const OnboardingContent = ({image, boldText1, lightText1, boldText2, lightText2}) => {

    const navigation = useNavigation();

    const skipHandler = () => {
        navigation.navigate('Leftdrawer')
    }


    return (
        <>
            <LinearGradient
                colors={['#2C2D35', '#484B5B', '#484B5B','#2C2D35']}
                start={{ x: 0.1, y: -0.3}} 
                end={{ x: -0.2, y: 1}}
            >
                <View style={styles.upperPart}>
                    <Pressable
                        onPress={skipHandler}
                        style={styles.skipButton}
                    >
                        <Text style={styles.skip}>Skip</Text>
                    </Pressable>
                    <Image 
                        style={styles.image}
                        source={image}
                    />
                </View>

            </LinearGradient>

            <View style={styles.lowerPart}>
                <View style={styles.largeTextContainer}>
                    <Text style={styles.boldText}>{boldText1}</Text>
                    <Text style={styles.boldText}>{boldText2}</Text>
                </View>
                
                <View style={styles.smallTextContainer}>
                    <Text style={styles.lightText}>{lightText1}</Text>
                    <Text style={styles.lightText}>{lightText2}</Text>
                </View>

                <LinearGradient
                    colors={['#FF4F80', '#C23ACC', '#C23ACC','#FF4F80']}
                    start={{ x: 0.1, y: -0.3}} 
                    end={{ x: -0.2, y: 1}}
                    style={styles.outerCircle}
                >
                    {/* <View style={styles.outerNextButton}>
                        <View style={styles.InnerNextButton}>
                            <Icons name={'arrowright'} />
                        </View>
                    </View> */}
                </LinearGradient>
            </View>

        </>
    );
};


const styles = StyleSheet.create({

    skipButton: {
        position: 'absolute',
        top: hp(4),
        right: wp(10),
    },
    
    skip: {
        color: '#fff',
        fontFamily: 'FuturaPTMedium',
        fontSize: hp(1.7)
    },

    upperPart: {
        height: hp(100),
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    image: {
        alignSelf: 'center',
        width: wp(60),
        height: hp(40),
        marginTop: hp(10)
    },

    lowerPart: {
        borderTopLeftRadius: hp(30),
        borderTopRightRadius: hp(30),
        backgroundColor: '#fff',
        marginTop: hp(-55),
        height: hp(60),
    },

    largeTextContainer: {
        marginTop: hp(10)
    },

    boldText: {
        fontFamily: 'FuturaPTBold',
        color: '#000',
        fontSize: hp(4.5),
        alignSelf: 'center',
        lineHeight: hp(5)
    },

    smallTextContainer: {
        marginTop: hp(5)
    },

    lightText: {
        fontFamily: 'FuturaPTLight',
        color: '#000',
        fontSize: hp(3.1),
        alignSelf: 'center',
        lineHeight: hp(3)
    },

    outerCircle: {
        height: hp(10),
        width: wp(20),
        borderRaduis: wp(20),
        borderBottomStartRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp(2)
    },

    outerNextButton : {
        backgroundColor: '#fff',
        height: hp(6),
        width: wp(6),
        borderRaduis: hp(12),
    },

});


export default OnboardingContent;