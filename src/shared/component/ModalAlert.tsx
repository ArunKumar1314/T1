import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import GenericDropDown from './GenericDropDown';
import GenericCalenderField from './GenericCalenderField';
import GenericInputField from './GenericInputField';
import GenericButton from './GenericButton';

type Props = {
  visible: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalAlert({visible, setValue}: Props) {
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
            <Text style={styles.titleStyles}>Labour Gang Usage Details</Text>
          </View>
          <ScrollView>
          <GenericDropDown
                    label="Activity"
                    Options={[{ title: "select 1", value: "1" }, { title: "select 2", value: "2" }]} 
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
            <GenericDropDown Options={[]} label={'Labour Gang'} />
            <GenericInputField label={'Lead'} placeholder={'Lead'} />
            <GenericDropDown Options={[]} label={'Stack Name'} />
            <View style={styles.buttonContainer}>
              <GenericButton
                title={'Cancel'}
                onPress={handleCloseModal}
                buttonStyles={{width: '10%', height: 50}}
                buttonColor="white"
                textColor="black"
              />
              <GenericButton
                title={'Submit'}
                onPress={handleCloseModal}
                buttonStyles={{width: '10%', height: 50}}
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
  },
});