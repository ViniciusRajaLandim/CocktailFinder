import React, {FC, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from '../../config';
import DeviceUiInfo from '../../config/device';
import Feather from 'react-native-vector-icons/Feather';
import MyAppText from '../main/MyAppText';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  onChangeText: (text: string) => void;
  children: null;
  navigation: object;
}

const SearchInputHeader: FC<Props> = props => {
  const [searchInputText, setSearchInputText] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Feather
          name="arrow-left"
          color={Constants.colors.secondary}
          size={Constants.fonts.xLargeFontSize}
        />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.inputOpacityBackgroundColor} />
        <Ionicons
          style={{marginHorizontal: Constants.layout.padding}}
          name="md-search-outline"
          color={Constants.colors.secondary}
          size={Constants.fonts.xLargeFontSize}
        />
        <TextInput
          style={styles.inputText}
          placeholder={'Search'}
          placeholderTextColor={Constants.colors.white}
          onChangeText={text => setSearchInputText(text)}
          value={searchInputText}
        />
      </View>
      <MyAppText color={Constants.colors.secondary}>Cancel</MyAppText>
    </View>
  );
};

export default SearchInputHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    height: DeviceUiInfo.verticalScale(40),
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: Constants.layout.padding,
    borderRadius: DeviceUiInfo.scale(5),
    alignItems: 'center',
  },
  inputText: {
    paddingRight: Constants.layout.padding,
    flex: 1,
    width: '100%',
    color: Constants.colors.white,
    fontFamily: Constants.fonts.primaryFontFamily,
  },
  inputOpacityBackgroundColor: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: Constants.colors.white,
    borderRadius: DeviceUiInfo.scale(4),
    opacity: 0.1,
  },
});
