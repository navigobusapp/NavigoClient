import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Dimensions,Button,Image} from 'react-native';
import React, {  useEffect, useState, useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
//import MapView, { Marker, Circle } from "react-native-maps";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {collection,orderBy,query,onSnapshot,} from "firebase/firestore";
import { auth, database } from "../config/firebase";

const Buspoint = ({lat,long,busname,busno,Drivername,seatscount}) => {
    const navigation = useNavigation();

    return (

        <Marker
         
          pinColor='red'
          coordinate={{ latitude: lat,longitude: long}}
          style={{shadowColor: 'black',
          shadowOpacity: 5,
          shadowRadius: 5,}}
          onCalloutPress={()=>navigation.navigate("BusRoute",{seat:seatscount})}

          
          >

            <View style={{width:70,height:70,borderRadius:60,backgroundColor:"red",opacity:0.25,justifyContent:"center",alignItems:"center",marginLeft:20}}>
            <Image
               source={require('../assets/busicon.png')}
             style={{width: 28, height: 30,opacity:10,borderWidth:2,borderColor:"red",borderRadius:60}}
    //size={50}
    />

            </View>

            <Callout style={{width:200,borderRadius:10}}>
            
              <View>
              <Text style={{fontSize:18,fontWeight:"bold"}}>{busname}</Text>
              <Text>Bus No: {busno}</Text>
              <Text>Driver Name: {Drivername}</Text>
              </View>
              
            </Callout>

  
        </Marker>
                
           
    );
    };
    export default Buspoint;