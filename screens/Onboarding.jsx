import React from 'react'
import { StyleSheet } from 'react-native'
import { OnboardingContent } from '../components'
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Onboarding = () => {

    const onboardingImage1 = require(`../assets/images/Bitmap.png`)
    const onboardingImage2 = require(`../assets/images/Bitmap1.png`)
    const onboardingImage3 = require(`../assets/images/Bitmap2.png`)
    const onboardingImage4 = require(`../assets/images/Bitmap3.png`)

    return (
        <>
            <Swiper style={styles.wrapper} 
                autoplay={true}
                autoplayTimeout={2.5}
                removeClippedSubviews={false}
                dotStyle={{
                    backgroundColor: '#000',
                    width: wp(2),
                    height: hp(1),
                    borderRadius: 5,
                    }}
                    activeDotStyle={{
                        width: wp(2),
                        height: hp(1),
                        borderRadius: 5,
                        backgroundColor: '#FFC100'
                    }}
                    paginationStyle={styles.pagination}
            >
                <OnboardingContent image={onboardingImage1} boldText1={'Detailed Hourly'} lightText1={'Get in- depth weather'} boldText2={'Forecast'} lightText2={'information.'} />

                <OnboardingContent image={onboardingImage2} boldText1={'Real-Time'} lightText1={'Watch the progess of the'} boldText2={'Weather Map'} lightText2={'precipitation to stay informed.'} />

                <OnboardingContent image={onboardingImage3} boldText1={'Weather Around'} lightText1={'Add any location you want and'} boldText2={'the World'} lightText2={'swipe easily to change.'} />

                <OnboardingContent image={onboardingImage4} boldText1={'Share Weather'} lightText1={'Post to your social'} boldText2={'Information'} lightText2={'media your weather information.'} />

            </Swiper>
        </>
    );
};

const styles = StyleSheet.create({
   
});

export default Onboarding;