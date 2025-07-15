import React from 'react';
import { FlatList, Image, Text, View, SafeAreaView } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import { h, w } from '../../utils/Helper/Helper';
import Button from '../../Components/Button/Button';
import Colors from '../../utils/Colors/Colors';

const servicesData = [
  {
    title: 'Regrow Hair',
    icon: require('../../Assets/Images/Hair.png'),
    active: false,
  },
  {
    title: 'Better Sex',
    icon: require('../../Assets/Images/MinoxiBlend.png'),
    active: true,
  },
  {
    title: 'Weight Loss',
    description: 'Clinical support meets real results.',
    active: false,
  },
];

const Shop: React.FC<any> = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.container}>
      <Text
        style={[
          styles.status,
          item?.active
            ? { backgroundColor: Colors.LIGHT_GREEN }
            : { opacity: 0 },
        ]}
      >
        Active
      </Text>

      {item?.icon ? (
        <Image source={item.icon} style={styles.image} />
      ) : (
        <View style={[{ opacity: 0 }]} />
      )}
      <Text style={styles.text}>{item?.title}</Text>
      {item?.description && (
        <Text style={styles.descrption}>{item?.description}</Text>
      )}
      <Button
        text={
          item?.description
            ? 'Learn More'
            : item?.active
            ? 'Already Active'
            : 'Get Started'
        }
        customButtonStyles={[
          styles.customButtonStyles,
          {
            backgroundColor: item?.active
              ? Colors.PLACEHOLDER
              : Colors.APP_COLOR,
          },
        ]}
        customTextStyles={styles.customTextStyles}
        noShadow
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Shop" />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Services</Text>

        <FlatList
          data={servicesData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: h(10), marginTop: h(20) }}
          style={{ flexGrow: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Shop;
