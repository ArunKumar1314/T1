import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";
import GenericCheckBox from "../shared/component/GenericCheckBox";
import CustomLinearGradient from "../shared/component/CustomLinearGradient";
import GenericCalenderField from "../shared/component/GenericCalenderField";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GenericInputFieldStyles, GenericScanIconStyle } from "../styles/styles";
import GenericDropDown from "../shared/component/GenericDropDown";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GenericList from "../shared/component/GenericList";
import ModalAlert from "../shared/component/ModalAlert";
import MenuButton from "./menuButton";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
//import { useNavigation } from "@react-navigation/native";
const LabourGangUsageRail=({navigation}:{navigation:any})=>{
    const [isModalVisible, setModalVisible] = useState(false);
     
    const items = [
        {
          id: "1",
          title: "Gang Number :  20",
          icons: ["edit", "trash-alt","angle-down"],
          dropDownValues: [
            { title: "Activity", editable: true },
            { title: "Gang Number", editable: true },
            { title: "Shed", editable: true },
            { title: "Number of Bags", editable: true },
          ],
        },
        {
          id: "2",
          title: "Gang Number :  21",
          icons: ["edit", "trash-alt","angle-down"],
          dropDownValues: [
            { title: "Activity", editable: false },
            { title: "Gang Number", editable: false },
            { title: "Shed", editable: false },
            { title: "Number of Bags", editable: false },
          ],
        },
      ];
    return(
        
        // <KeyboardAvoidingView
        // style={Styles.homeContainer}
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={Styles.scrollViewConatiner}>
        <View >
            
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="qrcode-scan" size={40} color="#317064"  style={GenericScanIconStyle.container}/>
               <View  style={GenericScanIconStyle.text}>
                <Text style={GenericScanIconStyle.text}>Scan QRCode</Text>
               </View>
              </View>
                     <GenericDropDown1
                    label="Reference Number"
                    Options={[{ title: "1", value: "1" }, { title: "2", value: "2" }]} 
                    containerStyles={{zIndex:10}}
                    />
              <GenericDropDown1
                    label="OperationAt"
                    Options={[{ title: "1", value: "1" }, { title: "2", value: "2" }]} 
                    />
            <GenericCalenderField
             label="Date"
             placeholder="Date"
            
            />
              <GenericInputField
            label="Wagon"
            placeholder="Wagon"
            />
            <View style={{flexDirection:'row',right:10,top:15,marginBottom:30}}>
                <Text style={{top:16,fontSize:19,marginLeft:30,marginRight:60,color:'black',fontFamily:'serif',fontWeight:'bold'}}>Labour Usage Allocation</Text>
                    <GenericButton
                        title="Add"
                        buttonWidth={90}
                        buttonHeight={40}
                        icon="plus"
                        iconColor="white"
                        onPress={()=>setModalVisible(true)}
                    />
            </View>
              <GenericList
                items={items}
            />
            <GenericButton
            title={"Submit"}
            onPress={()=>{}}
            />
            <ModalAlert visible={isModalVisible} setValue={setModalVisible} />
        </View>
        </ScrollView>
        // </KeyboardAvoidingView>
    )
}
const Styles = StyleSheet.create({
  homeContainer: {
      flex: 1,
  },
 scrollViewConatiner:{
     flexGrow:1,
     paddingBottom: 50, 
 }

});

export default LabourGangUsageRail;