import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet,ScrollView, Platform, TouchableOpacity, BackHandler}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";
import { GenericInputFieldStyles, GenericLoginLogoStyles, GenericLogoStyles, GenericMenuStyles } from "../styles/styles";
import { Image } from "react-native";
import GenericPasswordField from "../shared/component/GenericPasswordField";
import { KeyboardAvoidingView } from "react-native";
import GenericDropDown2 from "../shared/component/GenericDRopDown2";
const Login=({navigation}:{navigation:any})=>{
    useEffect(() => {
        const backAction = () => {
          if (navigation.isFocused()) {
            BackHandler.exitApp();
            return true;
          }
          return false; 
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove(); 
      }, [navigation]);
    const handleLogin = () => {
        
        navigation.navigate('Labour Gang Usage Rail');
    };
    const Loginoptions = [
        { title: 'Admin', value: '1' },
        { title: 'Depot Manager', value: '2' },
        
      ];
      const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null); 
      const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({
        dropdown1: '',
        dropdown2: '',
        dropdown3: '',
      });
      const handleSetSelectedValue = (id: string, value: string) => {
        setSelectedValues(prevValues => ({ ...prevValues, [id]: value }));
      };
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
            
               <GenericDropDown2
                id="dropdown1"
                Options={Loginoptions}
                label="Login Type"
                isVisible={visibleDropdown === 'dropdown1'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown1}
                setSelectedValue={handleSetSelectedValue}
                iconName="person-circle"
                containerStyles={{zIndex:40}}
            />
             <GenericInputField
            label="Username"
            placeholder="Username"
            iconName="person-circle"
            />
            <GenericPasswordField 
            label={"Password"} 
            placeholder={"Password"}/>

            <GenericButton
            title="LOGIN"
            onPress={handleLogin}
            // buttonWidth='80%'
            buttonStyles={{width:'80%'}}
            
          
            
            //onPress={()=>navigation.navigate("Labour Gang Usage Rail")}
            />
         
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default Login;
