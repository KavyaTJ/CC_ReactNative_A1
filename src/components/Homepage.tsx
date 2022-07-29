import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Contacts } from "./Navigators/Topbarnavigator";
import { Albums } from "./Navigators/Topbarnavigator";

const Tab = createMaterialTopTabNavigator();

 function Home(){
    return(
 <Tab.Navigator>
    <Tab.Screen name='Contacts' component={Contacts} />
    <Tab.Screen name='Albums' component={Albums} />
</Tab.Navigator>
    );
}
export default Home;