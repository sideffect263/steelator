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
import icon from '../../../assets/icon.png'


const LoginScreen = ({navigation}) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
            //start of input
        }
                <View style={styles.input}>
        
                    {
                        //start of email
                    }
                    <View style={styles.inputView}>
                        
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="black"
                    onChangeText={(email) => setEmail(email)}
                  /> 
                  <View style={styles.inputInfograph}>
                    <Text>email</Text>
                    </View>
                  </View>
                    {
                        //start of password
                    }
                    <View style={styles.inputView}>
                        
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                  /> 
                  <View style={styles.inputInfograph}>
                    <Text>email</Text>
                    </View>
                  </View>
        
        
                </View>
        
                {
            //start of button
                }
                <View style={styles.button}>
                    <Button title='Login' onPress={()=>navigation.navigate('Home')}/>
        
                </View>
                 </View>
    );
  }
  const styles = StyleSheet.create({
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
        maxHeight:'175px',

          marginBottom:'1%',
          flex:3,
          borderWidth:2,
          
      },
      inputView: {
          flexDirection: "row",
          marginVertical:'2%',
          marginTop:'5%',
          backgroundColor: "#6096ba",
          borderRadius: '0%',
          width: "70%",
          alignItems: "center",
        },
          inputInfograph:{
              flex:1,
              borderWidth:2,
              alignItems:'center',
              justifyContent:'center',
              marginHorizontal:'5%',
          },
        TextInput: {
          backgroundColor: "#a3cef1",
          height: '100%',
          flex: 1,
          padding: '2%',
          marginHorizontal:'5%',
        },
      input:{
          marginBottom:'1%',
          alignItems:'center',
          flex:8,
          borderWidth:2,
      },
      button:{
          flex:5,
          borderWidth:2,
      },
  
  
  
  });
  
export default LoginScreen