import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const Leftdrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Homepage"
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                header: () => null,
                drawerStyle: {
                    backgroundColor: '#fff',
                    width: windowWidth * 0.4,
                    height: windowHeight,
                },

            }}
        >
            <Drawer.Screen name='Homepage' component={Homepage}/>
        </Drawer.Navigator>
    );
};

export default Leftdrawer