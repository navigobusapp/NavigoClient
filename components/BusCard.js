import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Alert,Image} from 'react-native';
import React, { useState,useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';


const BusCard = ({area,time,busno,drivername}) => {
 

    return (
      
<View style={{height:100,backgroundColor:colors.primary,marginTop:20,borderRadius:10,elevation:4,flexDirection:"row",justifyContent:"space-around"}}>

  <View style={{margin:20}}>
  <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>{area}</Text>
  <Text style={{fontWeight:'400',color:'white'}}>Driver Name : {drivername}</Text>
 
  </View>

  <View style={{height:"70%",width:1,backgroundColor:"white",alignSelf:"center"}}>

  </View>

  <View style={{margin:18,alignSelf:"center",}}>
  <Text style={{fontSize:30,fontWeight:"bold",color:"white"}}>{busno}</Text>
  
  </View>

</View>
    );
  };
  
  const styles = StyleSheet.create({

  container:{
    flex:1, 
    marginTop:50,
    padding:20,

  },






  
  });

  export default BusCard;


        