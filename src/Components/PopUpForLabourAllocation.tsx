import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericInputField from '../shared/component/GenericInputField';
import GenericButton from '../shared/component/GenericButton';
import GenericDropDown1 from '../shared/component/GenericDropDown1';
import React,{useState} from 'react';
import GenericDropDown2 from '../shared/component/GenericDRopDown2';
type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PopUpForLabourAllocation({visible, setValue}: Props) {
  function handleCloseModal() {
    setValue(false);
  }
  const Labouroptions = [
    { title: '1', value: 'Labour 1' },
    { title: '2', value: 'Labour 2' },
    
  ];
  const Shedoptions = [
    { title: '1', value: 'Labour 1' },
    { title: '2', value: 'Labour 2' },
    
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
            <Text style={styles.titleStyles}>Labour Allocation</Text>
          </View>
          <ScrollView>
              <GenericDropDown2
                          id="dropdown3"
                          Options={Labouroptions }
                          label="Gang Number"
                          isVisible={visibleDropdown === 'dropdown3'}
                          setIsVisible={setVisibleDropdown}
                          selectedValue={selectedValues.dropdown3}
                          setSelectedValue={handleSetSelectedValue}
                          containerStyles={{zIndex:30}}
                          marginLeft={-20}
              />
         <GenericDropDown2
                          id="dropdown2"
                          Options={Activityoptions }
                          label="Activity"
                          isVisible={visibleDropdown === 'dropdown2'}
                          setIsVisible={setVisibleDropdown}
                          selectedValue={selectedValues.dropdown2}
                          setSelectedValue={handleSetSelectedValue}
                          containerStyles={{zIndex:15}}
                          marginLeft={-20}
              />
            <GenericDropDown2
                          id="dropdown1"
                          Options={Shedoptions }
                          label="Shed"
                          isVisible={visibleDropdown === 'dropdown1'}
                          setIsVisible={setVisibleDropdown}
                          selectedValue={selectedValues.dropdown1}
                          setSelectedValue={handleSetSelectedValue}
                          containerStyles={{zIndex:10}}
                          marginLeft={-20}
              />
            <GenericInputField
              label={'No Of Bags'}
              placeholder={'No Of Bags'}
            />
            <View style={styles.buttonContainer}>
             
              <GenericButton
                title={"Cancel"}
                buttonWidth={100}
               // buttonHeight={40}
                onPress={handleCloseModal}
                buttonStyles={{width: '80%', height: 35}}
                buttonColor="red"
                textColor="white"
               // borderColor='#317064'
               // borderWidth={3}
              />
             
              <GenericButton
                        title="Create"
                        buttonWidth={100}
                       // buttonHeight={40}
                        iconColor="white"
                        onPress={handleCloseModal}
                        buttonStyles={{width:'80%'}}
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