import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Alert,Image} from 'react-native';
import React, { useState,useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesome } from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';
DropDownPicker.setListMode("MODAL")


const BusRoute = () => {
  const navigation = useNavigation();
 const [modalVisible, setModalVisible] = useState(true);
  //const [modalVisible, setmodalVisible] = useState(false);
   
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'Mandaveli', value: 'Mandaveli'},
        {label: 'Mylapore', value: 'Mylapore'},
        {label: 'Sathya Studio', value: 'Sathya Studio'},
        {label: 'Adayar Hospital', value: 'Adayar Depo'},
        {label: 'Thiruvanmiyur', value: 'Thiruvanmiyur'},
        {label: 'Palavakkam', value: 'Palavakkam'},
        {label: 'Neelankarai', value: 'Neelankarai'},
        {label: 'VGP', value: 'VGP'},
        
       
      ]);

      const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'Male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female'
        },
        {
          id: '3',
          label: 'Others',
          value: 'Others'
      }
    ]), []);

    const [selectedId, setSelectedId] = useState();

    return (
      <View style={styles.container}>

      <Text style={{fontSize:20,fontWeight:"bold",alignSelf:"center",marginBottom:20}}>Bus Details</Text>

       <View style={{flexDirection:"row"}}>

       <View style={{height:100,width:170,backgroundColor:"#F24C3D",margin:10,borderRadius:15}}>

        <View style={{alignSelf:"center",justifyContent:'center',alignItems:"center",marginTop:25}}>
        <Text style={{fontSize:22,color:"white",fontWeight:"bold"}}>Total Seats</Text>
        <Text style={{fontSize:22,color:"white",fontWeight:"bold"}}>55</Text>
        </View>

      </View>
    <View style={{height:100,width:170,backgroundColor:"#38E54D",margin:10,borderRadius:15}}>
    <View style={{alignSelf:"center",justifyContent:'center',alignItems:"center",marginTop:25}}>
        <Text style={{fontSize:22,color:"white",fontWeight:"bold"}}>Available Seats</Text>
        <Text style={{fontSize:22,color:"white",fontWeight:"bold"}}>30</Text>
        </View>

      </View>
       </View>

       <View >

        <Text style={{fontSize:20,fontWeight:"bold",margin:20,alignSelf:"center"}}>Boarding Point</Text>


        


        <View style={{flexDirection:"row",alignSelf:"center",justifyContent:"space-between"}}>
        <View style={{marginRight:80}}>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>06:00 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>06:30 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>06:45 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>07:00 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>07:15 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>07:30 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>07:50 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>08:15 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>08:45 AM</Text>
          <Text style={{marginLeft:20,marginTop:10,fontWeight:"bold"}}>09:00 AM</Text>
        </View>
        <View>
          <Text style={{marginLeft:20,marginTop:10}}>Mandaveli</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Mylapore</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Sathya Studio</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Adayar Hospital</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Adayar Depo</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Thiruvanmiyur</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Palavakkam</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Nelankarai</Text>
          <Text style={{marginLeft:20,marginTop:10}}>VGP</Text>
          <Text style={{marginLeft:20,marginTop:10}}>Sathyabamma</Text>
        </View>
        </View>


       </View>

       
       <View style={{marginTop:30,zIndex: 100}}>
       <Text style={{fontSize:20,fontWeight:"bold",margin:20,alignSelf:"center"}}>Book your Seat</Text>


       <DropDownPicker
       listMode="SCROLLVIEW"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems} 
            style={{marginBottom:20}}
            dropDownDirection="TOP"
            dropDownMaxHeight={500}
            />
              

        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            
        />
        


        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <View style={{height:50,width:150,backgroundColor:"red",borderRadius:10,marginTop:20,alignSelf:"center"}}>
          <Text style={{alignSelf:"center",marginTop:10,fontSize:18,fontWeight:"bold",color:"white"}}>Book Seat</Text>
        </View>
      </TouchableOpacity>
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

  export default BusRoute;


        