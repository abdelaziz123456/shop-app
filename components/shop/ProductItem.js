import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import colors from "../../constants/colors";
export default function ProductItem(props) {
  const { imageUrl, title, price } = props.item;
  let MainComp=Platform.OS=='android' ? TouchableNativeFeedback :TouchableOpacity
  return (
    <View style={styles.product}>

    
    <MainComp onPress={props.onViewDetail} useForeground>
      <View >
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>

        <View style={styles.actions}>
          <Button
            color={colors.primary}
            title="View Details"
            onPress={props.onViewDetail}
          />
          <Button
            color={colors.primary}
            title="To Cart"
            onPress={props.onAddToCart}
          />
        </View>
      </View>
    </MainComp>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
   

    backgroundColor: "white",
    margin: 20,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily:'open-sans-bold'
  },
  title: {
    fontSize: 16,
    marginVertical: 4,
fontFamily:'open-sans'
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
  },
});
