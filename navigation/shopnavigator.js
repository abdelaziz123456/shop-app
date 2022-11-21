import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import colors from '../constants/colors'
import ProductsOverviewScreen from '../screens/shop/ProductsOverview'


const ShopNavigator=createStackNavigator({
    ProductsOverview:ProductsOverviewScreen,

},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS=='android' ? colors.primary :''
        },
        headerTintColor:Platform.OS=='android' ?  'white' : colors.primary
    }
})


export default createAppContainer(ShopNavigator)