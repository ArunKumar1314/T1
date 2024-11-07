import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";

import { GenericInputFieldStyles,GenericScanIconStyle } from "../styles/styles";
import GenericList from "../shared/component/GenericList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GenericDropDown from "../shared/component/GenericDropDown";
import ModalAlert from "../shared/component/ModalAlert";
import MenuButton from "./menuButton";
import PopUpForLabourAllocation from "./PopUpForLabourAllocation";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
//import { useNavigation } from "@react-navigation/native";
const LabourGangAllocation=({navigation}:{navigation:any})=>{
    const [isModalVisible, setModalVisible] = useState(false);
    const items = [
        {
          id: "1",
          title: "Gang 20 : ",
          icons: ["edit", "trash-alt","angle-down"],
          dropDownValues: [
            { title: "Activity", editable: false },
            { title: "Gang Number", editable: false },
            { title: "Shed", editable: false },
            { title: "Number of Bags", editable: false },
          ],
        },
        {
          id: "2",
          title: "Gang 21 : ",
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
        // <CustomLinearGradient>
     
        <ScrollView>
        <View>
        <View style={{flexDirection:'row',marginTop:10,}}>
           <MenuButton />
           
           <Text style={GenericInputFieldStyles.titleStyle}>Labour Gang Allocation</Text>
        
           </View>
            <View style={{flexDirection:'row'}}>
                <MaterialCommunityIcons name="qrcode-scan" size={50} color="#317064"  style={GenericScanIconStyle.container}/>
               <View  style={GenericScanIconStyle.text}>
                <Text style={GenericScanIconStyle.text}>Scan QRCode</Text>
               </View>
              </View>
            <GenericDropDown1
                    label="Reference Number"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
        <View style={{flexDirection:'row',right:10,top:15,marginBottom:30}}>
                <Text style={{top:16,fontSize:20,marginLeft:30,marginRight:60,fontFamily:'serif',color:'#999999'}}>Labour Usage Allocation</Text>
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
            title="Submit"
            onPress={()=>{}}
            />
            <PopUpForLabourAllocation visible={isModalVisible} setValue={setModalVisible} />
        </View>
        </ScrollView>
        // </CustomLinearGradient>
    )
}
const style=StyleSheet.create({
tex:{
    fontSize:45,
    fontFamily:'serif'
}

})
export default LabourGangAllocation;


