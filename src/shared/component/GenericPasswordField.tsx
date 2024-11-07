import { StyleProp, View, ViewStyle,TextInput } from "react-native";
import {
  GenericInputFieldStyles,
  GenericLabelStyles,
  GenericPasswordFieldStyles,
} from "../../styles/styles";
import { useState } from "react";
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  label: string;
  placeholder: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
};

export default function GenericPasswordField({
  containerStyles,
  label,
  placeholder,
  buttonContainerStyles,
  ...rest
}: Props) {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [IsFocused,setIsFocused]=useState(false);

  function blurHandler(): void {
    setIsFocused(false)
    if (text === "") {
      setError(true);
    }
  }
  function focusHandler(): void {
    setIsFocused(true);
  }
  function changeTextHandler(value: string): void {
    setText(value);
    if (text !== "") {
      setError(false);
    }
  }
  return (
    <View style={[GenericPasswordFieldStyles.container, containerStyles]}>
        <Text style={[GenericLabelStyles.container,GenericPasswordFieldStyles.passwordTitleStyle]}>{label}</Text>
        
        <View style={{position:'relative',marginLeft:1}}>
        <Icon
            name="lock" size={30} color="#666666"
            style={{top:5,position:'absolute',marginLeft:10}}
            />
      <TextInput
        placeholder={label}
        onBlur={blurHandler}
        onFocus={focusHandler}
        value={text}
        onChangeText={changeTextHandler}
        style={[GenericPasswordFieldStyles.buttonContainer, buttonContainerStyles,IsFocused && GenericInputFieldStyles.borderChange  ]}
        secureTextEntry={!passwordVisible
        }
        {...rest}
        
      />
      {/* <Icon
            name="lock" size={30} color="#666666" 
            style={{marginLeft:320,zIndex:1,top:-35}}
            /> */}
      </View>
    </View>
  );
}