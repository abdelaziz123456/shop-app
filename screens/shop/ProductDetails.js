import React from "react";
import colors from "../../constants/colors";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { useSelector } from "react-redux";

export default function ProductDetailsScreen(props) {
  const productId = props.navigation.getParam("productId");
  let products = useSelector((state) => state.products.availableProducts);
  const selectedProduct = products.find((product) => product.id == productId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <View style={styles.actions}>
      <Button
      color={colors.primary}
        title="Add To Cart"
        onPress={() => {
          console.log("added to cart ");
        }}
      />
      </View>
     
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.desc}>{selectedProduct.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  desc:{
fontSize:14,
textAlign:'center',
marginHorizontal:20
  },
  price:{
fontSize:20,
color:'#888',
textAlign:'center',
marginVertical:20
  },
  actions:{
    alignItems:'center',
    marginVertical:20
  }
});

ProductDetailsScreen.navigationOptions = (navDate) => {
  return {
    headerTitle: navDate.navigation.getParam("productTitle"),
  };
};
