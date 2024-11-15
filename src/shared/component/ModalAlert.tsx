import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericCalenderField from './GenericCalenderField';
import GenericInputField from './GenericInputField';
import GenericButton from './GenericButton';
import GenericDropDown1 from './GenericDropDown1';
import { GenericDropDownStyles1 } from '../../styles/styles';
import GenericDropDown2 from './GenericDRopDown2';
import React,{useState} from 'react';
type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAlert({visible, setValue}: Props) {
  function handleCloseModal() {
    setValue(false);
  }
  const Labouroptions = [
    { title: '1', value: 'Labour 1' },
    { title: '2', value: 'Labour 2' },
    
  ];
  const Stackoptions = [
    { title: 'Stack 1', value: 'Labour 1' },
    { title: 'Stack 2', value: 'Labour 2' },
    
  ];
  const Activityoptions = [
    { title: '1', value: 'Labour 1' },
    { title: '2', value: 'Labour 2' },
    
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

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onDismiss={() => setValue(false)}
      onRequestClose={() => setValue(false)}>
      <View style={[styles.overlay]}>
        <View style={[styles.modalView]}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleStyles}>Labour Gang Usage Details</Text>
          </View>
          <ScrollView>
         
          <GenericDropDown2
                id="dropdown3"
                Options={Activityoptions }
                label="Activity"
                isVisible={visibleDropdown === 'dropdown3'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown3}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:40}}
                marginLeft={-20}
      />  
           
             
            <GenericCalenderField
              label={'Start Time'}
              placeholder={'Start Time'}
            />
            <GenericCalenderField label={'End Time'} placeholder={'End Time'} />
            <GenericInputField
              label={'No Of Bags'}
              placeholder={'No Of Bags'}
            />
              <GenericDropDown2
                id="dropdown1"
                Options={Labouroptions }
                label="Labour Gang"
                isVisible={visibleDropdown === 'dropdown1'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown1}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:30}}
                marginLeft={-20}
      />
      <GenericDropDown2
                id="dropdown2"
                Options={Labouroptions }
                label="Stack Name"
                isVisible={visibleDropdown === 'dropdown2'}
                setIsVisible={setVisibleDropdown}
                selectedValue={selectedValues.dropdown2}
                setSelectedValue={handleSetSelectedValue}
                containerStyles={{zIndex:20}}
                marginLeft={-20}
      />
             {/* <GenericDropDown1
                    label="Labour Gang"
                    Options={[{ title: "LabourGang 1", value: "LabourGang 1" }, { title: "LabourGang 2", value: "LabourGang 2" }]} 
                    containerStyles={{zIndex:15}}
                    buttonContainerStyles={{width:'100%'}}
                    marginLeft={-20}
                    />
                    <GenericDropDown1
                    label="Stack Name"
                    Options={[{ title: "Stack 1", value: "Stack 1" }, { title: "Stack 2 ", value: "Stack 2" }]} 
                    containerStyles={{zIndex:5}}
                    marginLeft={-20}
                    /> */}
            <GenericInputField label={'Lead'} placeholder={'Lead'} />
     
            
            <View style={styles.buttonContainer}>
             
              <GenericButton
                title={"Cancel"}
                buttonWidth={100}
                onPress={handleCloseModal}
                buttonStyles={{width: '80%', height: 35}}
                buttonColor="red"
                textColor="white"
               // borderColor='#317064' 
              />
             
              <GenericButton
                        title="Create"
                        buttonWidth={100}
                        buttonStyles={{width:'80%'}}
                        iconColor="white"
                        onPress={handleCloseModal}
                        />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    flex: 1,
    width: '90%',
    // padding: 20,
    borderRadius: 10,
    // alignItems: 'center',
    backgroundColor: '#FEFEFE',
    minHeight: 150, // Base height
    maxHeight: '60%',
  },
  titleContainer: {
    backgroundColor: '#317064',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleStyles: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    borderColor:'black'
  },
  textStyle:{
    fontSize:10
  }
});