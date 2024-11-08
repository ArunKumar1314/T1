import React from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";
import GenericCheckBox from "../shared/component/GenericCheckBox";
import CustomLinearGradient from "../shared/component/CustomLinearGradient";
import GenericCalenderField from "../shared/component/GenericCalenderField";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GenericInputFieldStyles, GenericMenuStyles, GenericScreenStyles } from "../styles/styles";
import Header from "./Header";
import MenuButton from "./menuButton";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
const GangUsageForMiscellianeous=({navigation}:{navigation:any})=>{
    return(
        
        // <CustomLinearGradient>
        <ScrollView>
            {/* <View style={GenericMenuStyles.container}>
            <MenuButton />
            </View>
             */}
        <View style={GenericScreenStyles.container}>
                <GenericDropDown1
                    label="Activity"
                    Options={[{ title: "Activity 1", value: "Activity 1" }, { title: "Activity 2", value: "Activity 2" }]} 
                  containerStyles={{zIndex:10}}
                    />
              <GenericDropDown1
                    label="Labour Gang"
                    Options={[{ title: "Labour Gang 1", value: "Labour Gang 1" }, { title: "Labour Gang 2", value: "Labour Gang 1" }]} 
                    />

<GenericCalenderField
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