import React from "react";
import { View, Button, StyleProp, ViewStyle, TextStyle } from "react-native";
import { GenericButtonStyles } from "../../styles/styles";

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  buttonColor?: string;  // React Native Button doesn't support this, but you can control colors in the container
  textColor?: string;    // React Native Button doesn't support textColor, but you can control text style
  title: string;
  buttonWidth: string;
  onPress: () => void;
};

export default function B({
  containerStyles,
  labelStyles,
  buttonStyles,
  buttonColor = "white", // Will not be directly applied to React Native Button
  textColor = "black",   // Will not be directly applied to React Native Button
  title,
  buttonWidth,
  onPress,
  ...rest
}: Props) {
  return (
    <View style={[GenericButtonStyles.container, containerStyles,]}>
      <Button
        title={title}
        color={buttonColor} // React Native Button supports color prop for button background
        onPress={onPress}
        {...rest}
      />
    </View>
  );
}
