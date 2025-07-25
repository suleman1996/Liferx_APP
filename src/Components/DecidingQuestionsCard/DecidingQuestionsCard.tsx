import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './style';
import Button from '../Button/Button';
import Colors from '../../utils/Colors/Colors';

interface OptionItem {
  id: number;
  text: string;
  select_all?: boolean;
}

interface QuestionItem {
  id?: number;
  text?: string;
  type?: string;
  options?: OptionItem[];
}

interface Props {
  item?: QuestionItem;
  alreadySelected?: number[] | number | null;
  handleContinue?: (selected: number[]) => void;
}

const DecidingQuestionsCard: React.FC<Props> = ({
  item,
  handleContinue,
  alreadySelected,
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    if (typeof alreadySelected === 'number') {
      setSelected([alreadySelected]);
    } else if (Array.isArray(alreadySelected)) {
      setSelected(alreadySelected);
    } else {
      setSelected([]);
    }
  }, [alreadySelected]);

  const toggleSelect = id => {
    const options = item?.options || []; // Get options or an empty array
    const allOption = options.find(opt => opt.select_all)?.id; // Find the "select all" option
    // Check if the toggled id is the "select all" option
    if (id === allOption) {
      const allIds = options.map(opt => opt.id); // Get all option IDs
      // Toggle selection of all options
      setSelected(prev => (prev.length === allIds.length ? [] : allIds));
      return;
    }
    // Handle multi-select case
    if (item?.type === 'multi-select') {
      // Get IDs of individual options (excluding "select all")
      const individualOptionIds = options
        .filter(opt => !opt.select_all)
        .map(opt => opt.id);

      setSelected(prev => {
        // Toggle the selected option
        const updated = prev.includes(id)
          ? prev.filter(i => i !== id) // Deselect if it is already selected
          : [...prev, id]; // Select if not already selected
        // Check if all individual options are selected
        const allSelected = individualOptionIds.every(optId =>
          updated.includes(optId),
        );
        // Add "select all" if all individual options are selected
        if (allSelected && allOption) {
          // Only add "select all" if it's not already included
          const newSelection = updated.includes(allOption)
            ? updated
            : [...updated, allOption];
          return newSelection;
        }
        // Remove "select all" if not all are selected
        return updated.filter(i => i !== allOption);
      });
      return;
    }
    // For single select, just set the selected id
    setSelected([id]);
  };

  // const toggleSelect = (id: number) => {
  //   const options = item?.options || [];
  //   const allId = options.find(opt => opt.select_all)?.id;
  //   const isAll = id === allId;

  //   if (item?.type === 'multi-select') {
  //     if (isAll) {
  //       const allIds = options.map(opt => opt.id);
  //       const newSelection = selected.length === allIds.length ? [] : allIds;
  //       setSelected(newSelection);
  //       console.log('Tapped "All of the above"');
  //       console.log('Selected IDs:', newSelection);
  //     } else {
  //       setSelected(prev => {
  //         const updated = prev.includes(id)
  //           ? prev.filter(i => i !== id)
  //           : [...prev, id];
  //         return updated;
  //       });
  //     }
  //   } else {
  //     setSelected([id]);
  //   }
  // };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.question}>{item?.text}</Text>

      {item?.options?.map(option => {
        const isSelected = selected?.includes(option?.id);
        return (
          <Pressable
            key={option.id}
            style={[
              styles.optionsView,
              isSelected && {
                borderColor: Colors.APP_COLOR,
                borderWidth: 1,
              },
            ]}
            onPress={() => toggleSelect(option?.id)}
          >
            <Text style={styles.options}>{option?.text}</Text>
          </Pressable>
        );
      })}

      <Button
        text="Continue"
        onPressHandler={() => handleContinue?.(selected)}
        customButtonStyles={styles.customButtonStyles}
        customTextStyles={styles.customTextStyles}
        noShadow
      />
    </View>
  );
};

export default DecidingQuestionsCard;
