import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import colors from "../constants/colors";
import CartScreen from "../screens/shop/CartScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetails";
import ProductsOverviewScreen from "../screens/shop/ProductsOverview";

const ShopNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProuctDetails: ProductDetailsScreen,
    Cart:CartScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS == "android" ? colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS == "android" ? "white" : colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
