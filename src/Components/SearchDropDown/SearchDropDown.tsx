import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Keyboard,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CrossIcon from 'react-native-vector-icons/Entypo';
import Colors from '../../utils/Colors/Colors';
import { w } from '../../utils/Helper/Helper';

interface RestaurantItem {
  id: string | number;
  name: string;
  address?: string;
  image?: string;
}

interface Props {
  flatlistData: RestaurantItem[];
  selectedItem: RestaurantItem | string;
  setSelectedItem: (item: RestaurantItem | string) => void;
  placeholder?: string;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  search: string;
  setSearch: (val: string) => void;
  renderFooter?: React.ReactElement | null;
  onSubmitEditing?: () => void;
  editable?: boolean;
  editPostReview?: boolean;
  path?: { name?: string };
  restaurantData?: { id?: string | number };
  label?: string;
  customSearchDropDownContainer?: object;
  customLabelStyles?: object;
  customContainerStyle?: object;
  onToggleDropdown?: (isOpen: boolean) => void;
}

const SearchDropDown: React.FC<Props> = React.memo(
  ({
    label,
    customSearchDropDownContainer,
    flatlistData,
    setSelectedItem,
    placeholder,
    onScroll,
    search,
    setSearch,
    renderFooter,
    onSubmitEditing,
    selectedItem,
    customLabelStyles,
    customContainerStyle,
    onToggleDropdown,
  }) => {
    const itemHeight = 250;
    const [isListVisible, setListVisible] = useState(false);

    useEffect(() => {
      onToggleDropdown?.(isListVisible);
    }, [isListVisible]);

    useEffect(() => {
      if (search?.trim() === '') {
        setListVisible(false);
      }
    }, [search]);

    const onChangeText = (text: string) => {
      setSearch(text);
      setListVisible(true);
    };

    const onselectValue = (item: RestaurantItem) => {
      Keyboard.dismiss();
      setSelectedItem(item);
      setSearch(item?.name);
      setListVisible(false);
    };

    const renderItem = ({ item }: { item: RestaurantItem }) => (
      <View>
        <TouchableWithoutFeedback
          key={item?.id}
          onPress={() => {
            onselectValue(item);
          }}
        >
          <View style={styles.outerView}>
            <View style={styles.innerView}>
              <Text style={styles.name}>{item?.name}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );

    const NoResults = () => (
      <View style={styles.noResultsContainer}>
        <Text
          style={styles.noResultsText}
          numberOfLines={2}
          ellipsizeMode="tail"
        >{`No state founds matching "${search}"`}</Text>
      </View>
    );

    return (
      <View style={{ position: 'relative', zIndex: 10 }}>
        {label ? (
          <Text style={[styles.label, customLabelStyles]}>{label}</Text>
        ) : null}
        <View
          style={[
            styles.mainInputView,
            {
              borderColor:
                selectedItem || search ? Colors.APP_COLOR : Colors.GRAY,
            },
            customSearchDropDownContainer,
          ]}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            value={search}
            onFocus={() => {
              setListVisible(true);
            }}
            placeholder={placeholder}
            placeholderTextColor={Colors.APP_COLOR}
          />

          {selectedItem || search ? (
            <CrossIcon
              name={'cross'}
              size={25}
              color={Colors.APP_COLOR}
              style={{ right: w(20) }}
              onPress={() => {
                setSearch('');
                setSelectedItem('');
              }}
            />
          ) : (
            <Icon
              name={isListVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={25}
              color={Colors.APP_COLOR}
              onPress={() => {
                setListVisible(!isListVisible);
              }}
              style={{ right: w(20) }}
            />
          )}
        </View>

        {search?.trim() !== '' &&
          flatlistData?.length === 0 &&
          isListVisible && <NoResults />}

        {flatlistData?.length > 0 && isListVisible && (
          <FlatList
            data={flatlistData}
            nestedScrollEnabled
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            ListFooterComponent={renderFooter}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            onScroll={onScroll}
            style={[
              styles.listContainer,
              { maxHeight: itemHeight },
              customContainerStyle,
            ]}
          />
        )}
      </View>
    );
  },
);

export default SearchDropDown;
