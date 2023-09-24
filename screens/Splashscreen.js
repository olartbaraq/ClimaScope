import React, { useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, ReduceMotion, withSpring
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const duration = 1500;


const Splashscreen = () => {

    const defaultAnim = useSharedValue(-300);
    const linear = useSharedValue(300);;

    const animatedDefault = useAnimatedStyle(() => ({
        transform: [{ translateX: defaultAnim.value - 300}],
    }));
    const animatedChanged = useAnimatedStyle(() => ({
        transform: [{ translateX: linear.value + 300}],
    }));
    

    useEffect(() => {
        linear.value = withTiming(-linear.value, {
            duration,
            easing: Easing.inOut(Easing.ease),
            reduceMotion: ReduceMotion.System,
        }),
        defaultAnim.value = withTiming(-defaultAnim.value, {
            duration,
            easing: Easing.inOut(Easing.ease),
            reduceMotion: ReduceMotion.System,
        }),
    
        setTimeout(() => {
            Alert.alert('go Home')
        }, 2000);
    }, []);


    return (
        <>
            <LinearGradient
                style={styles.linearGradient}
                colors={['#F2F4F7', '#BCC8D6']}
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                // useAngle={true}
                // angle={45}
                // angleCenter={{x:0.5,y:0.5}}
            >
                <View style={styles.container}>
                    <Animated.View style={[styles.Text, animatedDefault]}>
                        <Text style={styles.UpperText}>ClimaScope</Text>
                    </Animated.View>

                    <Image 
                    style={styles.image}
                    source={require('../assets/images/Group.png')}
                    />
                    
                    <Animated.View style={[styles.Text, animatedChanged]}>
                        <Text style={styles.LowerText}>Forecast</Text>
                    </Animated.View>
                </View>

            </LinearGradient>
        </>
        
    );
};

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        alignItems: 'center',
    },

    UpperText: {
        fontFamily: 'FuturaPTBold',
        fontSize: hp('5%'),
        marginBottom: hp('-3%')
    },
    LowerText: {
        fontFamily: 'FuturaPTMedium',
        fontSize: hp('3%'),
        marginTop: hp('-5%')
    },

    // image: {
    //     width: wp(100),
    //     height: hp(100),
    //     resizeMode: 'contain',
    // },

    imageContainer: {
        width: 50, // Adjust as needed
        height: 50, // Adjust as needed
    },

});

export default Splashscreen