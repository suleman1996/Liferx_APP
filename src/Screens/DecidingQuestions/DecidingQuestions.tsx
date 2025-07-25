import React, { useEffect, useState } from 'react';
import { FlatList, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import DecidingQuestionsCard from '../../Components/DecidingQuestionsCard/DecidingQuestionsCard';
import {
  addDecidingAnswer,
  getDecidingQuestion,
  selectedDecidingAnswer,
} from './actions';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const DecidingQuestions: React.FC<any> = ({ route }) => {
  const { decidingQuestions, selectedAnswer } = useSelector(
    (state: RootState) => state?.decidingQuestionAnswer,
  );
  const { serviceId } = useSelector((state: RootState) => state?.shopReducer);
  const navigation = useTypedNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentQuestion = decidingQuestions?.deciding_questions?.[currentIndex];
  const dispatch = useDispatch();

  const handleContinue = (selected: number[] | number) => {
    if (Array.isArray(selected) && selected?.length === 0) {
      Toast.show({
        type: 'error',
        text2: 'Please select at least one option to continue',
      });
      return;
    }
    // Build the answer object
    const answer = {
      question: null,
      deciding_questions: currentQuestion?.id,
      json_answer: {
        selected:
          Array.isArray(selected) && selected.length === 1
            ? selected[0]
            : selected,
      },
    };
    dispatch(selectedDecidingAnswer({ ...answer, serviceId }));
    const nextIndex = currentIndex + 1;
    if (currentIndex < decidingQuestions?.deciding_questions?.length - 1) {
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate('SelectState');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const fetchDecidingQuestions = async () => {
    setLoading(true);
    try {
      await dispatch(getDecidingQuestion(serviceId)).then((res: any) => {
        const response = res?.value?.data;
        dispatch(addDecidingAnswer(response));
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDecidingQuestions();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomLoader visible={loading} />
      <Header onBackPress={handleBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <FlatList
            data={[currentQuestion]}
            keyExtractor={item => item?.id?.toString()}
            renderItem={({ item }) => {
              const existingAnswer = selectedAnswer?.[serviceId]?.find(
                ans => ans.deciding_questions === item?.id,
              );
              const alreadySelected = existingAnswer?.json_answer?.selected;
              return (
                <DecidingQuestionsCard
                  item={item}
                  alreadySelected={alreadySelected}
                  handleContinue={select => handleContinue(select)}
                />
              );
            }}
            contentContainerStyle={[
              styles.contentContainer,
              { marginBottom: h(20), paddingHorizontal: w(5) },
            ]}
            ItemSeparatorComponent={() => <View style={{ height: h(25) }} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DecidingQuestions;
