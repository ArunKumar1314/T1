import {useState} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
// import {HelperText, TextInput} from 'react-native-paper';
import { TextInput,Text} from 'react-native';
import {GenericIconInputStyles, GenericInputFieldStyles} from '../../styles/styles';
import { GenericLabelStyles } from '../../styles/styles';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  titleStyle?:StyleProp<ViewStyle>;
  label: string;
  placeholder: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  multiline?: boolean;
  lines?: number;
  iconName?:string;
};

export default function GenericInputField({
  containerStyles,
  titleStyle,
  label,
  placeholder,
  buttonContainerStyles,
  multiline,
  lines,
  iconName,
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
      <View>
      {iconName &&
      <Ionicons
      name={iconName}
      size={25}
      color="#317064"
      style={{ position: 'absolute', left: 10,top:5,zIndex:1}}
    />
     }
      <TextInput
      
        onBlur={blurHandler}
        onFocus={focusHandler}
        value={text}
        onChangeText={changeTextHandler}
        placeholder={placeholder}
        placeholderTextColor={'black'}
        style={[
          GenericInputFieldStyles.buttonContainer, buttonContainerStyles ,
          IsFocused && GenericInputFieldStyles.borderChange ,
          error && GenericInputFieldStyles.errorBorderChange,
          iconName && GenericInputFieldStyles.iconField,
          iconName && {paddingLeft:40},
        ]}
        multiline={multiline}
        numberOfLines={lines}
        {...rest}
      />
      </View>
      
      {error &&
      <Text style={GenericInputFieldStyles.inputErrorText}>Invalid {label}</Text>
      }
    </View>
  );
}
