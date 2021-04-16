import colors from './colors';
import layout from './layout';
import fonts from './fonts';
import styles from './styles';
import {Platform} from 'react-native';
const platform = Platform.OS;

const Constants = {
    colors,
    fonts,
    layout,
    platform,
    styles,
};
export default Constants;
