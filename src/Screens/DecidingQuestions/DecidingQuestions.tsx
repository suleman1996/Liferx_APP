import React, { useEffect, useState } from 'react';
import { FlatList, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import DecidingQuestionsCard from '../../Components/DecidingQuestionsCard/DecidingQuestionsCard';
import {
  addDecidingAnswer,
  getDecidingQuestion,
  getSessionId,
  saveDecidingAnswers,
  selectedDecidingAnswer,
  setStartSession,
} from './actions';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { RootState } from '../../Store';
import CustomLoader from '../../Components/LoaderModal/LoaderModal';

const DecidingQuestions: React.FC<any> = ({ route }) => {
  const { decidingQuestions, selectedAnswer } = useSelector(
    (state: RootState) => state?.decidingQuestionAnswer,
  );
  const userId = useSelector((state: RootState) => state.login?.userData?.id);
  const { serviceId } = useSelector((state: RootState) => state?.shopReducer);
  const navigation = useTypedNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const currentQuestion = decidingQuestions?.deciding_questions?.[currentIndex];
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDecidingQuestions();
  }, []);

  const handleContinue = async (selected: number[] | number) => {
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
    dispatch(selectedDecidingAnswer({ ...answer, serviceId, userId }));
    const nextIndex = currentIndex + 1;
    if (currentIndex < decidingQuestions?.deciding_questions?.length - 1) {
      setCurrentIndex(nextIndex);
    } else {
      const session_id = await fetchSessionID();
      if (!session_id) {
        setLoading(false);
        return;
      }
      const body = {
        answers: selectedAnswer?.[userId]?.[serviceId]?.map(
          ({ serviceId, userId, ...rest }) => rest,
        ),
        session_id,
      };
      setLoading(true);
      dispatch(saveDecidingAnswers(body))
        .then((response: any) => {
          if (response?.value?.status === 200) {
            Toast.show({
              type: 'success',
              text2: response?.value?.data?.message,
            });
            setTimeout(() => {
              navigation.navigate('SelectState');
            }, 200);
          }
          setLoading(false);
        })
        .catch((error: string) => {
          setLoading(false);
          Toast.show({
            type: 'error',
            text2: error,
          });
        });
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

  const fetchSessionID = async (): Promise<string | null> => {
    const body = {
      questionnaire_id: decidingQuestions?.questionnaire_id,
    };
    try {
      const response = await dispatch(setStartSession(body));
      if (response?.value?.status === 200) {
        const id = response?.value?.data?.session_id;
        dispatch(getSessionId(id));
        return id;
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text2: error,
      });
    }
    return null;
  };

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
              const existingAnswer = selectedAnswer?.[userId]?.[
                serviceId
              ]?.find((ans: any) => ans.deciding_questions === item?.id);
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
