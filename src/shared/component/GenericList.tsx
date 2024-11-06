import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Collapsible from "react-native-collapsible";

interface DropDownValue {
  title: string;
  editable: boolean;
}

interface Wagon {
  id: string;
  title: string;
  icons: string[];
  dropDownValues: DropDownValue[];
}

type Props = {
  outerContainerStyles?: StyleProp<ViewStyle>;
  innerContainerStyles?: StyleProp<ViewStyle>;
  items: Wagon[];
  textStyles?: StyleProp<TextStyle>;
  iconStyles?: StyleProp<ViewStyle>;
  collapsibleStyle?: StyleProp<ViewStyle>;
  accordinView?: StyleProp<ViewStyle>;
  accordinText?: StyleProp<TextStyle>;
};

export default function GenericList({
  outerContainerStyles,
  innerContainerStyles,
  items,
  textStyles,
  iconStyles,
  collapsibleStyle,
  accordinView,
  accordinText,
}: Props) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  function handleCollapsed(itemId: string): void {
    setExpandedItem((prev) => (prev === itemId ? null : itemId));
  }

  return (
    <View style={[styles.outerContainer, outerContainerStyles]}>
      {items.map((list) => (
        <View key={list.id} style={{ paddingBottom: 10 }}>
          <View
            style={[
              styles.innerContainer,
              expandedItem === list.id && {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomColor: "white",
              },
              innerContainerStyles,
            ]}
          >
            <Text style={[styles.text, textStyles]}>{list.title}</Text>
            {list.icons.map((icon) => (
              <Icon
                key={icon}
                name={icon}
                size={25}
                style={[styles.iconStyle, iconStyles]}
                onPress={() => handleCollapsed(list.id)}
              />
            ))}
          </View>
          <Collapsible
            collapsed={expandedItem !== list.id}
            style={[styles.collapsibleStyle, collapsibleStyle]}
          >
            {list.dropDownValues.map((values, index) => (
              <View style={[styles.accordinView, accordinView]} key={index}>
                <Text style={[styles.accordinText, accordinText]}>
                  {values.title}
                </Text>
                <TextInput
                  readOnly={values.editable}
                  style={[
                    styles.inputStyle,
                    { backgroundColor: values.editable ? "#E2DFDF" : "#EAF0EF" },
                  ]}
                />
              </View>
            ))}
          </Collapsible>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    borderColor:'#317064',
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1.5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  outerContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    width: "95%",
    marginLeft: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 19,
    fontWeight: "bold",
    flex: 1,
    color:'#AFAFAF'
  },
  iconStyle: {
    marginLeft: 10,
        color:'#AFAFAF',
  },
  collapsibleStyle: {
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderColor:'#317064',
    borderWidth: 1.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  accordinView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  accordinText: {
    fontSize: 16,
    fontWeight: "bold",
    flexShrink: 1,
    flexWrap: "wrap",
    color:'#AFAFAF'
  },
  inputStyle: {
    borderColor: "green",
    borderWidth: 1,
    width: "55%",
    padding: 5,
    height: 40,
    borderRadius:10,
  },
});