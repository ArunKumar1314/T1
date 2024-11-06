import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { Divider } from "react-native-paper";
import { GenericHeaderStyles } from "../../styles/styles";

type Props = {
  containerStyles?: StyleProp<ViewStyle>;
  headerTextStyles?: StyleProp<TextStyle>;
  title: string;
  dividerContainerStyles?: StyleProp<ViewStyle>;
};

export default function GenericHeader({
  containerStyles,
  headerTextStyles,
  title,
  dividerContainerStyles,
  ...rest
}: Props) {
  return (
    <View style={[GenericHeaderStyles.container, containerStyles]}>
      <Text
        style={[GenericHeaderStyles.headerText, headerTextStyles]}
        {...rest}
      >
        {title}
      </Text>
      <Divider
        bold={true}
        style={[GenericHeaderStyles.dividerContainer, dividerContainerStyles]}
      />
    </View>
  );
}
