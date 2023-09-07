import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Dimensions,Button,Image,ActivityIndicator} from 'react-native';
import React, {  useEffect, useState, useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
//import MapView, { Marker, Circle } from "react-native-maps";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {collection,orderBy,query,onSnapshot,} from "firebase/firestore";
import { auth, database } from "../config/firebase";
import * as Location from 'expo-location';
import Buspoint from '../components/Buspoint';







// function modalshow(){


//   <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//           setModalVisible(!modalVisible);
//         }}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//           <Text style={{fontWeight:"bold",fontSize:25,color:"black"}}>V-51 Kovilambakkam</Text>

//           <View style={{  borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth,marginTop:10}}/>

//           <View style={{marginTop:20,marginBottom:30}}>
//                 <DropDownPicker
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setItems}
//             />
//           </View>
//             <Pressable
//               style={[styles.button, styles.buttonClose]}
//               onPress={() => setModalVisible(!modalVisible)}>
//               <Text style={styles.textStyle}>Book</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
// }

const Home = () => {
  const navigation = useNavigation();
  const [currloc,setcurrloc]=useState(
    {
      
      latitude: 12.873048234353224,
      longitude: 80.22608732422897,
    
    }
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  

  const [location, setLocation] = useState(
    [{
      busname: "Anakaputhur",
      busno: "126",
      drivername: "Vinoth",
      lattitude: 12.879640406590227,
      longitude: 80.2267600953335,
    }]
  );


  const [errorMsg, setErrorMsg] = useState(null);

 
  const [mapRegion, setMapRegion] = useState({
    latitude: 12.78032802250726,
    longitude: 80.22183998614041,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
});

const collectionRef = collection(database, "BusLocations");
useLayoutEffect(() => {
  
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    setLocation(
      querySnapshot.docs.map((doc) => ({
        lattitude:doc.data().lattitude, 
        longitude:doc.data().longitude,
        busname:doc.id,
        busno:doc.data().busno, 
        drivername:doc.data().Drivername,
        seatcount:doc.data().seatcount

      }))
    )
     

    console.log(querySnapshot.size);
  });

  return unsubscribe;
}, []);

console.log(location);





  const [modalVisible, setModalVisible] = useState(true);
  //const [modalVisible, setmodalVisible] = useState(false);

      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'UTI bank', value: 'UTI bank'},
        {label: 'Sadharsivam Nagar', value: 'Sadharsivam Nagar'},
        {label: 'Kaiveli', value: 'Kaiveli'},
        {label: 'Ram Nagar', value: 'Ram Nagar'}
       
      ]);


    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(true);
    const [data, setData] = useState([
        { id: 1, name: 'Kovilambakkam' },
        { id: 2, name: 'Chrompet' },
        { id: 3, name: 'MEPZ' },
      ]);

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
      };
    
      const handleSelectOption = (option) => {
        setSearchQuery(option);
        setDropdownVisible(false);
        //set
      };

      if (!location) {
        return (
          <View style={[styles.container1, styles.horizontal]}>
            <ActivityIndicator size="large" color="#1C64D1" />
       </View>
        );
      }

      useEffect(() => {
        // Function to request permission and get initial location
        const getLocationAsync = async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          // Get the initial location
          const initialLocation = await Location.getCurrentPositionAsync({});
          setcurrloc(initialLocation.coords);
        };
    
        getLocationAsync();
    
        // Set up a subscription to receive location updates
        const locationSubscription = Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000, // Update location every 5 seconds
          },
          (newLocation) => {
            setcurrloc(newLocation.coords);
          }
        );
    
        // Clean up the subscription when the component is unmounted
        return () => locationSubscription.remove();
      }, []);




    return (
      <View style={styles.container}>

        {isLoading ? 
        
        <View style={styles.container}>
      <ActivityIndicator size="large" />
      </View>
        
        : 
        
       

    <MapView style={styles.map} 
        initialRegion={{
          latitude: currloc.latitude,longitude: currloc.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
      }}
    
      >


        <Marker
          pinColor='red'
          coordinate={{ latitude: currloc.latitude,longitude: currloc.longitude}} 
        >
         

         <Callout style={{width:200,borderRadius:10}}>
            
            <View>
            <Text>My Location</Text>
            </View>
            
          </Callout>

        </Marker>


        {location?.map((value, key) => (
          
          // onPress={()=>navigation.navigate('BusRoute',{place:value.name,time:value.time,price:value.price})}
          // onPress={() => navigation.navigate("ContactInfo",{price:value.price,place:value.name})}
          <TouchableOpacity
            key={key}
            onPress={{}}>

           
            <Buspoint lat={value.lattitude} long={value.longitude} busname={value.busname} busno={value.busno} Drivername={value.drivername} seatscount={value.seatcount}/>
          </TouchableOpacity>
        ))}
        {/* <Buspoint lat={12.789174481216788} long={80.22144865609789} busname={"Mandaveli"} busno={"99"} Drivername={"Chandru"}/> */}
 


      </MapView>



       

  



        
        
        }  

        {isLoading ? 
        
        

      <View>
      <ActivityIndicator size="large"/>
      </View>
        :

        <View>
        <TextInput
      style={styles.input}
      placeholder="Search Bus"
      value={searchQuery}
      onChangeText={handleSearchQueryChange}
      onFocus={() => setDropdownVisible(true)}
      /> 
      </View> 
        
        
        }
        
        
            {/* <Text style={{position:"absolute",top:40}}>Srihari</Text> */}

            




        
          
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      flex: 1,
      //position:"absolute"
      position: 'absolute', 
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    input: {
         //position:"relative",
        marginTop:50,
        backgroundColor: "#F6F7FB",
        height: 50,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
        width:"90%", 
        alignSelf:"center"
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      mapOverlay: {
        position: "absolute",
        bottom: 50,
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderRadius: 5,
        padding: 16,
        left: "25%",
        width: "50%",
        textAlign: "center"
      },


    modalView: {
       // marginTop: "10%",
        width:"90%",
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        elevation: 20,
      },
      button: {
        borderRadius: 10,
        padding: 10,
    
      },
      buttonOpen: {
        backgroundColor: 'red',
      },
      buttonClose: {
        backgroundColor: 'red',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },




      bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
      },
      // Arrow below the bubble
      arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
      },
      arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
      },
      container1: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }



    
  });

  export default Home;

  // <Marker
           
  //         pinColor='red'
  //         coordinate={{ latitude: 12.879640406590227,longitude: 80.2267600953335}}
  //         style={{shadowColor: 'black',
  //         shadowOpacity: 5,
  //         shadowRadius: 5,}}
  //         onCalloutPress={()=>navigation.navigate("BusRoute")}
  //         >

  //           <View style={{width:70,height:70,borderRadius:60,backgroundColor:"red",opacity:0.25,justifyContent:"center",alignItems:"center",marginLeft:20}}>
  //           <Image
  //         source={require('C:/Users/91755/checkbusnew/assets/busicon.png')}
  //           style={{width: 28, height: 30,opacity:10,borderWidth:2,borderColor:"red",borderRadius:60}}
  //         //size={50}
  //         />
  //           </View>

  //           <Callout style={{width:200,borderRadius:10}} onPress={()=>modalshow}>
            
  //             <View>
  //             <Text style={{fontSize:18,fontWeight:"bold"}}>Anakaputhur</Text>
  //             <Text>Bus No: 126</Text>
  //             <Text>Driver Name: Vinoth</Text>
  //             </View>
              
  //           </Callout>
  //       </Marker>