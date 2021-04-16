import {Platform,Dimensions} from 'react-native';
import Constants from '.';
import fonts from './fonts';
const height = Dimensions.get('window').height;
const heightPercentageUnit = height * 0.01
const isSmallDevice = height <= 670
export default {
    shadowPattern: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textPattern: {
        color: '#000',
        fontFamily: Platform.OS == 'ios' ? 'SFProDisplay-Light' : 'SF-Pro-Display-Light', //primaryFontFamily
        fontSize: fonts.mediumFontSize, //mediumFontSize
    },
};
