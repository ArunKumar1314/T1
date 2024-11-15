import { useState } from "react";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import {
  GenericCalenderFieldStyles,
  GenericInputFieldStyles,
  GenericCalendarcontainerStyles,
  GenericLabelStyles
} from "../../styles/styles";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FormattedDate } from "../../utils/FormattedDate";
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  label: string;
  placeholder?: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  icon?: string;
};

export default function GenericCalenderField({
  containerStyles,
  label,
  placeholder,
  buttonContainerStyles,
  icon = "calendar",
  ...rest
}: Props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [visible, setVisible] = useState(false);
  const [error,setError]=useState(false);
  const [isFocused,setIsFocused]=useState(false);

  function openCalenderHandler(): void {
    setVisible(true);
    setError(false)
  }

  function closeCalenderHandler(): void {
    setVisible(false);
    if(!selectedDate){
      setError(true)
    }
  }

  function changeDateHandler(value: Date): void {
    const formattedDate = FormattedDate(value);
    setSelectedDate(formattedDate);
    setError(false)
    closeCalenderHandler();
  }

  return (
    <View style={[GenericCalenderFieldStyles.conatiner]}>
       <Text style={{color:'black',marginLeft:10,marginBottom:10,fontSize:17,fontFamily:'Roboto',fontWeight:'bold'}}>{label}</Text>
      
      <View style={GenericCalendarcontainerStyles.container}>
     
      <TextInput
        placeholder={label}
        placeholderTextColor={'black'}
        value={selectedDate}
        style={[GenericCalendarcontainerStyles.buttonContainer, buttonContainerStyles,
        ]}
        onFocus={openCalenderHandler}
        editable={false}
      />
      <TouchableOpacity onPress={openCalenderHandler}
      style={{position:'absolute',right:10,top:2}}>
          <Ionicons name="calendar" size={24} color="#317064" style={{top:5}}/>
        </TouchableOpacity>
       
      </View>
      {error && (
        <Text style={GenericCalendarcontainerStyles.CalendarErrorText}>Date is required</Text>
      )}
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={changeDateHandler}
        onCancel={closeCalenderHandler}
        
      />
    </View>
  );
}
