import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View, SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import StepProgressBar from '../../Components/StepProgressBar/StepProgressBar';
import { buildFormDataForImageUpload, h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import QuestionaireCard from '../../Components/QuestionaireCard/QuestionaireCard';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  addQuestionaireAnswer,
  getQuestionsListing,
  getRegularQuestions,
} from './actions';
import { QuestionTypes } from '../../utils/Constants/Constants';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const Questionaire: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { selectedRegularAnswer, regularQuestions } = useSelector(
    (state: RootState) => state.RegularQuestionsAnswer,
  );
    const { selectedAnswer } = useSelector(
    (state: RootState) => state.decidingQuestionAnswer,
  );
  const { serviceId } = useSelector((state: RootState) => state.shopReducer);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const type = regularQuestions[currentIndex]?.type;

  const handleContinue = (
    selectedOption: number[] | number,
    simpleText: string,
    imagePath?: string | null
  ) => {
    const isSelectionEmpty =
      Array.isArray(selectedOption) && selectedOption?.length === 0;
    const isTextEmpty = !simpleText;
    if (
      (type === QuestionTypes.TEXT && isTextEmpty) ||
      ((type === QuestionTypes.SINGLE_SELECT ||
        type === QuestionTypes.MULTI_SELECT ||
        type === QuestionTypes.MULTI_TEXT) &&
        isSelectionEmpty)
    ) {
      Toast.show({
        type: 'error',
        text2:
          type === 'text'
            ? 'Please enter your answer'
            : 'Please select at least one option to continue',
      });
      return;
    }
    if (
      QuestionTypes.MULTI_TEXT &&
      Array.isArray(selectedOption) &&
      selectedOption.some(
        id =>
          regularQuestions[currentIndex]?.options.find(o => o.id === id)
            ?.explanation_required && !simpleText?.[id]?.trim(),
      )
    ) {
      Toast.show({
        type: 'error',
        text2: 'Please provide explanation for required options.',
      });
      return;
    }
    const answers = {
      question: regularQuestions[currentIndex].id,
      selectedOption,
      simpleText,
    };
    dispatch(addQuestionaireAnswer({...answers,serviceId}));
    if (currentIndex < regularQuestions?.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      console.log(selectedRegularAnswer?.[serviceId],'selectedRegularAnswer')
      console.log(selectedAnswer?.[serviceId],'selectedAnswer');
      navigation.navigate('PersonalInformation');
    }
  };

  const handleBackPress = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      if (!serviceId) return;
      setLoading(true);
      try {
        await dispatch(getRegularQuestions(serviceId)).then((res: any) => {
          dispatch(getQuestionsListing(res?.value?.data?.questions));
        });
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [serviceId]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <Header onBackPress={handleBackPress} />

      <View style={styles.mainContainer}>
        <StepProgressBar
          totalLength={regularQuestions?.length}
          currentStep={currentIndex}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={[regularQuestions[currentIndex]]}
            keyExtractor={item => item?.id?.toString()}
            renderItem={({ item }) => {
              return (
                <QuestionaireCard
                  item={item}
                  handleContinue={(selectedOption, plainText) =>
                    handleContinue(selectedOption, plainText)
                  }
                />
              );
            }}
            contentContainerStyle={[
              styles.contentContainer,
              { marginBottom: h(20), paddingHorizontal: w(5) },
            ]}
            ItemSeparatorComponent={() => <View style={{ height: h(25) }} />}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Questionaire;
