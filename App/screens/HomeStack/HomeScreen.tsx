import React, {FC, useState} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
const inputContainerHeight = DeviceUiInfo.verticalScale(40);
const HomeScreen: FC<Props> = props => {
  const [centeredComponentHeight, setCenteredComponentHeight] = useState(
    DeviceUiInfo.verticalScale(150),
  );
  function getCenteredComponentDimensions(event: object) {
    const {height} = event.nativeEvent.layout;
    setCenteredComponentHeight(height);
  }
  const centeredComponentOffset =
    centeredComponentHeight - inputContainerHeight / 2;
  return (
    <KeyboardAvoidScrollview backgroundColor={Constants.colors.dark}>
      <ImageBackground
        style={styles.backgroundImageContainer}
        source={require('../../assets/images/HomeStack/HomeScreenBackground.png')}>
        <View
          style={[styles.centeredContainer, {top: -centeredComponentOffset}]}>
          <View
            onLayout={getCenteredComponentDimensions}
            style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              resizeMode="contain"
              source={require('../../assets/images/main/Logo.png')}
            />
          </View>
          <MyAppText style={styles.title} white h2>
            Cocktail
            <MyAppText white h2 bold>
              Finder
            </MyAppText>
          </MyAppText>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('SearchingCocktailsScreen')
            }>
            <View style={styles.inputContainer}>
              <Ionicons
                name="md-search-outline"
                color={Constants.colors.primary}
                size={Constants.fonts.xLargeFontSize}
              />
              <MyAppText style={styles.inputPlaceholder}>
                Search your favorite cocktail
              </MyAppText>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidScrollview>
  );
};

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: Constants.layout.window.height,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    height: DeviceUiInfo.verticalScale(70),
    aspectRatio: 1,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    paddingVertical: DeviceUiInfo.verticalScale(20),
  },
  inputContainer: {
    height: inputContainerHeight,
    width: DeviceUiInfo.scale(290),
    flexDirection: 'row',
    backgroundColor: Constants.colors.white,
    borderRadius: DeviceUiInfo.scale(5),
    opacity: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Constants.layout.padding,
  },
  inputPlaceholder: {
    marginLeft: Constants.layout.padding / 2,
  },
});

export default HomeScreen;
