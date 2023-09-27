import Humid from './humid.svg'
import PartlyCloudy from './partlyCloudy.svg'
import Sunny from './Sunny.svg'
import Sunset from './sunset.svg'
import Rain from './Rain.svg'
import Clear from './clear.svg'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Svgs = ({name, width, height}) => {
    switch (name) {
        case 'cloudy':
            return <PartlyCloudy width={width} height={height}/>
            break;

        case 'sunny':
            return <Sunny width={width} height={height}/>
            break;

        case 'humid':
            return <Humid width={width} height={height}/>
            break;

        case 'sunset':
            return <Sunset width={width} height={height}/>
            break;

        case 'rain':
            return <Rain width={width} height={height}/>
            break;

        case 'clear':
            return <Clear width={width} height={height}/>
            break;

        default:
            return <Sunny width={wp(10)} height={hp(10)}/>
    }
};

export default Svgs;