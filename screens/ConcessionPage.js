import React ,{useState,useMemo,useEffect}from 'react'; 
import {View,Text,Image,TouchableOpacity,StyleSheet,Button,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import RadioGroup from 'react-native-radio-buttons-group';
import DropDownPicker from 'react-native-dropdown-picker';
import {collection,addDoc,orderBy,query,onSnapshot,getDocs,docRef,getDoc,doc, QuerySnapshot} from 'firebase/firestore';
import { auth, database } from '../config/firebase';

const ConcessionPage = () => {

    const navigation=useNavigation();

    const [details,setDetails]=useState();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Aadhaar Card', value: 'Aadhaar Card'},
      {label: 'College ID', value: 'College ID'},
      {label: 'Birth Certificate', value: 'Birth Certificate'},
      {label: 'PAN Card', value: 'PAN Card'},  
    ]);

    useEffect(() => {

        const collectionRef = collection(database, 'Users');
        //const q = query(collectionRef, orderBy('time', 'desc'));
      
      const unsubscribe = onSnapshot(collectionRef, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setDetails(
            querySnapshot.docs.map(doc => ({
             name:doc.data().name, 
             mobile:doc.data().mobile, 
             email:doc.data().email
            }))
          );
        });
      return unsubscribe;
      }, []);

      console.log(details);

//       const docRef = doc(database, "Users", "navitest1");
// const docSnap = getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

    const radioButtons = useMemo(() => ([
      {
          id: '1', // acts as primary key, should be unique and non-empty string
          label: 'Elder',
          value: 'Elder'
      },
      {
          id: '2',
          label: 'Women',
          value: 'Women'
      },
      {
        id: '3',
        label: 'Student',
        value: 'Student'
    }
  ]), []);


  function displayalert()
  {
    Alert.alert('Concession Applied Successfully','Verfification in Process');
    navigation.navigate('UserProfile');
  }


  const [selectedId, setSelectedId] = useState();
     

    return(

        <View style={styles.container}>
           <View style={styles.header}>
           <TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
            <FontAwesome name="arrow-left" size={20} color={'grey'}/>
            </TouchableOpacity>
           </View> 

           <View style={styles.subcontainer}>
            <Text style={{fontSize:25,fontWeight:"bold",color:colors.primary}}>Concession Form</Text>

            <Text style={{fontSize:17,marginTop:15,marginBottom:15,fontWeight:"bold"}}>Concession Type</Text>
            
            <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            
            />      

            

            <Text style={{fontSize:17,marginTop:15,marginBottom:15,fontWeight:"bold"}}>Name</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your Name"
           
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={"Srihari"}
            //onChangeText={(text) => setName(text)}
            />

            <Text style={{fontSize:17,marginTop:15,marginBottom:15,fontWeight:"bold"}}>Mobile Number</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your Mobile Number"
           
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={"7550005350"}
            //onChangeText={(text) => setName(text)}
            />

        <Text style={{fontSize:17,marginTop:15,marginBottom:15,fontWeight:"bold"}}>Address</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your Address"
           
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={"Dubai Main Road"}
            //onChangeText={(text) => setName(text)}
            />

            <Text style={{fontSize:17,marginTop:20,marginBottom:15,fontWeight:"bold"}}>Document Proof</Text>
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

<TouchableOpacity style={styles.button} onPress={displayalert}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Apply Now</Text>
      </TouchableOpacity>
            

           </View>

        </View>
    );
}
export default ConcessionPage;

const styles=StyleSheet.create({

    container:{
        marginTop:40,
        // padding:20,
        //backgroundColor:"white"
        flex:1
    }, 
    header:{
        backgroundColor:colors.lightGray, 
        height:40, 
        justifyContent:"center", 
        padding:10
    }, 
    subcontainer:{
        flex:1, 
        backgroundColor:"white",
        padding:15

    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 50,
        //marginTop: 20,
        marginBottom:15,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
      },
      button: {
        backgroundColor:colors.primary,
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
      },
});