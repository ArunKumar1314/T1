import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericButton from "../shared/component/GenericButton";
import GenericCheckBox from "../shared/component/GenericCheckBox";
import GenericCalenderField from "../shared/component/GenericCalenderField";

import GenericList from "../shared/component/GenericList";
import ModalAlert from "../shared/component/ModalAlert";
import MenuButton from "./menuButton";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
import GenericScanComponent from "../shared/component/GenericScanComponent";
import GenericDropDown2 from "../shared/component/GenericDRopDown2";
//import { useNavigation } from "@react-navigation/native";
const LabourGangUsage=({navigation}:{navigation:any})=>{
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
      const Tokenoptions = [
        { title: '1', value: '1' },
        { title: '2', value: '2' },
        
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
        <View >
        <GenericScanComponent/>
        <GenericDropDown2
                id="dropdown1"
                Options={Tokenoptions }
                label="Token Number"
                isVisible={visibleDropdown === 'dropdown1'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown1}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:30}}
        />

              <GenericCalenderField
             label="Date"
             placeholder="Date"
            
            />
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={Styles.addContainer}>Labour Usage</Text>
            <GenericButton
                        title="Add"
                        buttonStyles={{width:'80%',height:50}}
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
            buttonStyles={{width:'80%'}}
            />
            <ModalAlert visible={isModalVisible} setValue={setModalVisible} />
        </View>
        </ScrollView>
        // </CustomLinearGradient>
    )
}
const Styles=StyleSheet.create({
  addContainer:{
    marginRight:100,marginLeft:30,fontSize:17,fontFamily:'Roboto',
    fontWeight:'bold'
  }
})

export default LabourGangUsage;