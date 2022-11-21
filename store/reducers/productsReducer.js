import PRODUCTS from "../../data/dummy-data"


const initilaState={
    availableProducts:PRODUCTS,
    userProducts:PRODUCTS.filter((product)=> product.ownerId ==='u1')
}

 const productReducer = (state=initilaState,action)=>{
    return state
}

export default productReducer