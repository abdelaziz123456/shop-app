import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

export default function ProductsOverviewScreen(props) {
  // let products = useSelector(state => state.products);

  let products = useSelector((state) => state.products.availableProducts);
  const onViewDetailHandler=(id,title)=>{
    props.navigation.navigate({routeName:'ProuctDetails',params:{
      productId:id,
      productTitle:title
    }})
  }
  const onAddToCartHandler=()=>{
    console.log('added to cart ')
  }

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          item={itemData.item}
          onAddToCart={onAddToCartHandler}
          onViewDetail={()=>onViewDetailHandler(itemData.item.id,itemData.item.title)}
        />
      )}
    />
  );
}
