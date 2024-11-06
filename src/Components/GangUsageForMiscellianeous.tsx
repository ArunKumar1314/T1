import React from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";
import GenericCheckBox from "../shared/component/GenericCheckBox";
import CustomLinearGradient from "../shared/component/CustomLinearGradient";
import GenericCalenderField from "../shared/component/GenericCalenderField";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GenericInputFieldStyles } from "../styles/styles";
import GenericDropDown from "../shared/component/GenericDropDown";
const GangUsageForMiscellianeous=({navigation}:{navigation:any})=>{
    return(
        // <CustomLinearGradient>
        <ScrollView>
        <View >
            <Text style={GenericInputFieldStyles.titleStyle}>Gang Usage For Miscellaneous</Text>
        
              <GenericDropDown
                    label="Activity"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
              <GenericDropDown
                    label="Labour Gang"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    />
             <GenericInputField
            label="Date"
            placeholder="Date"
            />
             <GenericInputField
            label="No of Bags"
            placeholder="No of Bags"
            />
            <GenericCalenderField
             label="Start Date"
             placeholder="Start Date"
            
            />
             <GenericCalenderField
             label="End Date"
             placeholder="End Date"
             
            />
             <GenericInputField
            label="Remarks"
            placeholder="Remarks"
            multiline
            lines={10}
            />
            <GenericCheckBox
            title="Labour Assignment"
           // icon="checkbox"
            />
            <GenericButton
            title="Submit"
            onPress={()=>{}}
            />
            
        </View>
        </ScrollView>
        // </CustomLinearGradient>
    )
}
export default GangUsageForMiscellianeous;