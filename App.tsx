import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Contacts,Albums} from "../firstproject/src/components/Navigators/Topbarnavigator"

const Tab = createMaterialTopTabNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                
                <Tab.Screen name='Contacts' component={Contacts} />
                <Tab.Screen name='Albums' component={Albums} />
            </Tab.Navigator>
            <StatusBar />
        </NavigationContainer>
    );
}

export default App;