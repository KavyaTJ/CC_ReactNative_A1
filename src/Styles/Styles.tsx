
import { StyleSheet } from 'react-native';
import React from 'react';
export const styles=StyleSheet.create({

container: {
    width: "100%",
   
    paddingTop: 0,
    marginLeft:8
  },
  listItem: {
    backgroundColor: 'white',
  
    padding: 8,
  },
   name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    paddingLeft:100,
    paddingBottom:-150,
    paddingTop:-40,
    marginTop:-50,
    marginBottom:-60

  },
  number: {
    fontSize: 12,
    color: '#999',
     paddingLeft:100,
     marginTop:-10,
     marginBottom:-10
  
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 18,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    paddingRight:0
  },
  img:{
height:140,
width:195,
alignItems:"center"
  },

containers:{
flexDirection:"row",
flexWrap:"wrap"
  },

card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        margin: 20,
    },

   
    infoText: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize:40,
        color: 'gray',
        alignItems:"center"
    },
    text: {
        marginBottom: 10,
        fontSize:30,
    },
    letters: {
      color: 'white',
      fontWeight: 'bold',
      fontSize:60
    },
    avatars: {
      height: 96,
      width: 96,
      borderRadius: 48,
      backgroundColor: '#e91e63',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:100,
      marginBottom:20
    },
    img1:{
      height:240,
      width:350,
      alignItems:"center",
      justifyContent:"center",
      marginTop:220,
      marginRight:20,margin:20
        },
})
