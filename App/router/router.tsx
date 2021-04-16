import React from 'react';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import configureStore from '../ducks/configurationStore';
import HomeStack from '../screens/HomeStack/navigation';

const AppNavigator = createAppContainer(HomeStack);
const store = configureStore();
const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
