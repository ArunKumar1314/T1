import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,SafeAreaView,useWindowDimensions,FlatList,StyleSheet, Pressable}from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface shedItem{
    id:string;
    title:string;
    iconName:string;
    progress:number;
    stackCount:number;
}

const ContactUs=({navigation}:{navigation:any})=>{
   
   

    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.innerContainer}>
               <Ionicons name='mail'
               size={45}
               />
               <View style={Styles.content}>
               <Text style={{}}>Email Us</Text>
               <Text style={{}}>abc@gmail.com</Text>
               </View>
               
            </View>
            <View style={Styles.innerContainer}>
               {/* <Feather name='mail'
               size={45}
               /> */}
               <View style={Styles.content}>
               <Text style={{}}>Email Us</Text>
               <Text style={{}}>abc@gmail.com</Text>
               </View>
               
            </View>
        </SafeAreaView>
    )

}
const Styles=StyleSheet.create({
    container:{
      flex:1,
    },
    innerContainer:{
        flexDirection:'row',
        marginHorizontal:20,
        padding:10,
        marginTop:50,
        backgroundColor:'white',
        borderRadius:10,
        //alignContent:'center',
        alignItems:'center',
        
      },
      content:{
        marginLeft:20,
        flexDirection:'column',

      }
    
})
export default ContactUs;