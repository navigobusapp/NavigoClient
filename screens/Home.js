import { View, TextInput, Modal, FlatList, TouchableOpacity, Text ,StyleSheet,Pressable,Dimensions,Button,Image} from 'react-native';
import React, { useState,useRef} from "react";
import { useNavigation } from "@react-navigation/native";
//import MapView, { Marker, Circle } from "react-native-maps";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';






function modalshow(){


  <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{fontWeight:"bold",fontSize:25,color:"black"}}>V-51 Kovilambakkam</Text>

          <View style={{  borderBottomColor: 'grey', borderBottomWidth: StyleSheet.hairlineWidth,marginTop:10}}/>

          <View style={{marginTop:20,marginBottom:30}}>
                <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
          </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Book</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
}

const Home = () => {
  const navigation = useNavigation();

  

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 12.78032802250726,
    longitude: 80.22183998614041,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
});
  // const [friends] = useState([
  //   {
  //     username: "bob",
  //     description: "school friend",
  //     icon: "dog",
  //     location: {
    // latitude: "12.789174481216788"
    //      longitude: "80.22144865609789",
  //       
  //     } , 
  //   },
  //   {
  //     username: "Alex",
  //     description: "Childhood friend",
  //     icon: "dragon",
  //     location: {
        // longitude: "80.21798946473433",
        // latitude: "12.780613259617077"
  //     }, 
  //   },
  //   {
  //     username: "Jack",
  //     description: "Business Partner",
  //     icon: "dove",
  //     location: {
  //       longitude: "80.21280866814878",
  //       latitude: "12.770170476209536"
  //     }, 
  //   }
  // ]);

  

  
















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

    return (
      <View style={styles.container}>
        
            <Text style={{position:"absolute",top:40}}>Srihari</Text>

        <MapView style={styles.map} 
        initialRegion={{
          latitude: 12.873186369084287,longitude: 80.22656614206679,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
      }}
    
      >


        <Marker
          pinColor='red'
          coordinate={{ latitude: 12.78032802250726,longitude: 80.22183998614041,}} 
        >
         

         <Callout style={{width:200,borderRadius:10}} onPress={()=>modalshow}>
            
            <View>
            <Text style={{fontSize:18,fontWeight:"bold"}}>Mandaveli</Text>
            <Text>Bus No: 127</Text>
            <Text>Driver Name: Gowthan</Text>
            </View>
            
          </Callout>

        </Marker>

        {/* latitude: 12.789174481216788,longitude: 80.22144865609789 */}
        <Marker
         
          pinColor='red'
          coordinate={{ latitude: 12.873186369084287,longitude: 80.22656614206679}}
          style={{shadowColor: 'black',
          shadowOpacity: 5,
          shadowRadius: 5,}}
          onCalloutPress={()=>navigation.navigate("BusRoute")}

          
          >

            <View style={{width:70,height:70,borderRadius:60,backgroundColor:"red",opacity:0.25,justifyContent:"center",alignItems:"center",marginLeft:20}}>
            <Image
               source={require('C:/Users/91755/checkbusnew/assets/busicon.png')}
             style={{width: 28, height: 30,opacity:10,borderWidth:2,borderColor:"red",borderRadius:60}}
    //size={50}
    />

            </View>

            <Callout style={{width:200,borderRadius:10}} onPress={()=>modalshow}>
            
              <View>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Mandaveli</Text>
              <Text>Bus No: 127</Text>
              <Text>Driver Name: Gowthan</Text>
              </View>
              
            </Callout>

  
        </Marker>



        <Marker
          
          pinColor='red'
          coordinate={{ latitude: 12.871908345652267,longitude: 80.22663178362136}}
          style={{shadowColor: 'black',
          shadowOpacity: 5,
          shadowRadius: 5,}}
          onCalloutPress={()=>navigation.navigate("BusRoute")}

          
          >
   

        <View style={{width:70,height:70,borderRadius:60,backgroundColor:"red",opacity:0.25,justifyContent:"center",alignItems:"center",marginLeft:20}}>
            <Image
                source={require('C:/Users/91755/checkbusnew/assets/busicon.png')}
                style={{width: 28, height: 30,opacity:10,borderWidth:2,borderColor:"red",borderRadius:60}}
              //size={50}
            />
            </View>

            <Callout style={{width:200,borderRadius:10}} onPress={()=>modalshow}>
            
              <View>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Thiruvanmiyur</Text>
              <Text>Bus No: 57</Text>
              <Text>Driver Name: P Senthil Kumar</Text>
              </View>
              
            </Callout>
            
        </Marker>




        <Marker
           
          pinColor='red'
          coordinate={{ latitude: 12.879640406590227,longitude: 80.2267600953335}}
          style={{shadowColor: 'black',
          shadowOpacity: 5,
          shadowRadius: 5,}}
          onCalloutPress={()=>navigation.navigate("BusRoute")}
          >

            <View style={{width:70,height:70,borderRadius:60,backgroundColor:"red",opacity:0.25,justifyContent:"center",alignItems:"center",marginLeft:20}}>
            <Image
          source={require('C:/Users/91755/checkbusnew/assets/busicon.png')}
            style={{width: 28, height: 30,opacity:10,borderWidth:2,borderColor:"red",borderRadius:60}}
          //size={50}
          />
            </View>

            <Callout style={{width:200,borderRadius:10}} onPress={()=>modalshow}>
            
              <View>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Anakaputhur</Text>
              <Text>Bus No: 126</Text>
              <Text>Driver Name: Vinoth</Text>
              </View>
              
            </Callout>
        </Marker>


      </MapView>
  {/* <Modal visible={dropdownVisible} animationType="slide">
        <View >
        <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",marginTop:10}}>Search List</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{margin:15,backgroundColor:"#e9e7e7",height:70,borderRadius:10,padding:10}}>
                <TouchableOpacity onPress={() => handleSelectOption(item)}>
                <Text style={{fontSize:18}}>{item.name}</Text>
              </TouchableOpacity>

              </View>
            )}
          />
        </View>
      </Modal> */}




        <TextInput
            style={styles.input}
            placeholder="Search Bus"
            value={searchQuery}
            onChangeText={handleSearchQueryChange}
            onFocus={() => setDropdownVisible(true)}
            />
          
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
      // width:'100%',
      // height: '100%'
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
  
        //marginTop: ,
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



      // container: {
      //   backgroundColor: "#fff",
        
      // },
      // mapView: {
      //   position: "absolute",
      //   top: 0,
      //   bottom: 0,
      //   left: 0,
      //   right: 0,
        
      // },
      // circle: {
      //   width: 26,
      //   height: 26,
      //   borderRadius: 50
      // },
      // stroke: {
      //   backgroundColor: "#ffffff",
      //   borderRadius: 50,
      //   width: "100%",
      //   height: "100%",
      //   zIndex: 1
      // },
      // core: {
      //   backgroundColor: "red",
      //   width: 24,
      //   position: "absolute",
      //   top: 1,
      //   left: 1,
      //   right: 1,
      //   bottom: 1,
      //   height: 24,
      //   borderRadius: 50,
      //   zIndex: 2
      // }
  });

  export default Home;