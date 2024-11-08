import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView, ImageBackground}from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GenericHeaderStyle, GenericInputFieldStyles, GenericLogoStyles, GenericScanIconStyle } from "../styles/styles";
import { TouchableOpacity } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
//import { useNavigation } from "@react-navigation/native";
const Header=()=>{
     const navigation = useNavigation();
    const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
    return(
        <View style={GenericHeaderStyle.container}>
              <Image
              source={require('../assets/fciLogo.png')}
              style={GenericLogoStyles.container}
              />
              <Text style={GenericHeaderStyle.title}>Anna-Darpan</Text>
        </View>
    )
}
export default Header;