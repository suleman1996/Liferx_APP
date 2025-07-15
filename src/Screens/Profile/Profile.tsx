import React from 'react';
import {
  Pressable,
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, useTypedNavigation, w } from '../../utils/Helper/Helper';
import Colors from '../../utils/Colors/Colors';
import EditIcon from 'react-native-vector-icons/Feather';

const Profile: React.FC<any> = () => {
  const navigation = useTypedNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Profile" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: h(20),
        }}
      >
        <View style={styles.mainContainer}>
          <View style={styles.roundedView}>
            <Image
              source={require('../../Assets/Images/DefaultIcon.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.profileName}>Anna John</Text>
          </View>

          <View style={styles.innerContainer}>
            <View style={styles.editView}>
              <Text style={styles.accDetails}>Account Details</Text>
              <Pressable
                style={styles.editIconView}
                onPress={() => {
                  navigation.navigate('UpdateAccountDetail');
                }}
              >
                <EditIcon
                  name="edit-2"
                  size={18}
                  color={Colors.WHITE}
                  style={styles.pencilIcon}
                />

                <Text style={styles.editText}>Edit</Text>
              </Pressable>
            </View>
            <View style={styles.leftColumn}>
              <Text style={styles.text1}>First Name</Text>
              <Text style={styles.text1}>Anna</Text>
            </View>
            <View style={styles.leftColumn}>
              <Text style={styles.text1}>Last Name</Text>
              <Text style={styles.text1}>John</Text>
            </View>
            <View style={styles.leftColumn}>
              <Text style={styles.text1}>Email</Text>
              <Text style={styles.text1}>Anna@gmail.com</Text>
            </View>
            <View style={styles.leftColumn}>
              <Text style={styles.text1}>Gender</Text>
              <Text style={styles.text1}>Female</Text>
            </View>
            <View style={styles.leftColumn}>
              <Text style={styles.text1}>Date Of Birth</Text>
              <Text style={styles.text1}>07-07-1990</Text>
            </View>
            <View style={[styles.leftColumn, { borderBottomWidth: 0 }]}>
              <Text style={styles.text1}>Phone</Text>
              <Text style={styles.text1}>(212)-121-2121</Text>
            </View>
            <View style={[styles.editView, { marginTop: h(20) }]}>
              <Text style={styles.accDetails}>Payment Method</Text>
              <Pressable style={styles.editIconView}>
                <EditIcon
                  name="edit-2"
                  size={18}
                  color={Colors.WHITE}
                  style={styles.pencilIcon}
                />

                <Text style={styles.editText}>Edit</Text>
              </Pressable>
            </View>
            <View style={[styles.leftColumn, { borderBottomWidth: 0 }]}>
              <Text style={styles.text1}>Default Card</Text>
              <Text style={styles.text1}>**** **** **** 4242</Text>
            </View>
            <View style={[styles.editView, { marginTop: h(20) }]}>
              <Text style={styles.accDetails}>Password</Text>
              <Pressable
                style={styles.editIconView}
                onPress={() => {
                  navigation.navigate('ChangePassword');
                }}
              >
                <EditIcon
                  name="edit-2"
                  size={18}
                  color={Colors.WHITE}
                  style={styles.pencilIcon}
                />

                <Text style={styles.editText}>Edit</Text>
              </Pressable>
            </View>
            <View style={[styles.leftColumn, { borderBottomWidth: 0 }]}>
              <Text style={styles.text1}>Change Password</Text>
              <Text style={styles.text1}>************</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
