import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { h } from './src/utils/Helper/Helper';
import { Provider } from 'react-redux';
import store, { persistor } from './src/Store';
import AppStack from './src/Stack/Stack';
import { StatusBar } from 'react-native';
import Colors from './src/utils/Colors/Colors';
import CustomToast from './src/Components/CustomToast/CustomToast';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC<any> = () => {
  useEffect(() => {
    SplashScreen?.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={Colors.WHITE}
              translucent={true}
            />
            <AppStack />
            <Toast
              config={{
                success: props => (
                  <CustomToast
                    text1={props.text1}
                    text2={props.text2}
                    type="success"
                  />
                ),
                error: props => (
                  <CustomToast
                    text1={props.text1}
                    text2={props.text2}
                    type="error"
                  />
                ),
                info: props => (
                  <CustomToast
                    text1={props.text1}
                    text2={props.text2}
                    type="info"
                  />
                ),
              }}
              topOffset={h('10%')}
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
