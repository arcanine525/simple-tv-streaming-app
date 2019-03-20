import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
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

const MyDrawerNavigator = createDrawerNavigator(
  {
    DetailScreen: {
      screen: MainStack
    }
  },
  { contentComponent: HomeScreen }
);

export default createAppContainer(MyDrawerNavigator);
