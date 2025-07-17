import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import decidingQuestionsData from '../../utils/questions.json';
import DecidingQuestionsCard from '../../Components/DecidingQuestionsCard/DecidingQuestionsCard';
import { addAnswer, clearDecidingAnswer } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { RootState } from '../../Store';

const DecidingQuestions: React.FC<any> = () => {
  const { answers } = useSelector(
    (state: RootState) => state?.decidingQuestionAnswer,
  );
  const navigation = useTypedNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion =
    decidingQuestionsData?.deciding_questions[currentIndex];

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

    dispatch(addAnswer(answer));
    const nextIndex = currentIndex + 1;
    if (nextIndex < decidingQuestionsData?.deciding_questions?.length) {
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate('SelectState');
    }
  };

  // const handleBack = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   } else {
  //     navigation.goBack(); // Or exit the screen
  //   }
  // };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(clearDecidingAnswer());
    }, [dispatch]),
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <FlatList
            data={[currentQuestion]}
            keyExtractor={item => item?.id?.toString()}
            renderItem={({ item }) => {
              // const existingAnswer = answers.find(
              //   ans => ans.deciding_questions === item?.id,
              // );
              // const alreadySelected = existingAnswer?.json_answer?.selected;
              return (
                <DecidingQuestionsCard
                  item={item}
                  // alreadySelected={alreadySelected}
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
