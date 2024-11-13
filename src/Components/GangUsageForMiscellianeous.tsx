import React,{useState} from "react";
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
import GenericDropDown2 from "../shared/component/GenericDRopDown2";
const GangUsageForMiscellianeous=({navigation}:{navigation:any})=>{
    const Activityoptions = [
        { title: '1', value: '1' },
        { title: '2', value: '2' },
        
      ];
      const Labouroptions = [
        { title: '1', value: 'Labour 1' },
        { title: '2', value: 'Labour 2' },
        
      ];
    
      const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null); 
      const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({
        dropdown1: '',
        dropdown2: '',
      });
      const handleSetSelectedValue = (id: string, value: string) => {
        setSelectedValues(prevValues => ({ ...prevValues, [id]: value }));
      };
    
    return(
        
        // <CustomLinearGradient>
        <ScrollView>
            {/* <View style={GenericMenuStyles.container}>
            <MenuButton />
            </View>
             */}
        <View style={GenericScreenStyles.container}>
            <GenericDropDown2
                id="dropdown1"
                Options={Activityoptions}
                label="Activity"
                isVisible={visibleDropdown === 'dropdown1'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown1}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:40}}
            />
             <GenericDropDown2
                id="dropdown2"
                Options={Labouroptions }
                label="Labour Gang"
                isVisible={visibleDropdown === 'dropdown2'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown2}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:30}}
      />
              {/* <GenericDropDown1
                    label="Activity"
                    Options={[{ title: "Activity 1", value: "Activity  1" }, { title: "Activity 2", value: "Activity  2" }]} 
                    containerStyles={{zIndex:20}}
                    />
                 <GenericDropDown1
                    label="Labour Gang"
                    Options={[{ title: "Labour Gang 1", value: "Labour Gang 1" }, { title: "Labour Gang 2", value: "Labour Gang 2" }]} 
                    containerStyles={{zIndex:10}}
                    /> */}
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
            buttonStyles={{width:'80%'}}
            />
        </View>
        </ScrollView>
        // </CustomLinearGradient>
    )
}
export default GangUsageForMiscellianeous;