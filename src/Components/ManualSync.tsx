import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,SafeAreaView,useWindowDimensions,FlatList,StyleSheet, Pressable}from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GenericButton from '../shared/component/GenericButton';
interface shedItem{
    id:string;
    title:string;
    iconName:string;
    progress:number;
    stackCount:number;
}

const ManualSync=({navigation}:{navigation:any})=>{
    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.innerContainer}>
               
               <View style={Styles.content}>
               <Text style={Styles.MainHeading}>Procurement API</Text>
               <Text style={Styles.subHeading}>2024-03020 18:03:00</Text>
               </View>
               <FontAwesome5 name='sync' color="green"
               size={45}
               />
            </View>
           
            <GenericButton
                title='Go Back To Home'
                containerStyles={{ width: '50%' }} 
                onPress={navigation.navigate('Shed Operations')}
               />
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

      },
      MainHeading:{
        fontSize:20,
        fontWeight:'bold'
      },
      SubHeading:{
        fontSize:15,
        
      }
    
})
export default ManualSync;