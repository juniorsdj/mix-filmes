import React from 'react'
import { Icon } from 'react-native-elements'
import NavigationService from './helpers/NavigationService'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from './components/Home'
import SearchScreen from './components/Busca'
import DetalhesScreen from './components/Detalhes'


const TabConfig = {
    initialRouteName: 'Home',
    defaultNavigationOptions: () => ({
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#444',
            style: {
                backgroundColor: '#111',
            }
        },


    })
}


const TabRoutes = {
    Home: {
        screen: HomeScreen,
        name: 'Home',
        path: '/Home',
        navigationOptions: {
            title: 'Início',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Search: {
        screen: SearchScreen,
        name: 'Search',
        path: '/Search',
        navigationOptions: {
            title: 'Procurar',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='search' size={30} color={tintColor} />
        }
    }
}

const TabNavigator = createBottomTabNavigator(TabRoutes, TabConfig);

const MainRoutes = {
    TabNav: {
        screen: TabNavigator,
        name: 'TabNav',
        path: '/tabNav',
        navigationOptions: {
            header: null
        }
    },
    Detalhes: {
        screen: DetalhesScreen,
        name: 'Detalhes',
        path: '/detalhes',
        navigationOptions: {
            title: 'Detalhes',
            headerBackTitle: 'Voltar',
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
                borderBottomWidth: 0,
            },
        }
    },
}
const MainConfig = {
    initialRouteName: 'TabNav',
    defaultNavigationOptions: () => ({
        headerBackTitle: 'Voltar',
    })

}




const MainNavigator = createStackNavigator(MainRoutes, MainConfig)
const AppContainer = createAppContainer(MainNavigator);

export default class Navigator extends React.Component {
    render() {
        return <AppContainer ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
        }} />
    }
}