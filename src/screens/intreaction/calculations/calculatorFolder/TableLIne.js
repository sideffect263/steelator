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
  Modal,
} from "react-native";


const TableLIne = ({pricePTon, data}) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [modalTitle, setModalTitle] =  useState('');
    const [modalImage, setModaImage] =  useState('');

    const [totalCost, settotalCost] =  useState(0);
    const [amount, setAmount] = useState(0);
   

    const amountChange=(amount)=>{
        setAmount(amount)
        settotalCost(amount*pricePTon)
        console.log(amount)
        console.log(totalCost)
        
    }

    const profilePressable=()=>{
        console.log('profilePressable')
        setModalVisible(true);

    }
  return (
    data.map((item,index)=>{  
        
        return(   
            
    <View key={index} style={styles.line}>
  <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{modalTitle}</Text>
            <Image
                style={styles.modalImageS}
                source={modalImage}
                
                />
            <Pressable
              style={[styles.buttonx, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        <View style={styles.totalC}>
            <TextInput style={styles.totalCText}value={totalCost} />
        </View>
      
      <View style={styles.amount}>
        <TextInput style={styles.amountText} placeholder={item.amount} onChangeText={amountChange} />

      </View>
      

    
    <View style={styles.profile}>
        <TouchableOpacity  onPress={()=>profilePressable()}  >
        <View style={styles.profilePressable}>
        <Text style={styles.profileText}>{item.profile}</Text>
        </View>
        </TouchableOpacity>
    </View>



    <View style={styles.index}>
        <Text style={styles.indexText}>{item.index}</Text>
    </View>
    
    </View>

        )
    })
  )
}

const styles = StyleSheet.create({
    line: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        height:'100%',
        maxHeight:'10%'

    },
    totalC: {
        flex:1, 
        backgroundColor: "red",
        borderWidth:1,

    },
    totalCText: {
        flex:1,
        backgroundColor: "red",
        borderWidth:1,
        textAlign: "center",
    },
    
    amount: {
        flex:1,
        backgroundColor: "blue",
        borderWidth:1,
    },

    profile: {
        flex:1,
        backgroundColor: "green",
        borderWidth:1,
    },
    index: {
        flex:1,
        backgroundColor: "yellow",
        borderWidth:1,
    },
    amountText: {

        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
    },
    indexText: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
    },
    profileText: {
        textAlign: "center",
    },
    profilePressable: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width:'100%',
        },
        modalView: {
        margin: 20,
        width:'50%',
        backgroundColor: "white",
        opacity:0.8,

        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        },
        buttonx: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
        },
        buttonClose: {
        backgroundColor: "#2196F3",
        },
        textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
        },
        modalText: {
        marginBottom: 15,
        textAlign: "center"
        },
        modalImageS: {
            width: 200,
            height: 200,
            resizeMode: 'contain',
            marginBottom: 15,
            textAlign: "center"
        },

});

export default TableLIne