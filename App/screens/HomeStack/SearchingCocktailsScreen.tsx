import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';

import KeyboardAvoidScrollview from '../../components/main/keyboard_avoid_scrollview';

import MyAppText from '../../components/main/MyAppText';
import Constants from '../../config';
import DeviceUiInfo from '../../config/device';
import SearchInputHeader from '../../components/HomeStack/SearchInputHeader';

const SearchingCocktailsScreen = props => {
  return (
    <KeyboardAvoidScrollview backgroundColor={Constants.colors.primary}>
      <View style={styles.container}>
        <SearchInputHeader navigation={props.navigation} />
      </View>
    </KeyboardAvoidScrollview>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Constants.layout.padding,
  },
});

export default SearchingCocktailsScreen;
