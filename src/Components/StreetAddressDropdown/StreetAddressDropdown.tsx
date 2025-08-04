import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import Colors from '../../utils/Colors/Colors';

interface AddressItem {
  id: string | number;
  street_line: string;
  secondary?: string;
  city?: string;
  state?: string;
  zipcode?: string;
}

interface Props {
  data: AddressItem[];
  selected: AddressItem | null;
  onSelect: (item: AddressItem | null) => void;
  placeholder?: string;
  isLoading?: boolean;
  label?: string;
  customLabelStyles?: object;
  customInputWrapperStyle?: object;
  placeholderTextColor?: string;
  onInputChange?: (text: string) => void;
}

const StreetAddressDropdown: React.FC<Props> = ({
  data,
  selected,
  onSelect,
  label,
  customLabelStyles,
  customInputWrapperStyle,
  isLoading,
  onInputChange,
  placeholder = 'Enter your street address',
  placeholderTextColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (!input) setIsOpen(false);
  }, [input]);

useEffect(() => {
  if (selected) {
    const mainLine = `${selected?.street_line || ''}${selected?.secondary ? ' ' + selected.secondary : ''}`;
    const secondaryLine = [selected?.city, selected?.state, selected?.zipcode]
      .filter(Boolean)
      .join(', ');
    const formatted = [mainLine, secondaryLine]
      .filter(Boolean)
      .join(', ');
    setInput(formatted);
  } else {
    setInput('');
  }
}, [selected]);


  const handleSelect = (item: AddressItem) => {
    const formatted = `${item?.street_line || ''}${
      item?.secondary ? ' ' + item.secondary : ''
    }, ${item?.city || ''}, ${item?.state || ''} ${item?.zipcode || ''}`;
    setInput(formatted);
    onSelect(item);
    setIsOpen(false);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {label ? (
        <Text style={[styles.label, customLabelStyles]}>{label}</Text>
      ) : null}
      <View style={[styles.inputWrapper, customInputWrapperStyle]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={input}
          onChangeText={text => {
            setInput(text);
            setIsOpen(true);
            onInputChange?.(text); // <== call the parent handler
          }}
          onFocus={() => setIsOpen(true)}
          selectionColor={Colors.APP_COLOR}
          numberOfLines={1}
        />
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={Colors.APP_COLOR}
            style={styles.icon}
          />
        )}
      </View>

      {isOpen && input.trim() !== '' && data.length > 0 && (
        <FlatList
          data={data}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          showsVerticalScrollIndicator={false}
          style={styles.dropdown}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.itemText}>{`${item?.street_line || ''} ${
                item?.secondary || ''
              }`}</Text>
              {item?.city || item?.state || item?.zipcode ? (
                <Text style={styles.itemSecondary}>
                  {[item?.city, item?.state, item?.zipcode]
                    .filter(Boolean)
                    .join(', ')}
                </Text>
              ) : null}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default StreetAddressDropdown;
