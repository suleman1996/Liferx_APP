import React, { useState } from 'react';
import { Alert, FlatList, ScrollView, View,SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import StepProgressBar from '../../Components/StepProgressBar/StepProgressBar';
import RegularQuestions from '../../utils/RegularQuestions.json';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import QuestionaireCard from '../../Components/QuestionaireCard/QuestionaireCard';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { addQuestionaireAnswer } from './actions';
import { QuestionTypes } from '../../utils/Constants/Constants';

const Questionaire: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const { Questionaire_Answer } = useSelector(
    (state: RootState) => state.RegularQuestionsAnswer,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const type = RegularQuestions[currentIndex]?.type;

  const handleContinue = (
    selectedOption: number[] | number,
    simpleText: string,
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

    dispatch(
      addQuestionaireAnswer({
        questionId: RegularQuestions[currentIndex].id,
        selectedOption,
        simpleText,
      }),
    );

    if (currentIndex < RegularQuestions?.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      navigation.navigate('PersonalInformation');
    }
  };

  const handleBackPress = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }else{
      navigation.goBack()
    }
  };

  console.log(Questionaire_Answer, 'all answers');

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header onBackPress={handleBackPress} />

      <View style={styles.mainContainer}>
        <StepProgressBar
          totalLength={RegularQuestions?.length}
          currentStep={currentIndex}
        />
        <ScrollView showsVerticalScrollIndicator={false} >
          <FlatList
            data={[RegularQuestions[currentIndex]]}
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
