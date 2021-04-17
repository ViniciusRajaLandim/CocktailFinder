import React, {FC, ReactText} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Constants from '../../config';

interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  p?: boolean;
  bold?: boolean;
  italic?: boolean;
  color?: string;
  white?: boolean;
  style?: object;
  children: string | Element;
  contentContainerStyle?: object;
}

const MyAppText: FC<Props> = props => {
  function determineFontSize() {
    let fontSize = Constants.fonts.mediumFontSize;
    if (props.h1) fontSize = Constants.fonts.xLargeFontSize;
    if (props.h2) fontSize = Constants.fonts.largeFontSize;
    if (props.h3) fontSize = Constants.fonts.mediumLargeFontSize;
    if (props.p) fontSize = Constants.fonts.mediumFontSize;
    if (props.h4) fontSize = Constants.fonts.mediumSmallFontSize;
    if (props.h5) fontSize = Constants.fonts.smallFontSize;
    return fontSize;
  }
  function determineFontStyle() {
    let fontStyle = Constants.fonts.primaryFontFamily;
    if (props.bold) fontStyle = Constants.fonts.primarySemiboldFontFamily;
    if (props.italic) fontStyle = Constants.fonts.primaryItalicFontFamily;
    return fontStyle;
  }
  function determineFontColor() {
    let fontColor = Constants.colors.dark;
    if (props.color) fontColor = props.color;
    if (props.white) fontColor = Constants.colors.white;
    return fontColor;
  }
  const styles = StyleSheet.create({
    mainTextStyle: {
      color: determineFontColor(),
      fontSize: determineFontSize(),
      fontFamily: determineFontStyle(),
      ...props.style,
    },
  });

  return !!props.contentContainerStyle ? (
    <View style={{...props.contentContainerStyle}}>
      <Text style={styles.mainTextStyle}>{props.children}</Text>
    </View>
  ) : (
    <Text style={styles.mainTextStyle}>{props.children}</Text>
  );
};

export default MyAppText;
