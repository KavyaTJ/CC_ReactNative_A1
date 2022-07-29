import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {Contacts,Albums} from "../firstproject/src/components/Navigators/Topbarnavigator"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Info from './src/Screens/Info';
import Home  from './src/components/Homepage';
import AlbumInfo from './src/Screens/Albuminfo';


const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Info' component={Info} />
                <Stack.Screen name='AlbumInfo' component={AlbumInfo} />
            </Stack.Navigator>
        
           
        </NavigationContainer>
    );
}

export default App;