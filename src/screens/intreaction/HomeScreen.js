import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";import React from 'react'
  import icon from '../../../assets/icon.png'

const HomeScreen = ({navigation}) => {
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
    //start of button
        }
        <View style={styles.buttons}>
           <View styles={styles.prbtn}> 
            <Button  title='רשימת פרוייקטים' onPress={()=>navigation.navigate('ProjectList')}/>
            </View>
            <Button styles={styles.bnbtn} title='בנה פרוייקט חדש' onPress={()=>navigation.navigate('NewProject')}/>
            <Button styles={styles.stnbtn} title='הגדרות' onPress={()=>navigation.navigate('Login')}/>

        </View>
         </View>
  )
}
const styles = StyleSheet.create({
    prbtn:{
        marginVertical:'5%',
        borderWidth:2,
        
    },
    bnbtn:{
        borderWidth:2,

    },
    stnbtn:{},
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
        borderWidth:2,
        
    },
   
    buttons:{
        flex:5,
        borderWidth:2,
        flexDirection:'column',
        justifyContent:'space-evenly',
    },



});

export default HomeScreen