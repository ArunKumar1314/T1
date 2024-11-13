import { useState } from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Checkbox } from "react-native-paper";
import { GenericCheckBoxStyles } from "../../styles/styles";

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  color?: string;
  uncheckedColor?: string;
  title: string;
  textStyles?: StyleProp<TextStyle>;
};

export default function GenericCheckBox({
  containerStyles,
  color = "#317064",
  uncheckedColor = "#317064",
  title,
  textStyles,
  ...rest
}: Props) {
  const [checked, setChecked] = useState(false);
  const [error,setError]=useState(false);

  function checkhandler(): void {
    setChecked(!checked);
  }

  return (
    <View style={[GenericCheckBoxStyles.container, containerStyles]}>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={checkhandler}
        color={color}
        uncheckedColor={uncheckedColor}
      />
      <Text {...rest} style={[GenericCheckBoxStyles.text, textStyles]}>
        {title}
      </Text>
     
    </View>
  );
}
