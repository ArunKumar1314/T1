import { View, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { GenericButtonStyles1 } from "../../styles/styles";

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  labelStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  buttonColor?: string;
  textColor?: string;
  icon?: string;
  iconColor?: string;
  title: string;
  width?:string;
  buttonWidth?: number | `${number}%`;
  onPress: () => void;
};

export default function GenericButton({
  containerStyles,
  labelStyles,
  buttonStyles,
  buttonColor = "#317064",//c
  textColor = "white",//c
  icon,
  // width='80%',
  iconColor,
  title,
  buttonWidth='100%',

  onPress,
  ...rest
}: Props) {
  return (
    <View style={[GenericButtonStyles1.container, containerStyles]}>
      
      <Button
        style={[GenericButtonStyles1.button, buttonStyles,
        // { width: buttonWidth},
         ]}
        labelStyle={[GenericButtonStyles1.labelStyle, labelStyles]}
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
