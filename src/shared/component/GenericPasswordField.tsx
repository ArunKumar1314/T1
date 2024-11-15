import { StyleProp, View, ViewStyle, TextInput, TouchableOpacity } from "react-native";
import {
  GenericInputFieldStyles,
  GenericLabelStyles,
  GenericPasswordFieldStyles,
} from "../../styles/styles";
import { useState } from "react";
import { Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
  const [isFocused, setIsFocused] = useState(false);

  function blurHandler(): void {
    setIsFocused(false);
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
      <Text style={[GenericLabelStyles.container, GenericPasswordFieldStyles.passwordTitleStyle]}>{label}</Text>
      
      <View style={{ position: 'relative', flexDirection: 'row', alignItems: 'center' }}>
      
        <MaterialCommunityIcons
          name="lock"
          size={25}
          color="#317064"
          style={{ position: 'absolute', left: 10,zIndex:1}}
        />
         
         
      
        <TextInput
          placeholder={placeholder}
          onBlur={blurHandler}
          onFocus={focusHandler}
          value={text}
          onChangeText={changeTextHandler}
          placeholderTextColor={'black'}
          style={[
            GenericPasswordFieldStyles.buttonContainer,
            buttonContainerStyles,
            {  paddingRight: 40},
            isFocused && GenericInputFieldStyles.borderChange,
            error && GenericPasswordFieldStyles.errorBorderChange
          ]}
          secureTextEntry={!passwordVisible}
          {...rest}
        />

        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={{ position: 'absolute', right: 10 }}
        >
          <MaterialCommunityIcons
            name={passwordVisible ? "eye-off" : "eye"}
            size={25}
            color="#317064"
          />
        </TouchableOpacity>
      </View>
      {error &&
      <Text style={GenericPasswordFieldStyles.passwordErrorText}>Invalid {label}</Text>
      }
    </View>
  );
}
