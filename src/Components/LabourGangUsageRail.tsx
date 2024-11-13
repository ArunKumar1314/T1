import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView}from 'react-native';
import GenericInputField from "../shared/component/GenericInputField";
import GenericButton from "../shared/component/GenericButton";

import GenericCalenderField from "../shared/component/GenericCalenderField";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GenericList from "../shared/component/GenericList";
import ModalAlert from "../shared/component/ModalAlert";
import GenericDropDown1 from "../shared/component/GenericDropDown1";
import GenericScanComponent from "../shared/component/GenericScanComponent";
import GenericDropDown2 from "../shared/component/GenericDRopDown2";
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
      const Refoptions = [
        { title: '101', value: '1' },
        { title: '102', value: '2' },
        
      ];
      const Operationoptions = [
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
        
        // <KeyboardAvoidingView
        // style={Styles.homeContainer}
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={Styles.scrollViewConatiner}>
        <View >
            
            <GenericScanComponent/>
            <GenericDropDown2
                id="dropdown1"
                Options={Refoptions}
                label="Reference Number"
                isVisible={visibleDropdown === 'dropdown1'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown1}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:40}}
            />
             <GenericDropDown2
                id="dropdown2"
                Options={Operationoptions}
                label="Operation At"
                isVisible={visibleDropdown === 'dropdown2'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown2}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:30}}
      />
            <GenericCalenderField
             label="Date"
             placeholder="Date"
            
            />
              <GenericInputField
            label="Wagon"
            placeholder="Wagon"
            />
            {/* <View style={{flexDirection:'row',right:10,top:15,marginBottom:30}}>
                <Text style={{top:16,fontSize:19,marginLeft:30,marginRight:60,color:'black',fontFamily:'serif',fontWeight:'bold'}}>Labour Usage </Text>
                    <GenericButton
                        title="Add"
                        // buttonWidth={'70%'}
                       
                        icon="plus"
                        iconColor="white"
                        onPress={()=>setModalVisible(true)}
                    />
            </View> */}


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
            
            {/* <GenericButton
            title="add"
             icon="plus"
            buttonStyles={{width:'20%',height:'70%'}}
            onPress={()=>setModalVisible(true)}
            /> */}
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
 },
addContainer:{
  marginRight:100,marginLeft:30,fontSize:17,fontFamily:'serif',
  fontWeight:'bold'
}
});

export default LabourGangUsageRail;