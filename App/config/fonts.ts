import DeviceUiInfo from './device';

const fontStyles = {
    primaryThinFontFamily: 'MontserratAlternates-Light',
    primaryFontFamily:'MontserratAlternates-Regular',
    primaryItalicFontFamily:'MontserratAlternates-Italic',
    primarySemiboldFontFamily: 'MontserratAlternates-SemiBold',
    primaryBoldFontFamily: 'MontserratAlternates-Regular',
};
const iconFontSizes = {
    smallIconFontSize: DeviceUiInfo.platform == 'ios' ? 10 : 12,
    mediumIconFontSize: DeviceUiInfo.platform == 'ios' ? 16 : 18,
    largeIconFontSize: DeviceUiInfo.platform == 'ios' ? 25 : 27,
    xLargeIconFontSize: DeviceUiInfo.platform == 'ios' ? 32 : 34,
};
const fontSizes = {
    smallFontSize: DeviceUiInfo.moderateScale(10),
    mediumSmallFontSize: DeviceUiInfo.moderateScale(12),
    mediumFontSize: DeviceUiInfo.moderateScale(14),
    mediumLargeFontSize: DeviceUiInfo.moderateScale(16),
    largeFontSize: DeviceUiInfo.moderateScale(18),
    xLargeFontSize: DeviceUiInfo.moderateScale(24),
};

export default {
    ...fontStyles,
    ...iconFontSizes,
    ...fontSizes,
};
