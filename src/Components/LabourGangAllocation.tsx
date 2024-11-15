import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";

import { GenericAddButtonStyles, GenericInputFieldStyles,GenericScanIconStyle } from "../styles/styles";
import GenericList from "../shared/component/GenericList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ModalAlert from "../shared/component/ModalAlert";
import MenuButton from "./menuButton";
import PopUpForLabourAllocation from "./PopUpForLabourAllocation";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
import GenericScanComponent from "../shared/component/GenericScanComponent";
import GenericDropDown2 from "../shared/component/GenericDRopDown2";
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

      const Refoptions = [
        { title: '101', value: '1' },
        { title: '102', value: '2' },
        
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
        // <CustomLinearGradient>
     
        <ScrollView>
        <View>
        
        <GenericScanComponent/>
        <GenericDropDown2
                id="dropdown1"
                Options={Refoptions }
                label="Reference Number"
                isVisible={visibleDropdown === 'dropdown1'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown1}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:30}}
      />
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={style.addContainer}>Labour Allocation</Text>
            <GenericButton
                        title="Add"
                        buttonStyles={{width:'80%',height:50}}
                        icon="plus"
                        iconColor="white"
                        onPress={()=>setModalVisible(true)}
                    />
            </View>
            
            {/* </View> */}
            <GenericList
                items={items}
            />
            <GenericButton
            title="Submit"
            onPress={()=>{}}
            buttonStyles={{width:'80%'}}
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
    fontFamily:'Roboto'
},
addContainer:{
  marginRight:90,marginLeft:30,fontSize:17,fontFamily:'Roboto',
  fontWeight:'bold'
}

})
export default LabourGangAllocation;


