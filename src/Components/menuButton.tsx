import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView, ImageBackground}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GenericHeaderStyle, GenericHeaderStyles, GenericInputFieldStyles, GenericLogoStyles, GenericScanIconStyle } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
//import { useNavigation } from "@react-navigation/native";
const MenuButton=()=>{
     const navigation = useNavigation();
    const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
    return(
        <View >
             <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                 <Icon name="menu" size={30} color="#000" style={{marginTop:13,marginLeft:10}}/>
              </TouchableOpacity>
        </View>
    )
}
export default MenuButton;