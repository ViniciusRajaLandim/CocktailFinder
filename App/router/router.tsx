import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import Constants from '../config';
import configureStore from '../ducks/configurationStore';
import HomeStack from '../screens/HomeStack/navigation';

const AppNavigator = createAppContainer(HomeStack);
const store = configureStore();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={Constants.colors.primary}
        barStyle="light-content"
      />
      <AppNavigator />
    </Provider>
  );
};

export default App;
