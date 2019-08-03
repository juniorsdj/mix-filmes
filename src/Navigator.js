import React from 'react'
import { Icon } from 'react-native'
import NavigationService from './helpers/NavigationService'
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import HomeScreen from './components/Home'



const MainRoutes = {
    Home: {
        name: 'Home',
        path: '/Home',
        screen: HomeScreen,
        navigationOptions: {
            title: 'Início',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }

    },
    Home: {
        name: 'Home',
        path: '/Home',
        screen: HomeScreen,
        navigationOptions: {
            title: 'Horario de Funcionamento',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='clock-o' size={30} color={tintColor} />
        }

    },
}

const MainConfig = {
    initialRouteName: 'Home',
    tabBarOptions: {
        showLabel: false,
    }
}


const MainNavigator = createBottomTabNavigator(MainRoutes, MainConfig)



const AppContainer = createAppContainer(MainNavigator);

export default () =>
    <AppContainer  />
    // <AppContainer ref={navigatorRef => {
    //     NavigationService.setTopLevelNavigator(navigatorRef)
    // }} />
