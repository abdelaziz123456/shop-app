import React from "react";
import { FlatList, Platform, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/HeaderButton";
export default function ProductsOverviewScreen(props) {
  // let products = useSelector(state => state.products);

  let products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const onViewDetailHandler = (id, title) => {
    props.navigation.navigate({
      routeName: "ProuctDetails",
      params: {
        productId: id,
        productTitle: title,
      },
    });
  };
  const onAddToCartHandler = () => {};

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          item={itemData.item}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
          onViewDetail={() =>
            onViewDetailHandler(itemData.item.id, itemData.item.title)
          }
        />
      )}
    />
  );
}

ProductsOverviewScreen.navigationOptions =navData=> {
  return {

 
  headerTitle: "All Products",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="cart"
        iconName={Platform.OS == "android" ? "md-cart" : "ios-cart"}
        onPress={() => {
          navData.navigation.navigate('Cart')
        }}
      />
    </HeaderButtons>
  ),
}
};
