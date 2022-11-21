import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Shopnavigator from './navigation/shopnavigator';
import productReducer from './store/reducers/productsReducer';





const rootReducer=combineReducers({
  products:productReducer
})

const store=createStore(rootReducer)

export default function App() {

  return (
    <Provider store={store}>
    <Shopnavigator />
    </Provider>
  );
}


