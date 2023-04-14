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
  Pressable,
} from "react-native";
import TableLIne from "./TableLIne";

var tableData=    [
    {
        totalCost: 0,
        amount: 0,
        profile: 'profile',
        index: 1,
    },
]




const CustomTable = ({pricePTon}) => {

  const [filterdData, setFilterdData] = useState(tableData);

  const [totalCost, settotalCost] = useState({amount}*{profile});
    const [amount, setAmount] = useState({amount});
    const [profile, setProfile] = useState({profile});

  const addLine=()=>{
    console.log('add line')
    tableData.push({
        totalCost: 0,
        amount: 0,
        profile: 0,
        index: tableData.length+1,
    })
    setFilterdData([...tableData])
    }
    const removeLine=()=>{
        console.log('remove line')
        tableData.pop()
        setFilterdData([...tableData])
    }

  const linePressed=()=>{

  
}


  return (
    //start of main
    <View style={styles.main}>
        <Text>CustomTable</Text>

        <View style={styles.tableBtn}>
            <Button title="Add Line" onPress={addLine}/>
            <Button title="Delete Line" onPress={removeLine}/>
            </View>



        {
            //start of header
        }


        <View style={styles.header} id='header'>
{
    //start of four categories
}
            <View style={styles.totalC}>
                <Text style={styles.totalCText}>Total Cost</Text>
                </View>
            <View style={styles.amount}>
                <Text style={styles.amountText}>Amount</Text>
                </View>
                <View style={styles.profile}>
                    <Text style={styles.profileText}>Profile</Text>
                    </View>
                    <View style={styles.index}>
                        <Text style={styles.indexText}>Index</Text>
                        </View>
            </View>
            {
                //start of dataGrid
            }
            <View style={styles.dataGrid}>
                <TableLIne pricePTon={pricePTon} data={tableData}/>
                </View>
                
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    },
    linePressed:{
        flex:1,

    },
    tableBtn: {
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderWidth:1,
        width:'100%',
    },

    header: {
        flexDirection:'row',
        width:'80%',
        borderWidth:1,
        borderColor:'yellow',
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
    },

    totalC: {
        borderColor:'white',
        borderWidth:1,
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalCText: {
        fontSize: 20,
        color: 'white',
    },
    amount: {
        borderColor:'white',
        borderWidth:1,
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountText: {
        fontSize: 20,
        color: 'white',
    },
    profile: {
        borderColor:'white',
        borderWidth:1,
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileText: {
        fontSize: 20,
        color: 'white',
    },
    index: {
        borderColor:'white',
        borderWidth:1,
        flex: 1,
        backgroundColor: '#3a6ea5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    indexText: {
        fontSize: 20,
        color: 'white',

    },
    dataGrid: {
        marginVertical: '3%',
        flex: 8,
        backgroundColor: '#3a6ea5',
        flexDirection:'column',
        borderWidth:1,
        width:'80%',
    },

});
export default CustomTable