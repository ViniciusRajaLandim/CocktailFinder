import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from '../../../config';
import {useSelector} from 'react-redux';
import CocktailsCardItem from './CocktailsCardItem';
import {FlatList} from 'react-native-gesture-handler';
import LoadingComponent from '../../main/LoadingComponent';
import {AplicationState} from '../../../ducks/configurationStore';
import MyAppText from '../../main/MyAppText';

interface Props {}

const CocktailsList: FC<Props> = props => {
  const {cocktails} = useSelector((state: AplicationState) => state);
  const fetchIsLoading = cocktails.status == 'pending';
  const fetchIsSuccess = cocktails.status == 'success';
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
        ListEmptyComponent={() => (
          fetchIsSuccess?<MyAppText white>No results where found, try again.</MyAppText>:null
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
