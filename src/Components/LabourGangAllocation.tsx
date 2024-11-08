import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";

import { GenericInputFieldStyles,GenericScanIconStyle } from "../styles/styles";
import GenericList from "../shared/component/GenericList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ModalAlert from "../shared/component/ModalAlert";
import MenuButton from "./menuButton";
import PopUpForLabourAllocation from "./PopUpForLabourAllocation";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
import GenericScanComponent from "../shared/component/GenericScanComponent";
//import { useNavigation } from "@react-navigation/native";
const LabourGangAllocation=({navigation}:{navigation:any})=>{
    const [isModalVisible, setModalVisible] = useState(false);
    const items = [
        {
          id: "1",
          title: "Gang Number :  20",
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
        // <CustomLinearGradient>
     
        <ScrollView>
        <View>
        
        <GenericScanComponent/>
            <GenericDropDown1
                    label="Reference Number"
                    Options={[{ title: "1", value: "1" }, { title: "2", value: "2" }]} 
                    />
        <View style={{flexDirection:'row',right:10,top:15,marginBottom:30}}>
                <Text style={{top:16,fontSize:19,marginLeft:30,marginRight:60,fontFamily:'serif',color:'black',fontWeight:'bold'}}>Labour Usage Allocation</Text>
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


