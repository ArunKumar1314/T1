import React, { useState } from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { Menu, Portal } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GenericDropDownStyles, GenericDropDownStyles1 } from '../../styles/styles';

interface Option {
  title: string;
  value: string;
}

type Props = {
  id: string; 
  Options: Option[];
  containerStyles?: StyleProp<ViewStyle>;
  itemsStyles?: StyleProp<ViewStyle>;
  label: string;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  iconClosed?: string;
  iconOpen?: string;
  marginLeft?: number;
  isVisible: boolean; 
  setIsVisible: (id: string | null) => void; 
  selectedValue: string; 
  setSelectedValue: (id: string, value: string) => void; 
};

export default function GenericDropDown2({
  id,
  Options,
  containerStyles,
  label,
  buttonContainerStyles,
  iconClosed = 'menu-down',
  iconOpen = 'menu-up',
  marginLeft = 1,
  isVisible,
  setIsVisible,
  selectedValue,
  setSelectedValue,
}: Props) {
  const [searchedValue, setSearchedValue] = useState<Option[]>(Options);

  function openMenuHandler(): void {
    setIsVisible(id); // Show this dropdown only
  }

  function closeMenuHandler(): void {
    setIsVisible(null); // Hide all dropdowns
  }

  function selectValueHandler(value: string): void {
    const selectedOption = Options.find(option => option.value === value);
    if (selectedOption) {
      setSelectedValue(id, selectedOption.title); 
    }
    closeMenuHandler(); // Close the menu after selection
  }

  function changeTextHandler(value: string): void {
    setSelectedValue(id, value); // Update text input value
    const filteredOptions = Options.filter(option =>
      option.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedValue(filteredOptions); 
  }

  return (
    <View style={[GenericDropDownStyles1.container, containerStyles]}>
      <Text style={{ marginLeft: 10, color: 'black', fontFamily: 'serif', fontSize: 17, fontWeight: 'bold' }}>
        {label}
      </Text>
      <Portal.Host>
        <Menu
          visible={isVisible}
          onDismiss={closeMenuHandler}
          style={[
            GenericDropDownStyles1.items,
            { position: 'absolute', zIndex: 9999, top: '85%', marginLeft: marginLeft },
          ]}
          anchor={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                placeholder={label}
                value={selectedValue}
                style={[GenericDropDownStyles.buttonContainer, buttonContainerStyles]}
                onFocus={openMenuHandler}
                onChangeText={changeTextHandler}
                placeholderTextColor={'black'}
              />
              <TouchableOpacity onPress={openMenuHandler} style={{ position: 'absolute', right: 10, top: 15 }}>
                <MaterialCommunityIcons name={isVisible ? iconOpen : iconClosed} size={30} color="#317064" />
              </TouchableOpacity>
            </View>
          }
        >
          <View style={{ zIndex: 9999 }}>
            {searchedValue.map(item => (
              <Menu.Item key={item.value} onPress={() => selectValueHandler(item.value)} title={item.title} />
            ))}
          </View>
        </Menu>
      </Portal.Host>
    </View>
  );
}
