import Humid from './humid.svg'
import PartlyCloudy from './partlyCloudy.svg'
import Sunny from './Sunny.svg'
import Sunset from './sunset.svg'
import Rain from './Rain.svg'
import Clear from './clear.svg'
import React from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Svgs = ({ name, width, height, style }) => {
    // Define a lookup object to map weather conditions to components
    const weatherIcons = {
      'cloudy': <PartlyCloudy />,
      'clouds': <PartlyCloudy />,
      'partly cloudy': <PartlyCloudy />,
      'sunny': <Sunny />,
      'humid': <Humid />,
      'overcast': <Clear />,
      'sunset': <Sunset />,
      'rain': <Rain />,
      'light rain, haze': <Rain />,
      'light rain': <Rain />,
      'haze': <Rain />,
      'clear': <Clear />,
    };
  
    // Normalize the name to lowercase for case-insensitive comparison
    const normalizedName = name.toLowerCase();
  
    // Use the lookup object to retrieve the component, or use a default component
    const weatherIcon = weatherIcons[normalizedName] || <Sunny width={wp(30)} height={hp(30)} />;
  
    return React.cloneElement(weatherIcon, { style, width, height });
  };
  

export default Svgs;