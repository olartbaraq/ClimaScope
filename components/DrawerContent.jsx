import React from 'react'
import Icons from '../utils/Icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DrawerContent = () => {

    const links = [
        {id:1, name: 'Notifications', icon_name: 'notifications'},
        {id:2, name: 'Settings', icon_name: 'settings'},
        {id:3, name: 'Feedback', icon_name: 'feedback'},
        {id:4, name: 'Share', icon_name: 'share'},
        {id:5, name: 'Location', icon_name: 'location'},
        
    ]
  return (
    <div>DrawerContent</div>
  )
}

export default DrawerContent