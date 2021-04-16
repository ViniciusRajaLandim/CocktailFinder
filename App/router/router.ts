import { createAppContainer } from "react-navigation";
import HomeStack from "../screens/HomeStack/navigation";

const AppNavigator = createAppContainer(HomeStack);
export default AppNavigator