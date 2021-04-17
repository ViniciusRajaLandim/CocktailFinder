import { createStackNavigator ,TransitionPresets} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import SearchingCocktailsScreen from './SearchingCocktailsScreen';

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,

    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  SearchingCocktailsScreen: {
    screen: SearchingCocktailsScreen,

    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
},
{
    defaultNavigationOptions: {
      ...TransitionPresets.ModalSlideFromBottomIOS
    }
  }
);
export default HomeStack;
