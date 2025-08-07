import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import styles from './style';
import Button from '../Button/Button';
import Colors from '../../utils/Colors/Colors';
import CustomTextInput from '../TextInput/TextInput';
import {
  h,
  pickImageFromCamera,
  pickImageFromGallery,
} from '../../utils/Helper/Helper';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import Camera from '../Camera/Camera';
import { QuestionTypes } from '../../utils/Constants/Constants';

interface OptionItem {
  id: number;
  text: string;
  select_all?: boolean;
  explanation_required?: boolean;
}

interface QuestionItem {
  id?: number;
  text?: string;
  type?: string;
  options?: OptionItem[];
}

interface Props {
  item?: QuestionItem;
  isLoading?: boolean;
  handleContinue?: (
    selected: number[],
    explaination: string,
    imagePath?: string | null,
  ) => void;
  existingAnswer?: {
    selectedOption: number[] | number;
    simpleText: string;
  };
}

const QuestionaireCard: React.FC<Props> = ({
  item,
  handleContinue,
  isLoading,
}) => {
  const userId = useSelector(
    (state: RootState) => state.registerReducer?.userData?.data?.id,
  );
  console.log(userId,'userId');
  
  const { serviceId } = useSelector((state: RootState) => state.shopReducer);
  const existingAnswer = useSelector((state: RootState) =>
    state?.RegularQuestionsAnswer?.selectedRegularAnswer?.[userId]?.[
      serviceId
    ]?.find((ans: any) => ans?.question === item?.id),
  );
  const [selected, setSelected] = useState<number[]>([]);
  const [explaination, setExplaination] = useState<string>('');
  const [simpleText, setSimpleText] = useState<string>('');
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    if (existingAnswer) {
      if (Array.isArray(existingAnswer?.selectedOption)) {
        setSelected(existingAnswer?.selectedOption);
      } else {
        setSelected([existingAnswer?.selectedOption]);
      }
      setSimpleText(existingAnswer?.simpleText || '');
      setExplaination(existingAnswer?.simpleText || '');
    }
  }, [existingAnswer]);

  const toggleSelect = (id: number) => {
    if (
      item?.type === QuestionTypes.SINGLE_SELECT ||
      item?.type === QuestionTypes.MULTI_TEXT
    ) {
      setSelected([id]);
    } else if (item?.type === QuestionTypes.MULTI_SELECT) {
      setSelected(prev =>
        prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
      );
    }
  };

  const handleExplanationChange = (id: number, value: string) => {
    setExplaination(prev => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handlePressGallery = async () => {
    const image = await pickImageFromGallery();
    if (image?.path) {
      setImagePath(image?.path);
    }
  };
  const handleCameraPress = async () => {
    const image = await pickImageFromCamera();
    if (image?.path) {
      setImagePath(image?.path);
    }
  };

  useEffect(() => {
  console.log('Selected state:', selected);
}, [selected]);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../Assets/Images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.question}>{item?.text}</Text>

      {item?.type === QuestionTypes.TEXT && (
        <CustomTextInput
          placeholder="Enter your answer here..."
          placeholderTextColor={Colors.APP_COLOR}
          value={simpleText}
          onChangeText={text => setSimpleText(text)}
          containerStyle={[styles.containerStyle, { marginTop: h(20) }]}
          customInputWrapper={[
            styles.customInputWrapper,
            { borderColor: Colors.APP_COLOR },
          ]}
          customInputStyles={styles.customInputStyles}
        />
      )}

      {item?.type === QuestionTypes.MULTI_MEDIA && (
        <Camera
          onPressGallery={handlePressGallery}
          onPressCamera={handleCameraPress}
          imageSource={imagePath && { uri: imagePath }}
          onRemoveImage={() => {
            setImagePath(null);
          }}
        />
      )}

      {item?.options?.map(option => {
        const isSelected = selected.includes(option.id);
        const explainationText =
          option?.explanation_required &&
          QuestionTypes.MULTI_TEXT &&
          isSelected;
        return (
          <View key={option.id}>
            <Pressable
              style={[
                styles.optionsView,
                isSelected && {
                  borderColor: Colors.APP_COLOR,
                  borderWidth: 1,
                },
              ]}
              disabled={isLoading}
              onPress={() => toggleSelect(option?.id)}
            >
              <Text style={styles.options}>{option?.text}</Text>
            </Pressable>

            {explainationText && (
              <CustomTextInput
                label="Please explain.."
                placeholder="Please provide additional details..."
                placeholderTextColor={Colors.APP_COLOR}
                value={explaination[option.id] || ''}
                onChangeText={text => handleExplanationChange(option?.id, text)}
                containerStyle={styles.containerStyle}
                customInputWrapper={[
                  styles.customInputWrapper,
                  { borderColor: isSelected && Colors.APP_COLOR },
                ]}
                customInputStyles={styles.customInputStyles}
                customLabelStyles={styles.customLabelStyles}
                editable={!isLoading}
              />
            )}
          </View>
        );
      })}

      {(item?.type !== QuestionTypes.MULTI_MEDIA ||
        (item?.type === QuestionTypes.MULTI_MEDIA && imagePath)) && (
        <Button
          text="Continue"
          onPressHandler={() => {
            if (item?.type === QuestionTypes.TEXT) {
              handleContinue?.([], simpleText);
            } else if (item?.type === QuestionTypes.MULTI_MEDIA) {
              handleContinue?.([], '', imagePath);
            } else {
              handleContinue?.(selected, explaination);
            }
          }}
          customButtonStyles={styles.customButtonStyles}
          customTextStyles={styles.customTextStyles}
          noShadow
          loading={isLoading}
        />
      )}
    </View>
  );
};
export default QuestionaireCard;
