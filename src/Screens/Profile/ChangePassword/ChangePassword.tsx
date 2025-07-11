import React, { use, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import Header from '../../../Components/Header/Header';
import { Alert, Pressable, Text, View } from 'react-native';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import { h, useTypedNavigation } from '../../../utils/Helper/Helper';
import Colors from '../../../utils/Colors/Colors';
import Button from '../../../Components/Button/Button';
import EyeIcon from 'react-native-vector-icons/Entypo';

const ChangePassword: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmNewPasswordVisible, setIsConfirmNewPasswordVisible] =
    useState(false);

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [selected, setSelected] = useState<string | null>(null);
  // const [answers,setAnswers] = useState([]);

  // const questions = [
  //   {
  //     question: 'What is the capital of France?',
  //     options: ['Paris', 'Berlin', 'London', 'Madrid'],
  //   },
  //   {
  //     question: 'Which language is used for Android development?',
  //     options: ['Java', 'Swift', 'Python', 'Kotlin'],
  //   },
  //   {
  //     question: 'What is 2 + 2?',
  //     options: ['3', '4', '5', '6'],
  //   },
  //   {
  //     question: 'Which ocean is the largest?',
  //     options: ['Indian', 'Pacific', 'Atlantic', 'Arctic'],
  //   },
  //   {
  //     question: 'What color is the sky on a clear day?',
  //     options: ['Blue', 'Green', 'Red', 'Yellow'],
  //   },
  // ];

  // const handleContinue=()=>{
  //   if(selected){
  //     const updatedAnswer = [...answers]
  //     updatedAnswer[currentIndex] = selected
  //     setAnswers(updatedAnswer)

  //     if(currentIndex <= questions?.length - 1){
  //       setCurrentIndex(currentIndex  + 1)
  //       setSelected(null)
  //     }else{
  //        console.log('Final Answers:', updatedAnswers);
  //     }
  //   }
  // }


  // console.log(answers)

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Change Password" />
      <View style={styles.mainContainer}>
{/*         
        <Text>{questions[currentIndex]?.question}</Text>
        {questions[currentIndex]?.options?.map((option, index) => {
          const isSelected = selected === option;
          return (
            <Pressable onPress={() => setSelected(option)}>
              <Text style={{ color: isSelected ? 'green' : 'black' }}>
                {option}
              </Text>
            </Pressable>
          );
        })}

        <Pressable
          style={{ backgroundColor: 'grey', padding: 20, alignItems: 'center' }}
          onPress={()=>{
            handleContinue();
          }}
        >
          <Text style={{ color: 'white' }}>Continue</Text>
        </Pressable> */}
       <CustomTextInput
          label="Old Password"
          secureTextEntry={!isOldPasswordVisible}
          customLabelStyles={styles.customLabelStyles}
          customInputWrapper={[
            styles.customInputStyle,
            {
              marginTop: h(5),
            },
          ]}
          placeholder="Enter your old password"
          placeholderTextColor={Colors.APP_COLOR}
          selectionColor={Colors.APP_COLOR}
          containerStyle={styles.inputContainer}
          rightImage={
            <EyeIcon
              name={isOldPasswordVisible ? 'eye-with-line' : 'eye'}
              size={20}
              color={Colors.APP_COLOR}
              style={styles.eyeIcon}
              onPress={() => setIsOldPasswordVisible(!isOldPasswordVisible)}
            />
          }
        />

        <CustomTextInput
          label="New Password"
          customLabelStyles={styles.customLabelStyles}
          secureTextEntry={!isNewPasswordVisible}
          customInputWrapper={[
            styles.customInputStyle,
            {
              marginTop: h(5),
            },
          ]}
          placeholder="Enter your new password"
          placeholderTextColor={Colors.APP_COLOR}
          selectionColor={Colors.APP_COLOR}
          containerStyle={[styles.inputContainer, { marginTop: 0 }]}
          rightImage={
            <EyeIcon
              name={isNewPasswordVisible ? 'eye-with-line' : 'eye'}
              size={20}
              color={Colors.APP_COLOR}
              style={styles.eyeIcon}
              onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
            />
          }
        />
        <CustomTextInput
          label="Confirm New Password"
          secureTextEntry={!isConfirmNewPasswordVisible}
          customLabelStyles={styles.customLabelStyles}
          customInputWrapper={[
            styles.customInputStyle,
            {
              marginTop: h(5),
            },
          ]}
          placeholder="Confirm your new password"
          placeholderTextColor={Colors.APP_COLOR}
          selectionColor={Colors.APP_COLOR}
          containerStyle={[styles.inputContainer, { marginTop: 0 }]}
          rightImage={
            <EyeIcon
              name={isConfirmNewPasswordVisible ? 'eye-with-line' : 'eye'}
              size={20}
              color={Colors.APP_COLOR}
              style={styles.eyeIcon}
              onPress={() =>
                setIsConfirmNewPasswordVisible(!isConfirmNewPasswordVisible)
              }
            />
          }
        />

        <View style={styles.buttonView}>
          <Button
            text="Save New Password"
            customButtonStyles={styles.saveButton}
            customTextStyles={styles.buttonText}
            noShadow
          />
          <Button
            text="Cancel"
            customButtonStyles={styles.cancelButton}
            customTextStyles={[styles.buttonText,{color:Colors.APP_COLOR}]}
            noShadow
            onPressHandler={() => {
              navigation.goBack();
            }}
          />
        </View> 
      </View>
    </SafeAreaView>
  );
};
export default ChangePassword;
