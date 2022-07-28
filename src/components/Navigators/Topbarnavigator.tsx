import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View,Text, StatusBar, SafeAreaView, FlatList,Image ,TouchableOpacity} from 'react-native';
// import{Data} from "../Contacts"
import { StyleSheet } from 'react-native';
import { styles } from '../../Styles/Styles';

const Tab = createMaterialTopTabNavigator();
const onPress = () => alert("hello")
export function Contacts(){
type MaterialTopTabParams = {
  Albums: undefined;
  Contacts: undefined;
  
};  
const DATA = [
    {
      name: 'Alice',
      number: '9876567896',
    },
    {
      name: 'Joe',
      number: '9008678954',
    },
    {
       name: 'Kavya',
      number: '6345343489',
    },
     {
       name: 'Karan',
      number: '8989767890',
    },
     {
       name: 'Daniel',
      number: '8978900678',
    },
     {
       name: 'Shravya',
      number: '787454655',
    },
        {
      name: 'Alice',
      number: '9876567896',
    },
    {
      name: 'Joe',
      number: '9008678954',
    },
    {
       name: 'Kavya',
      number: '6345343489',
    },
     {
       name: 'Karan',
      number: '8989767890',
    },
     {
       name: 'Daniel',
      number: '8978900678',
    },
     {
       name: 'Shravya',
      number: '787454655',
    },
  ]
  
return (
      <SafeAreaView >
      <View style={styles.container}>
     
        <FlatList
          data={DATA}
          renderItem={({item,index})=>{
            return <Text onPress={onPress} style={styles.listItem}>
             <View style={styles.avatar}>
        <Text  style={styles.letter}>{item.name.slice(0, 1).toUpperCase()}</Text>
      </View>
      <View>
              <Text  style={styles.name}>{item.name}</Text>
            <Text style={styles.number}>{item.number}</Text></View>
            </Text>
          }}
          keyExtractor={(item ,index)=> index.toString()}
        />
        </View>
       
      </SafeAreaView>
    );

}
export function Albums(){
    return(
        <View style={styles.containers}>
     <Image 
 style={styles.img}
  source={{
    uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    
  }}
/>
 <Image
style={styles.img}
  source={{
    uri: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=916",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*",
    
  }}
/>
<Image resizeMode="stretch"
style={styles.img}
  source={{
    uri: "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.webp",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh_HnP7RVz79uZBY2BOc3At_dRQcqsGIdRg&usqp=CAU",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjG8xC6W_MbW_8q1qKeKQ1ifXyluIJhJ0sQ&usqp=CAU",
    
  }}
/>
  <Image 
 style={styles.img}
  source={{
    uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    
  }}
/>
 <Image
style={styles.img}
  source={{
    uri: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=916",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*",
    
  }}
/>
<Image resizeMode="stretch"
style={styles.img}
  source={{
    uri: "https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.webp",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh_HnP7RVz79uZBY2BOc3At_dRQcqsGIdRg&usqp=CAU",
    
  }}
/>
<Image
style={styles.img}
  source={{
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjG8xC6W_MbW_8q1qKeKQ1ifXyluIJhJ0sQ&usqp=CAU",
    
  }}
/>
</View>
 
    )

}
function MyTabs() {
  return (
    <SafeAreaView>    <Tab.Navigator>
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{ tabBarLabel: 'Contacts' }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
    </SafeAreaView>  
  );
}


