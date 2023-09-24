import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import PayBillIcon from 'react-native-vector-icons/Ionicons';
import AlignLeftIcon from 'react-native-vector-icons/Feather';
import NotificationIcon from 'react-native-vector-icons/Ionicons/';
import NotificationIcon2 from 'react-native-vector-icons/Ionicons/';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FileIcon from 'react-native-vector-icons/MaterialIcons';
import DownloadIcon from 'react-native-vector-icons/Feather';
import HelpIcon from 'react-native-vector-icons/Feather';
import PayIcon from 'react-native-vector-icons/MaterialIcons';
import RightIcon from 'react-native-vector-icons/FontAwesome5';
import LeftIcon from 'react-native-vector-icons/FontAwesome5';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import CardIcon from 'react-native-vector-icons/Fontisto';
import PlugIcon from 'react-native-vector-icons/FontAwesome';
import LogOutIcon from 'react-native-vector-icons/MaterialIcons';
import DisconnectIcon from 'react-native-vector-icons/AntDesign';


const Icons = ({name}) => {
    switch (name) {
        case 'arrowright':
            return <ArrowRightIcon name="arrowright" size={30} color="#fff" />
            break;
        // case 'chevron-left':
        //     return <Icon name="chevron-left" size={20} color="#fff" />
        //     break;
        // case 'align-left':
        //     return <AlignLeftIcon name="align-left" size={30} color="#fff" />
        //     break;
        // case 'notifications':
        //     return <NotificationIcon name="notifications" size={25} color="#fff" />
        //     break;
        // case 'notifications-red':
        //     return <NotificationIcon2 name="notifications-sharp" style={styles.vector_logo} size={30} color="#FB6A0F" />
        //     break;
        // case 'home-circle-outline-red':
        //     return <HomeIcon name="home-circle-outline" size={25}  color="#FB6A0F" /> 
        //     break;
        // case 'home-circle-outline-blue':
        //     return <HomeIcon name="home-circle-outline" size={25}  color="#034273" />
        //     break;
        // case 'file-text-red':
        //     return <FileIcon name="history" size={25}  color="#FB6A0F" />
        //     break;
        // case 'file-text-blue':
        //     return <FileIcon name="history" size={25}  color="#034273" />
        //     break;    
        // case 'money-bill-red':
        //     return <PayBillIcon name="paper-plane-outline" size={25}  color="#FB6A0F" />
        //     break;
        // case 'money-bill-blue':
        //     return <PayBillIcon name="paper-plane-outline" size={25}  color="#034273" />
        //     break;
        // case 'account-circle-red':
        //     return <AccountIcon name="account-circle-outline" size={25} color="#FB6A0F" />
        //     break;
        // case 'account-circle-blue':
        //     return <AccountIcon name="account-circle-outline" size={25} color="#034273" />
        //     break;
        // case 'payments':
        //     return <PayIcon name="payments" size={25} color="#034273" />
        //     break;
        // case 'caret-right':
        //     return <RightIcon name="caret-right" size={30} color="#034273" />
        //     break;
        // case 'staff-right':
        //     return <RightIcon name="caret-right" size={30} color="#fff" />
        // break;
        // case 'caret-left':
        //     return <LeftIcon name="caret-left" size={30} color="#034273" />
        //     break;
        // case 'arrowleft':
        //     return <ArrowLeftIcon name="arrowleft" style={styles.arrowLeft} size={17} color="#034273" />
        //     break;
        // case 'arrowleft-big':
        //     return <ArrowLeftIcon name="arrowleft" size={30} color="#034273" />
        //     break;
        // case 'close':
        //     return <CloseIcon name="close" style={styles.close} size={35} color="#fff" />
        //     break;
        // case 'download':
        //     return <DownloadIcon name="download" style={styles.download} size={25} color="#fff" />
        //     break;
        // case 'help-red':
        //     return <HelpIcon name="help-circle" size={25} color="#FB6A0F" />
        //     break;
        // case 'help-blue':
        //     return <HelpIcon name="help-circle" size={25} color="#034273" />
        //     break;
        // case 'mastercard':
        //     return <CardIcon name="mastercard" size={25} color="#FB6A0F" />
        //     break;
        // case 'plug':
        //     return <PlugIcon name="plug" size={25} color="#034273" />
        //     break;
        // case 'logout':
        //     return <LogOutIcon name="logout" size={25} color="#fff" />
        //     break;
        // case 'disconnect':
        //     return <DisconnectIcon name="disconnect" size={25} color="#034273" />
        //     break;
        // case 'send-circle-outline':
        //     return <SendIcon name="send-circle-outline" size={40} color="#fff" />
        //     break;

        default:
            return <Icon name="chevron-left" size={30} color="#0D0" />

    }
}

const styles = StyleSheet.create({
    // arrowRight: {
    //     position: 'absolute',
    //     top: 3,
    //     right: -10,
    // },
    // close: {
    //     paddingVertical: 13,
    //     marginLeft: 15,
    //     backgroundColor: '#034273',
    // },
    // arrowLeft: {
    //     position: 'absolute',
    //     top: 29,
    //     marginLeft: 15,
    // },


});

export default Icons;