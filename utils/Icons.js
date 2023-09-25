import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import NotificationIcon from 'react-native-vector-icons/Ionicons/';
import SettingsIcon from 'react-native-vector-icons/Ionicons/';
import FeedbackIcon from 'react-native-vector-icons/MaterialIcons';
import CloseIcon from 'react-native-vector-icons/Feather';
import ShareIcon from 'react-native-vector-icons/Entypo';
import LocationIcon from 'react-native-vector-icons/FontAwesome5';


const Icons = ({name}) => {
    switch (name) {
        case 'arrowright':
            return <ArrowRightIcon name="arrowright" size={30} color="#fff" />
            break;

        case 'notifications':
            return <NotificationIcon name="notifications" size={30} color="#fff" />
            break;

        case 'settings':
            return <SettingsIcon name="settings" size={30} color="#fff" />
            break;

        case 'feedback':
            return <FeedbackIcon name="feedback" size={30}  color="#fff" />
            break;

        case 'close':
            return <CloseIcon name="x" size={30}  color="#fff" />
            break;

        case 'share':
            return <ShareIcon name="share" size={30}  color="#fff" />
            break;

        case 'location':
            return <LocationIcon name="search-location" size={30}  color="#fff" />
            break;

        default:
            return <Icon name="chevron-left" size={30} color="#0D0" />

    }
}

const styles = StyleSheet.create({


});

export default Icons;