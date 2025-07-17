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
  // alreadySelected?: number[] | number | null;
  handleContinue?: (selected: number[]) => void;
}

const DecidingQuestionsCard: React.FC<Props> = ({ item, handleContinue }) => {
  const [selected, setSelected] = useState<number[]>([]);

  //  useEffect(() => {
  //   if (typeof alreadySelected === 'number') {
  //     setSelected([alreadySelected]);
  //   } else if (Array.isArray(alreadySelected)) {
  //     setSelected(alreadySelected);
  //   } else {
  //     setSelected([]);
  //   }
  // }, [alreadySelected]);

//   const toggleSelect = (id: number) => {
//   const options = item?.options || [];
//   const allOption = options.find(opt => opt.select_all);
//   const allId = allOption?.id;
//   const normalIds = options.filter(opt => !opt.select_all).map(opt => opt.id);

//   if (item?.type === 'multi-select') {
//     if (id === allId) {
//       // Toggle "All of the above"
//       if (selected.includes(allId)) {
//         setSelected([]);
//       } else {
//         setSelected([...normalIds, allId]);
//       }
//     } else {
//       let updated = selected.includes(id)
//         ? selected.filter(i => i !== id)
//         : [...selected, id];

//       // ✅ If all normal options are selected, add "All of the above"
//       const allSelected = normalIds.every(optId => updated.includes(optId));
//       if (allSelected && allId) {
//         updated = [...updated, allId];
//       }

//       // ✅ If not all selected, remove "All of the above"
//       if (!allSelected && updated.includes(allId)) {
//         updated = updated.filter(i => i !== allId);
//       }

//       setSelected(updated);
//     }
//   } else {
//     setSelected([id]); // single-select
//   }
// };


  const toggleSelect = (id: number) => {

    
    const options = item?.options || [];
    const allId = options.find(opt => opt.select_all)?.id;
    const isAll = id === allId;

    if (item?.type === 'multi-select') {
      if (isAll) {
        const allIds = options.map(opt => opt.id);
        const newSelection = selected.length === allIds.length ? [] : allIds;
        setSelected(newSelection);
        console.log('Tapped "All of the above"');
        console.log('Selected IDs:', newSelection);
      } else {
        setSelected(prev => {
          const updated = prev.includes(id)
            ? prev.filter(i => i !== id)
            : [...prev, id];
          return updated;
        });
      }
    } else {
      setSelected([id]); // single-select
      console.log(`Single-select: selected ID = ${id}`);
    }
  };

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
