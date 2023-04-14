import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import icon from '../../../../assets/icon.png'
import CustomTable from "./calculatorFolder/CustomTable";

const Calcu1 = ({navigation, route}) => {

 const { itemId, clientName , pricePTon} = route.params;

   
    const [prName, setprName] = useState("");
    const [password, setPassword] = useState("");
    console.log("Calcu1")
   // console.log(itemId)
    return (
        //
            <View style={styles.main} >
        
        {
            //start of app
        }
        
        {
            //start of header
        }
                <View style={styles.header}>

{
    //start of project name
}
                <View style={styles.prName}>
                <Text style={styles.prNameText}>{clientName}</Text>
                </View>
                {
    //start of logo
}
                <View style={styles.logo}>

                <Image style={styles.logoImage} source={icon} />
                </View>
                </View>
        
        
        {
            //start of grid
        }
        <View style={styles.grid}>
            {
                //i want to add a grid of five by four
            }
            <CustomTable pricePTon={pricePTon}/>
            </View>

            {
                //start of btn
            }
            <View style={styles.button}>
            <Button title="דוחות" onPress={() => navigation.navigate('Calcu2',  {
                ItemId: 86,
                clientName: clientName,
                pricePTon: pricePTon,
            })} />
                </View>
            
                 </View>
//end of app
    );
  }
  const styles = StyleSheet.create({
      header:{
        flexDirection:'row',
          flex:1,
          resizeMode:'contain',
          height:'100%',
          width:'100%',
      },
      main:{
          flex:1,
          backgroundColor:'#3a6ea5',
          flexDirection:'column',
      },
        prName:{
            flex:8,
            borderWidth:2,
            alignItems:'center',
            justifyContent:'center',
        },
        prNameText:{
            fontSize:30,
            color:'white',
        },
        logoImage:{
            resizeMode:'contain',
            height:'100%',
            width:'100%',

        },
      logo:{


          flex:3,
          borderWidth:2,
          
      },
      grid:{
            flex:8,
            borderWidth:2,
            flexDirection:'column',
            
        },
      button:{
          flex:2,
          borderWidth:2,
      },
  
  
  
  });
  
export default Calcu1;