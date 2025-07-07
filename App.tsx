import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { h } from './src/utils/Helper/Helper';
import { Provider } from 'react-redux';
import store from './src/Store';
import AppStack from './src/Stack/Stack';
import { StatusBar } from 'react-native';
import Colors from './src/utils/Colors/Colors';

const App: React.FC<any> = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.WHITE}
          translucent={false}
        />
        <AppStack />
        <Toast topOffset={h('6%')} />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
