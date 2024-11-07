import {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
// import {HelperText, TextInput} from 'react-native-paper';
import { TextInput,Text} from 'react-native';
import {GenericInputFieldStyles} from '../../styles/styles';
import { GenericLabelStyles } from '../../styles/styles';

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  titleStyle?:StyleProp<ViewStyle>;
  label: string;
  placeholder: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  multiline?: boolean;
  lines?: number;
};

export default function GenericInputField({
  containerStyles,
  titleStyle,
  label,
  placeholder,
  buttonContainerStyles,
  multiline,
  lines,
  ...rest
}: Props) {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [IsFocused,setIsFocused]=useState(false);

  function blurHandler(): void {
    setIsFocused(false)
    if (text === '') {
      setError(true);
    }
  }

  function focusHandler(): void {
    setIsFocused(true);
  }
  function changeTextHandler(value: string): void {
    setText(value);
    if (text !== '') {
      setError(false);
    }
  }

  return (
    <View style={[GenericInputFieldStyles.container, containerStyles]}>
      <Text style={[GenericLabelStyles.container,GenericInputFieldStyles.inputTitleStyle]}>{label}</Text>
      <TextInput
        onBlur={blurHandler}
        onFocus={focusHandler}
        value={text}
        onChangeText={changeTextHandler}
        placeholder={placeholder}
        style={[GenericInputFieldStyles.buttonContainer, buttonContainerStyles ,IsFocused && GenericInputFieldStyles.borderChange  ]}
        multiline={multiline}
        numberOfLines={lines}
        {...rest}
      />
    </View>
  );
}
