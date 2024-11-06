import { useState } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import {
  GenericCalenderFieldStyles,
  GenericInputFieldStyles,
  GenericCalendarcontainerStyles
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

  function openCalenderHandler(): void {
    setVisible(true);
  }

  function closeCalenderHandler(): void {
    setVisible(false);
  }

  function changeDateHandler(value: Date): void {
    const formattedDate = FormattedDate(value);
    setSelectedDate(formattedDate);
    closeCalenderHandler();
  }

  return (
    <View style={[GenericCalenderFieldStyles.conatiner]}>
      <View style={GenericCalendarcontainerStyles.container}>
      <TextInput
        placeholder={label}
        value={selectedDate}
        style={[GenericInputFieldStyles.buttonContainer, buttonContainerStyles]}
        onFocus={openCalenderHandler}
        editable={false}
      />
      <TouchableOpacity onPress={openCalenderHandler}
      style={{position:'absolute',right:10,top:2}}>
          <Ionicons name="calendar" size={30} color="#317064"/>
        </TouchableOpacity>
      </View>
     
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={changeDateHandler}
        onCancel={closeCalenderHandler}
        
      />
    </View>
  );
}
