import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import BackgroundColor from 'react-native-background-color';
import Leftdrawer from './Leftdrawer';
import { Splashscreen, Onboarding } from '../screens';




const Stack = createStackNavigator();


const Rootstack = () => {

    return (
    <>
        <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator
                initialRouteName='Splashscreen'
                screenOptions={{
                    header: () => null
                }}
                >
                    <Stack.Screen name='Splashscreen' component={Splashscreen}/>

                    <Stack.Screen
                        name='Onboarding'
                    >
                        {(props) => <Onboarding {...props} />}
                    </Stack.Screen>

                    <Stack.Screen name='Leftdrawer' component={Leftdrawer}/>

                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Rootstack;