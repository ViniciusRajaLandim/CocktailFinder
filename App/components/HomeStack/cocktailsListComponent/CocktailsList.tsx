import React, {FC, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from '../../../config';
import {useSelector} from 'react-redux';
import CocktailsCardItem from './CocktailsCardItem';
import {FlatList} from 'react-native-gesture-handler';
import LoadingComponent from '../../main/LoadingComponent';
import {AplicationState} from '../../../ducks/configurationStore';
import MyAppText from '../../main/MyAppText';
import DeviceUiInfo from '../../../config/device';

interface Props {}

const CocktailsList: FC<Props> = props => {
  const ITEM_HEIGHT = DeviceUiInfo.verticalScale(200);
  const {cocktails} = useSelector((state: AplicationState) => state);
  const fetchIsLoading = cocktails.status == 'pending';
  const fetchIsSuccess = cocktails.status == 'success';
  const getItemLayout = useCallback((data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: (ITEM_HEIGHT + Constants.layout.padding) * index,
      index,
    };
  }, []);
  const keyExtractor = useCallback(item => `${item.idDrink}`, []);
  const ListHeaderComponent = useCallback(
    () => <LoadingComponent loading={fetchIsLoading} />,
    [],
  );
  const renderItem = useCallback(
    ({item}) => <CocktailsCardItem height={ITEM_HEIGHT} cocktail={item} />,
    [],
  );
  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.itemSeparator} />,
    [],
  );
  const ListEmptyComponent = useCallback(
    () =>
      fetchIsSuccess ? (
        <MyAppText white>No results where found, try again.</MyAppText>
      ) : null,
    [fetchIsSuccess],
  );
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.lisContainer}
        data={cocktails.items}
        getItemLayout={getItemLayout}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={keyExtractor}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponentStyle={styles.listHeader}
        windowSize={10}
        renderItem={renderItem}
        ListFooterComponent={ItemSeparatorComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
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
