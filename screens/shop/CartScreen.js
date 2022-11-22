import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import colors from "../../constants/colors";

export default function CartScreen(props) {
  const totalCartAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems=useSelector(state=>{
    const transformedCartItems=[];
    for(const key in state.cart.items){
        transformedCartItems.push({
            productId:key,
            productTitle:state.cart.items[key].productTitle,
            productPrice:state.cart.items[key].productPrice,
            quantity:state.cart.items[key].quantity,
            sum:state.cart.items[key].sum,
        })
    }

    return transformedCartItems
  })
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total :<Text style={styles.amount}>${totalCartAmount.toFixed(2)}</Text>
        </Text>
        <Button title="Order Now"  color={colors.accent} disabled={cartItems.length===0}/>
      </View>
      <FlatList data={cartItems} renderItem={(itemData)=><CartItem item={itemData.item} onRemove={()=>{
        console.log('removed')
      }}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily:'open-sans-bold',
    fontSize:18
  },
  amount: {
    color:colors.primary
  },
});
