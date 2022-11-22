import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Shopnavigator from './navigation/shopnavigator';
import productReducer from './store/reducers/productsReducer';




import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import cartReducer from './store/reducers/cartReducer';
const rootReducer=combineReducers({
  products:productReducer,
  cart:cartReducer,
})

const store=createStore(rootReducer)

const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded,setFontLoaded] =useState(false)
  if(!fontLoaded){
    return <AppLoading   startAsync={fetchFonts} onFinish={()=>{
      setFontLoaded(true)
    }} 
    onError={(err)=>console.log(err)}
    /> 
  }

  return (
    <Provider store={store}>
    <Shopnavigator />
    </Provider>
  );
}


