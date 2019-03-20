import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "../srceen/HomeScreen/HomeScreen";
import DetailScreen from "../srceen/DetailSreen/DetailSreen";
const MainStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    DetailScreen: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none"
  }
);

export default createAppContainer(MainStack);
