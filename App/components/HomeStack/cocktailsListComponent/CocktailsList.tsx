import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Constants from '../../../config';
import DeviceUiInfo from '../../../config/device';
import MyAppText from '../../main/MyAppText';
import {useSelector} from 'react-redux';
import CocktailsCardItem from './CocktailsCardItem';
import {FlatList} from 'react-native-gesture-handler';
import LoadingComponent from '../../main/LoadingComponent';
interface Props {
  onChangeText: (text: string) => void;
  children: null;
  navigation: object;
}

const CocktailsList: FC<Props> = props => {
  const {cocktails} = useSelector(state => state);
  const fetchIsLoading = cocktails.status == 'pending';
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.lisContainer}
        data={cocktails.items}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => item.idDrink}
        numColumns={2}
        ListHeaderComponent={() => (
          <LoadingComponent loading={fetchIsLoading} />
        )}
        ListHeaderComponentStyle={styles.listHeader}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        ListFooterComponent={() => <View style={styles.itemSeparator} />}
        renderItem={({item}) => <CocktailsCardItem cocktail={item} />}
      />
    </View>
  );
};

export default CocktailsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.layout.padding,
  },
  listHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lisContainer: {
    flex: 1,
  },
  itemSeparator: {height: Constants.layout.padding},
});
