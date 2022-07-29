import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Styles/Styles'
import { Card, Avatar, AirbnbRating } from "react-native-elements"


//@ts-ignore

export default function AlbumInfo({route}): JSX.Element {

    

    return (
        <View>
         <Image 
 style={styles.img1}
  source={{
    uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    
  }}
/>
        </View>
    )
}