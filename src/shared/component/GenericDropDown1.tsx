import React, { useState } from 'react';
import { FlatList, StyleProp, View, ViewStyle,TextInput } from 'react-native';
import {Menu, Portal } from 'react-native-paper';
import {
  GenericDropDownStyles,
  GenericDropDownStyles1,
  GenericInputFieldStyles,
} from '../../styles/styles';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
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
  zIndex?:number;
};

export default function GenericDropDown1({
  Options,
  containerStyles,
  itemsStyles,
  label,
  buttonContainerStyles,
  icon = 'menu-down',
  zIndex,
  ...rest
}: Props) {
  const options: Option[] = Options;

  const [selected, setSelected] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false); 
  const [searchedValue, setSearchedValue] = useState<Option[]>(options);
  const [error,setError]=useState(false);

  function openMenuHandler(): void {
    setVisible(true);
    setError(false)
  }


  function closeMenuHandler(): void {
    setVisible(false);
  }

  function selectValueHandler(value: string): void {
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption) {
      setSelected(selectedOption.title);
      setError(false)
    }
    closeMenuHandler();
  }


  function changeTextHandler(value: string): void {
    setSelected(value);
    const filter = options.filter(option =>
      option.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchedValue(filter);
  }

  return (
    <View style={[GenericDropDownStyles1.container, containerStyles,]}>
     
       <Text style={{marginLeft:10,color:'black',fontFamily:'serif',fontSize:17,fontWeight:'bold'}}>{label}</Text>
      <Portal.Host>
        <Menu
          visible={visible} 
          onDismiss={closeMenuHandler} 
          style={[
            GenericDropDownStyles1.items,
            { position: 'absolute', zIndex: 9999, top: '85%',marginLeft:20 },
          ]}
          {...rest}
          anchor={
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              placeholder={label}
              value={selected}
              style={[
                GenericDropDownStyles.buttonContainer,
                buttonContainerStyles,
                
              ]}
              onFocus={openMenuHandler}
              onChangeText={changeTextHandler}
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
              onPress={openMenuHandler}
              style={{ position: 'absolute', right: 10, top: 15 }}
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
