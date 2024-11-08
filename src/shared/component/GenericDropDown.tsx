import { FlatList, StyleProp, View, ViewStyle, TextInput, TouchableOpacity, Text } from "react-native";
import { Menu } from "react-native-paper";
import { useState } from "react";
import { GenericInputFieldStyles, GenericDropDownStyles, GenericLabelStyles, GenericLabelDropDownStyles } from "../../styles/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface Option {
  title: string;
  value: string;
}

type Props = {
  Options: Option[];
  containerStyles?: StyleProp<ViewStyle>;
  itemsStyles?: StyleProp<ViewStyle>;
  label: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  icon?: string;
};

export default function GenericDropDown({
  Options,
  containerStyles,
  itemsStyles,
  label,
  buttonContainerStyles,
  icon = "menu-down",
  ...rest
}: Props) {
  const options: Option[] = Options;
  const [selected, setSelected] = useState("");
  const [visible, setVisible] = useState(false);
  const [searchedValue, setSearchedValue] = useState(options);
  const [IsFocused, setIsFocused] = useState(false); // Track focus state

  function openMenuHandler(): void {
    setVisible(true);
  }

  function closeMenuHandler(): void {
    setVisible(false);
    setSearchedValue(options);
  }

  function selectValueHandler(value: string): void {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      setSelected(selectedOption.title);
    }
    else{
      setSelected("No such Field");
    }
    closeMenuHandler();
  }

  function changeTextHandler(value: string): void {
    setSelected(value);
    const filter = options.filter((option) =>
      option.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedValue(filter);
    openMenuHandler();
  }

  return (
    <View style={[GenericDropDownStyles.container, containerStyles]}>
      <View style={GenericDropDownStyles.labelContainer}>
        <Text style={{marginLeft:10,color:'black',fontFamily:'serif',fontSize:17}}>{label}</Text>
      </View>
      <Menu
        visible={visible}
        style={[GenericDropDownStyles.items, itemsStyles]}
        onDismiss={closeMenuHandler}
        {...rest}
        anchor={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder={label}
              value={selected}
              style={[
                GenericInputFieldStyles.buttonContainer,
                buttonContainerStyles,
                IsFocused && GenericInputFieldStyles.borderChange,
              ]}
              onFocus={openMenuHandler}
              onChangeText={changeTextHandler}
            />
            <TouchableOpacity
              onPress={openMenuHandler}
              style={{ position: 'absolute', right: 10, top: 2 }}
            >
              <MaterialCommunityIcons name="menu-down" size={30} color="#317064" />
            </TouchableOpacity>
          </View>
        }
      >
        <FlatList
          data={searchedValue}
          keyExtractor={(item) => item.value}
          renderItem={(itemData) => (
            <Menu.Item
              key={itemData.item.value}
              onPress={() => selectValueHandler(itemData.item.value)}
              title={itemData.item.title}
            
            />
          )}
        />
      </Menu>
    </View>
  );
}
