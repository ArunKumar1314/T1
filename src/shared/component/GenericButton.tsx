import { View, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { GenericButtonStyles } from "../../styles/styles";

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  buttonColor?: string;
  textColor?: string;
  icon?: string;
  iconColor?: string;
  title: string;
  buttonWidth?: number | string;
  buttonHeight?: number | string;
  onPress: () => void;
};

export default function GenericButton({
  containerStyles,
  labelStyles,
  buttonStyles,
  buttonColor = "#317064",//c
  textColor = "white",//c
  icon,
  iconColor,
  title,
  buttonWidth,
  buttonHeight,
  onPress,
  ...rest
}: Props) {
  return (
    <View style={[GenericButtonStyles.conatiner, containerStyles]}>
      
      <Button
        style={[GenericButtonStyles.button, buttonStyles,buttonWidth ? { width: buttonWidth } : '',buttonHeight ? { height: buttonHeight } : '',]}
        labelStyle={[GenericButtonStyles.labelStyle, labelStyles]}
        mode="contained"
        buttonColor={buttonColor}
        textColor={textColor}
        {...rest}
        onPress={onPress}
        icon={
          icon
            ? () => (
                <IconButton
                  icon={icon}
                  size={26}
                  style={{ marginRight: -10}}
                  iconColor={iconColor}
              
                />
              )
            : undefined
        }
      >
        {title}
      </Button>
    </View>
  );
}
