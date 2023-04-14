import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import icon from '../../../assets/icon.png'


iniData:{
        
}
const NewProject = ({navigation}) => {


const startClacu = () => {  
    console.log("startClacu")
    console.log(clientName)
    navigation.navigate('Calcu1',  { 
        ItemId: 86,
        clientName: clientName,
        pricePTon: pricePTon,
        
  
}) 
    }

    const [clientName, setclientName] = useState("מזמין עבודה");
    const [jobLocation, setjobLocation] = useState("מיקום");
    const [pricePTon, setpricePTon] = useState("מחיר קונס' לטון");
    const [pricePColor, setpricePColor] = useState("מחיר לצבע");



    return (

        //
            <View style={styles.main} >
        {
            //start of app
        }
        

        {
            //start of logo
        }
                <View style={styles.logo}>
                <Image style={styles.image} source={icon} />
                </View>
        

        {
            //start of inputs
        }
        <View style={styles.inputs}>
            {
                //i want to add five input fields
            }
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder={clientName} placeholderTextColor="black" onChangeText={(clientName) => setclientName(clientName)}/>
                <View style={styles.inputInfograph}>
                    <Text>שם הלקוח</Text>
                </View>
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder={jobLocation} placeholderTextColor="black" onChangeText={(jobLocation) => setjobLocation(jobLocation)}/>
                <View style={styles.inputInfograph}>
                    <Text>מיקום העבודה</Text>
                    </View>
                    </View>
                    <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder={pricePTon} placeholderTextColor="black" onChangeText={(pricePTon) => setpricePTon(pricePTon)}/>
                <View style={styles.inputInfograph}>
                    <Text>מחיר קונס' לטון</Text>
                    </View>
                    </View>
                    <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder={pricePColor} placeholderTextColor="black" onChangeText={(pricePColor) => setpricePColor(pricePColor)}/>
                <View style={styles.inputInfograph}>
                    <Text>מחיר לצבע</Text>
                    </View>
                    </View>

            </View>
            

                {
            //start of button
                }

                <View style={styles.buttons}>
                  <Button styles={styles.stnbtn} title='התחל בחישוב' onPress={startClacu}/>
                  <Button styles={styles.stnbtn} title='בחזרה' onPress={()=>navigation.navigate('ProjectList')}/>
        
                 </View>
                </View>
          )
        }

        const styles = StyleSheet.create({
            inputs:{
                flex:10,
                textAlign:'right',
                        },
            image:{
                resizeMode:'contain',
                height:'100%',
                width:'100%',
            },
            main:{
                flex:1,
                backgroundColor:'#3a6ea5',
                flexDirection:'column',
            },
            logo:{
                marginBottom:'1%',
                maxHeight:'150px',
                flex:3,
                
            },
            inputView: {
                flexDirection: "row",
                flex:1,
                justifyContent:'space-evenly',
                marginVertical: 10,

            },
            inputInfograph:{
                flex:3,
                borderWidth:2,
                justifyContent:'center',
                alignItems:'center',
            },
            TextInput:{
                flex:7,
                borderWidth:2,
                justifyContent:'center',
                alignItems:'center',
                textAlign:'right',
                backgroundColor:'#8b8c89',
            },
            buttons:{
                flex:4,
                borderWidth:2,
                flexDirection:'column',
                justifyContent:'space-evenly',
            },
        
        
        
        });
        

export default NewProject