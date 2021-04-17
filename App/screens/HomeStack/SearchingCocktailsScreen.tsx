import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import Constants from '../../config';
import SearchInputHeader from '../../components/HomeStack/SearchInputHeader';
import CocktailsList from '../../components/HomeStack/cocktailsListComponent/CocktailsList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationStackProp} from 'react-navigation-stack';
interface Props {
  navigation: NavigationStackProp;
}
const SearchingCocktailsScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SearchInputHeader navigation={navigation} />
        <CocktailsList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Constants.layout.window.height,
    padding: Constants.layout.padding,
    paddingBottom: 0,
    backgroundColor: Constants.colors.primary,
  },
});

export default SearchingCocktailsScreen;
