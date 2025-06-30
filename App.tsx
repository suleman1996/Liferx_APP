import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Stack from './src/Stack/Stack';
import { h } from './src/utils/Helper/Helper';
import { Provider } from 'react-redux';
import store from './src/Store';

const App: React.FC<any> = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
        <Toast topOffset={h('6%')} />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
