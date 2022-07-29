import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Styles/Styles'
import { Card, Avatar, AirbnbRating } from "react-native-elements"


//@ts-ignore

export default function Info({route}): JSX.Element {

    

    return (
        <View>
            <Card containerStyle={styles.card} wrapperStyle={{}}>
            <Text style={styles.infoText}>CONTACT DETAILS</Text>
            <View style={styles.avatars}>
        <Text  style={styles.letters}>{route.params?.item.name.slice(0, 1).toUpperCase()}</Text>
      </View>
                <Card.Divider />
                <View>
                    <Text style={styles.text}>Name: {route.params?.item.name}</Text>
                    <Text style={styles.text}>Number: {route.params?.item.number}</Text> 
                </View>
            </Card>
        </View>
    )
}