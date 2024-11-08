import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericInputField from '../shared/component/GenericInputField';
import GenericButton from '../shared/component/GenericButton';
import GenericDropDown1 from '../shared/component/GenericDropDown1';

type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PopUpForLabourAllocation({visible, setValue}: Props) {
  function handleCloseModal() {
    setValue(false);
  }

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
          <GenericDropDown1
                    label="Gang Number"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    containerStyles={{zIndex:20}}
                    />
          <GenericDropDown1
                    label="Activity"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    containerStyles={{zIndex:15}}
                    />
            <GenericDropDown1
                    label="Shed"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
                    containerStyles={{zIndex:10}}
                    />
            <GenericInputField
              label={'No Of Bags'}
              placeholder={'No Of Bags'}
            />
            <View style={styles.buttonContainer}>
             
              <GenericButton
                title={"Cancel"}
                buttonWidth={100}
                buttonHeight={40}
                onPress={handleCloseModal}
                buttonStyles={{width: '60%', height: 35}}
                buttonColor="red"
                textColor="white"
               // borderColor='#317064'
                borderWidth={3}
              />
             
              <GenericButton
                        title="Create"
                        buttonWidth={100}
                        buttonHeight={40}
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
    fontFamily: 'serif',
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