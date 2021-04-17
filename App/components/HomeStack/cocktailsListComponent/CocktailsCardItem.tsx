import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from '../../../config';
import DeviceUiInfo from '../../../config/device';
import MyAppText from '../../main/MyAppText';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Icocktail} from '../../../ducks/types';

interface Props {
  cocktail: Icocktail;
}

const CocktailsCardItem: FC<Props> = props => {
  const {cocktail} = props;
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.backgroundImage}
        source={{uri: cocktail.strDrinkThumb}}
      />
      <LinearGradient
        style={styles.gradientContainer}
        start={{x: 0, y: 0.5}}
        end={{x: 0, y: 0.8}}
        colors={['#ffffFF00', Constants.colors.primary]}
      />
      <View style={styles.footerContainer}>
        <MyAppText white>{cocktail.strDrink}</MyAppText>
      </View>
    </View>
  );
};

export default CocktailsCardItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: DeviceUiInfo.scale(10),
    overflow: 'hidden',
    height: DeviceUiInfo.verticalScale(200),
    width: (Constants.layout.window.width - 3 * Constants.layout.padding) / 2,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: Constants.layout.padding / 2,
    paddingBottom: Constants.layout.padding / 2,
  },
  gradientContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
