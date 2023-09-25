import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components';
import Toptab from './Toptab';



const Drawer = createDrawerNavigator();


const Leftdrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Homepage"
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                header: () => null,
                drawerStyle: {
                    backgroundColor: '#2C2D35',
                    width: wp(70),
                },

            }}
        >
            <Drawer.Screen name='Homepage'>
                {(props) => <Toptab {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default Leftdrawer;