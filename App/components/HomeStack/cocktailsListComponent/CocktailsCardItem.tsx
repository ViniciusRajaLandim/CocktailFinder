import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from '../../../config';
import DeviceUiInfo from '../../../config/device';
import MyAppText from '../../main/MyAppText';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Icocktail} from '../../../ducks/types';

interface Props {
  cocktail: Icocktail;
  height: number;
}

const CocktailsCardItem: FC<Props> = props => {
  const {cocktail, height} = props;
  return (
    <View style={[styles.container, {height}]}>
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
      <MyAppText style={styles.footerText} white>
        {cocktail.strDrink}
      </MyAppText>
    </View>
  );
};

export default memo(CocktailsCardItem);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    borderRadius: DeviceUiInfo.scale(10),
    overflow: 'hidden',
    width: (Constants.layout.window.width - 3 * Constants.layout.padding) / 2,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  footerText: {
    paddingLeft: Constants.layout.padding / 2,
    paddingBottom: Constants.layout.padding / 2,
  },
  gradientContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
});
