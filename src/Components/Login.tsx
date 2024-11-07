import React from "react";
import {View,Text,StyleSheet,ScrollView, Platform}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";
import { GenericInputFieldStyles, GenericLoginLogoStyles, GenericLogoStyles, GenericMenuStyles } from "../styles/styles";
import GenericDropDown from "../shared/component/GenericDropDown";
import { Image } from "react-native";
import GenericPasswordField from "../shared/component/GenericPasswordField";
import { KeyboardAvoidingView } from "react-native";
import CustomLinearGradient from "../shared/component/CustomLinearGradient";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
const Login=({navigation}:{navigation:any})=>{
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
           <View style={{ alignItems: 'center', marginTop: 100 }}>
           </View>
           <Image
              source={require('../assets/fciLogo.png')}
              style={GenericLoginLogoStyles.container}
              />
              <GenericDropDown1
                    label="Login Type"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
             <GenericInputField
            label="Username"
            placeholder="Username"
            />
             
            <GenericPasswordField 
            label={"Password"} 
            placeholder={"Password"}/>
            <GenericButton
            title="LOGIN"
            onPress={()=>navigation.navigate("Labour Gang Usage Rail")}
            />
            
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Login;