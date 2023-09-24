import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import BackgroundColor from 'react-native-background-color';
import { Splashscreen } from '../screens';




const Stack = createStackNavigator();


const Rootstack = () => {

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            border: "transparent",
            background: '#fff',
        }
    }
    useEffect(() => {
        BackgroundColor.setColor('#FFFFFF');
    }, []);


    return (
    <>
        <NavigationContainer theme={theme}>
                <Stack.Navigator
                initialRouteName='Splashscreen'
                screenOptions={{
                    header: () => null
                }}
                >
                    <Stack.Screen name='Splashscreen' component={Splashscreen}/>

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Rootstack;