import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Alert,Image, ScrollView} from 'react-native';
import React, { useState,useMemo,useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';
import { auth, database } from "../config/firebase";
import * as Location from 'expo-location';
import { getAuth} from "firebase/auth";
import {collection,addDoc,orderBy,query,onSnapshot,setDoc,doc,getDoc,where, updateDoc} from 'firebase/firestore';
import colors from '../colors';
import RadioGroup from 'react-native-radio-buttons-group';
import BusCard from '../components/BusCard';



const BusHistory = ({route}) => {
  const navigation = useNavigation();
  const [search,setsearch]=useState('');
  //const [item,setitem]=useState('');

  const [busdetails,setbusdetails]=useState([]);

  const filteredData = busdetails.filter((item) =>
  item.route.toLowerCase().includes(search.toLowerCase())
);

  const collectionRef = collection(database, 'BusLocations');
    useLayoutEffect(() => {

        const q = query(collectionRef);
        const unsubscribe = onSnapshot(q, querySnapshot => {
          setbusdetails(
            querySnapshot.docs.map(doc => 
              (
              {
                route:doc.data().route,
                visible:doc.data().visible, 
                busno:doc.id,
                drivername:doc.data().Drivername

            }))
          ),
          
          
          console.log(querySnapshot.size);
        });        
      
      return unsubscribe;
      }, 
      
      []); 


    return (
      <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"bold"}}>Today's Buses </Text>

        <TextInput
      style={styles.input}
      placeholder="Search Bus"
      value={search}
      onChangeText={setsearch}
      // onFocus={() => setDropdownVisible(true)}
      /> 
        <ScrollView>
        {
      filteredData.map((value,key)=>   
      
       {
        if(value.visible){
          return(
            <BusCard area={value.route}  busno={value.busno} status={value.visible} key={key} drivername={value.drivername}/>
          )
        }
       }
        
     
        
      )
      }
        {/* <BusCard area="Siruseri" time="07:00 AM" busno="33"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/>
        <BusCard area="Mandaveli" time="06:00 AM" busno="102"/> */}
        </ScrollView>

      </View>
    );
  };
  
  const styles = StyleSheet.create({

  container:{
    flex:1, 
    marginTop:50,
    padding:20,

  },
  input: {
    //position:"relative",
   marginTop:20,
   backgroundColor: "#F6F7FB",
   height: 50,
   fontSize: 16,
   borderRadius: 10,
   padding: 12,
   //width:"95%", 
   borderWidth:0.5,
   borderColor:'grey'
   //alignSelf:"center"
 },






  
  });

  export default BusHistory;


        