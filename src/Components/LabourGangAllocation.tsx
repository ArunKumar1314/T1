import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";

import { GenericInputFieldStyles,GenericScanIconStyle } from "../styles/styles";
import GenericList from "../shared/component/GenericList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GenericDropDown from "../shared/component/GenericDropDown";
import ModalAlert from "../shared/component/ModalAlert";
const LabourGangAllocation=({navigation}:{navigation:any})=>{
    const [isModalVisible, setModalVisible] = useState(false);
    const items = [
        {
          id: "1",
          title: "Labour Gang 1",
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
          title: "Labour Gang 2",
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
            <Text  style={GenericInputFieldStyles.titleStyle}>LabourGang Allocation</Text>
            <MaterialCommunityIcons name="qrcode-scan" size={50} color="#317064"  style={GenericScanIconStyle.container}/>
            <GenericDropDown
                    label="Activity"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
             <View style={{flexDirection:'row',right:10,top:2,marginBottom:5}}>
                <Text style={{top:10,fontSize:20,marginLeft:25,marginRight:60,color:'#999999'}}>Labour Usage Allocation</Text>
                    <GenericButton
                        title="Add"
                        buttonWidth={90}
                        icon="plus"
                        iconColor="white"
                        onPress={()=>setModalVisible(true)}
                    />
            </View>
            <GenericList
                items={items}
            />
            {/* <GenericDropDown
                    label="select Token Number"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    /> */}
            <GenericButton
            title="Submit"
            onPress={()=>{}}
            />
            <ModalAlert visible={isModalVisible} setValue={setModalVisible} />
        </View>
        </ScrollView>
        // </CustomLinearGradient>
    )
}
const style=StyleSheet.create({
// container:{
//     flex:1,
   
// },
tex:{
    fontSize:45,
    fontFamily:'serif'
}

})
export default LabourGangAllocation;


