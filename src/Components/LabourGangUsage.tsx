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
const GangUsageForMiscellianeous=({navigation}:{navigation:any})=>{
    const [isModalVisible, setModalVisible] = useState(false);
    const items = [
        {
          id: "1",
          title: "Labour Gang 1",
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
        <View >
            <Text style={GenericInputFieldStyles.titleStyle}> Labour Gang Usage(Rail) </Text>
            <MaterialCommunityIcons name="qrcode-scan" size={50} color="#317064"  style={GenericScanIconStyle.container}/>
            <Text>Scan Q</Text>
              <GenericDropDown
                    label="Friendly Name"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
              <GenericDropDown
                    label="OperationAt"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
             <GenericInputField
            label="Date"
            placeholder="Date"
            />
              <GenericInputField
            label="Wagon"
            placeholder="Wagon"
            />
            <View style={{flexDirection:'row',right:10,top:15,marginBottom:30}}>
                <Text style={{top:16,fontSize:20,marginLeft:30,marginRight:60,color:'#999999'}}>Labour Usage Allocation</Text>
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
            <ModalAlert visible={isModalVisible} setValue={setModalVisible} />
        </View>
        </ScrollView>
        // </CustomLinearGradient>
    )
}
export default GangUsageForMiscellianeous;