import { ADD_TO_CART } from "../actions/cart"
import { CartItem } from "../../models/cart-item";
const initialState={
    items:{},
    totalAmount:0
}



export default (state = initialState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            
            const addedProduct=action.product;
            const productPrice=addedProduct.price;
            const productTitle=addedProduct.title;
        if(state.items[addedProduct.id]){
           //already have the item in the cart  
           const updatedCartItemm=new CartItem(
            state.items[addedProduct.id].quantity+1,
            productPrice ,
            productTitle,
            state.items[addedProduct.id].sum+productPrice
           );
           return {
            ...state,
            items:{...state.items,[addedProduct.id]: updatedCartItemm },
            totalAmount:state.totalAmount+productPrice
           }
        }else{
            //there is no  item in the cart  
            const newCartItem=new CartItem(1,productPrice,productTitle,productPrice);
            return {
                ...state,
                items:{...state.items,[addedProduct.id]:newCartItem},
                totalAmount:state.totalAmount+productPrice
            }
            
        }
       
    }
    return state
}