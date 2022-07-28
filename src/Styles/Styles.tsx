
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
   
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
   name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    alignItems:"center",
    paddingLeft:40

  },
  number: {
    fontSize: 12,
    color: '#999',
     paddingLeft:150
  
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
    marginLeft:10
  },
  img:{
height:140,
width:195,
alignItems:"center"
  },
  containers:{

flexDirection:"row",
flexWrap:"wrap"
  }
})
