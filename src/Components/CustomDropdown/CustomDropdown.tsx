import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { h, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import { FONTS } from '../../Assets/Fonts/Fonts';

interface DropdownItem {
  label: string;
  value: string;
}

interface Props {
  placeholder?: string;
  items: DropdownItem[];
  label?: string;
  style?: object;
  placeholderStyle?: object;
  customLabelStyles?: object;
  selectedValue: string | null;
  CustomDropdownContainer?: object;
  onChange: (val: any | null) => void;
}

const CustomDropdown: React.FC<Props> = ({
  placeholder = 'Select an option',
  items,
  selectedValue,
  customLabelStyles,
  style,
  placeholderStyle,
  label,
  CustomDropdownContainer,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [localItems, setLocalItems] = useState(items);

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, customLabelStyles]}>{label}</Text>}

      <DropDownPicker
        open={open}
        value={selectedValue}
        items={localItems}
        setOpen={setOpen}
        setValue={callback => {
          const newValue = callback(selectedValue);
          onChange(newValue);
        }}
        setItems={setLocalItems}
        placeholder={placeholder}
        zIndex={1000}
        zIndexInverse={3000}
        style={{
          height: h(60),
          borderWidth: 1,
          borderColor: Colors.GRAY,
          borderRadius: 15,
          paddingHorizontal: w('5%'),
          marginTop: h(5),
          ...style,
        }}
        textStyle={{
          fontSize: h(16),
          color: selectedValue ? Colors.APP_COLOR : Colors.GRAY,
        }}
        placeholderStyle={{
          fontSize: h(16),
          color: Colors.APP_COLOR,
          ...placeholderStyle,
        }}
        dropDownContainerStyle={{
          borderColor: Colors.GRAY,
          paddingLeft: w('3%'),
          ...CustomDropdownContainer,
        }}
        selectedItemLabelStyle={{
          color: Colors.APP_COLOR,
          fontFamily: FONTS.MONTSERRAT_MEDIUM,
        }}
        listItemLabelStyle={{
          color: Colors.BLACK,
          fontFamily: FONTS.MONTSERRAT_MEDIUM,
        }}
        tickIconStyle={
          {
            tintColor: Colors.APP_COLOR,
          } as any
        }
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: w(16),
    color: Colors.BLACK,
    fontFamily: 'HindSiliguri-Regular',
  },
});
