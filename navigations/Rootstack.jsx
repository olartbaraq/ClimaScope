import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Leftdrawer from './Leftdrawer';
import { Splashscreen, Onboarding } from '../screens';




const Stack = createStackNavigator();


const Rootstack = () => {

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          border: "transparent",
          background: '#484B5B',
        }
    }

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