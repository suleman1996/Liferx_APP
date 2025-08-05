import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View, SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import StepProgressBar from '../../Components/StepProgressBar/StepProgressBar';
import {
  buildFormDataForImageUpload,
  h,
  useTypedNavigation,
  w,
} from '../../utils/Helper/Helper';
import QuestionaireCard from '../../Components/QuestionaireCard/QuestionaireCard';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import {
  addQuestionaireAnswer,
  getQuestionsListing,
  getRegularQuestions,
  saveRegularRuestions,
} from './actions';
import { QuestionTypes } from '../../utils/Constants/Constants';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const Questionaire: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const userId = useSelector(
    (state: RootState) => state.registerReducer?.userData?.id,
  );
  const { selectedRegularAnswer, regularQuestions } = useSelector(
    (state: RootState) => state.RegularQuestionsAnswer,
  );
  const { selectedAnswer, sessionId } = useSelector(
    (state: RootState) => state.decidingQuestionAnswer,
  );
  const [loadingState, setLoadingState] = useState({
    fetching: false,
    submitting: false,
  });
  const { serviceId } = useSelector((state: RootState) => state.shopReducer);
  const [currentIndex, setCurrentIndex] = useState(0);
  const type = regularQuestions[currentIndex]?.type;

  const handleContinue = (
    selectedOption: number[] | number,
    simpleText: string,
    imagePath?: string | null,
  ) => {
    const currentQuestion = regularQuestions[currentIndex];
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
          regularQuestions[currentIndex]?.options.find((o: any) => o.id === id)
            ?.explanation_required && !simpleText?.[id]?.trim(),
      )
    ) {
      Toast.show({
        type: 'error',
        text2: 'Please provide explanation for required options.',
      });
      return;
    }
    if (type === QuestionTypes?.MULTI_MEDIA && imagePath) {
      const formData = new FormData();
      formData.append('question', currentQuestion?.id);
      formData.append('session_id', sessionId);
      formData.append('service_id', serviceId);
      formData.append('user_id', userId);
      formData.append('media', {
        uri: imagePath,
        name: `image_${Date.now()}.jpg`,
        type: 'image/jpeg',
      });
    } else {
      const answers = {
        question: currentQuestion?.id,
        selectedOption,
        simpleText,
        session_id: sessionId,
      };
      setLoadingState(prev => ({ ...prev, submitting: true }));
      dispatch(addQuestionaireAnswer({ ...answers, serviceId, userId }));
      dispatch(saveRegularRuestions(answers))
        .then((response: any) => {
          if (response?.payload?.status === 200) {
            setLoadingState(prev => ({ ...prev, submitting: false }));
          }
        })
        .catch((error: string) => {
          setLoadingState(prev => ({ ...prev, submitting: false }));
          console.log(error, 'error');
        });
    }
    if (currentIndex < regularQuestions?.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
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
      setLoadingState(prev => ({ ...prev, fetching: true }));
      try {
        await dispatch(getRegularQuestions(serviceId)).then((res: any) => {
          dispatch(getQuestionsListing(res?.payload?.data?.questions));
        });
      } finally {
        setLoadingState(prev => ({ ...prev, fetching: false }));
      }
    };
    fetchQuestions();
  }, [serviceId]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader
        visible={loadingState.fetching || loadingState.submitting}
      />
      <Header onBackPress={handleBackPress} />

      <View style={styles.mainContainer}>
        <StepProgressBar
          totalLength={regularQuestions?.length}
          currentStep={currentIndex}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {!loadingState?.fetching && (
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
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Questionaire;
