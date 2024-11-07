import React, { useState } from 'react';
import { FlatList, StyleProp, View, ViewStyle,TextInput } from 'react-native';
import {Menu, Portal } from 'react-native-paper';
import {
  GenericDropDownStyles1,
  GenericInputFieldStyles,
} from '../../styles/styles';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
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

export default function GenericDropDown1({
  Options,
  containerStyles,
  itemsStyles,
  label,
  buttonContainerStyles,
  icon = 'menu-down',
  ...rest
}: Props) {
  const options: Option[] = Options;

  const [selected, setSelected] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false); // Keep the dropdown open
  const [searchedValue, setSearchedValue] = useState<Option[]>(options);

  // Function to handle opening the menu
  function openMenuHandler(): void {
    setVisible(true);
  }

  // Function to close the menu
  function closeMenuHandler(): void {
    setVisible(false);
  }

  // Function to handle selecting a value from the menu
  function selectValueHandler(value: string): void {
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption) {
      setSelected(selectedOption.title);
    }
    closeMenuHandler();
  }

  // Function to handle text change and filter the options
  function changeTextHandler(value: string): void {
    setSelected(value);
    const filter = options.filter(option =>
      option.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchedValue(filter); // Update filtered options based on input
  }

  return (
    <View style={[GenericDropDownStyles1.container, containerStyles,]}>
     
       <Text style={{marginLeft:10,color:'#999999',fontFamily:'serif',fontSize:17}}>{label}</Text>
      <Portal.Host>
        <Menu
          visible={visible} // Keep the menu open while typing
          onDismiss={closeMenuHandler} // Allow closing the menu if requested
          style={[
            GenericDropDownStyles1.items,
            { position: 'absolute', zIndex: 9999, top: '85%',marginLeft:20 }, // Set a higher zIndex here
          ]}
          {...rest}
          anchor={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder={label}
              value={selected}
              style={[
                GenericInputFieldStyles.buttonContainer,
                buttonContainerStyles,
                
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
          }>
          <View style={{ zIndex: 9999 }}>
            {searchedValue.map(item => {
              return (
                <Menu.Item
                  key={item.value}
                  onPress={() => selectValueHandler(item.value)}
                  title={item.title}
                />
              );
            })}
          </View>
        </Menu>
      </Portal.Host>
    </View>
  );
}
