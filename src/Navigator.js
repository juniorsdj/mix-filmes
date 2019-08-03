import React from 'react'
import { View, Text } from 'react-native'
import NavigationService from './helpers/NavigationService'
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from './components/Home'



const Config = {
    initialRouteName: 'Home',
    // defaultNavigationOptions: ({ navigation }) => ({
    //     tabBarIcon: ({ focused, tintColor }) => {
    //       const { routeName } = navigation.state;
    //       let iconName;
    //       if (routeName === 'Home') {
    //         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //         // Sometimes we want to add badges to some icons. 
    //         // You can check the implementation below.
    //       } else if (routeName === 'Settings') {
    //         iconName = `ios-options`;
    //       }
  
    //       // You can return any component that you like here!
    //       return <Icon name={iconName} size={25} color={tintColor} />;
    //     },
    //   }),
    //   tabBarOptions: {
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //   },
    // tabBarOptions: {
    //     showLabel: false,
    // }
}


const Routes = {
    Home: {
        screen: HomeScreen,
        name: 'Home',
        path: '/Home',
        navigationOptions: {
            title: 'Início',
            // tabBarIcon: ({ tintColor }) =>
            //     <Icon name='home' size={30} color={tintColor} />
        }
    },
    Search: {
        screen: HomeScreen,
        name: 'Search',
        path: '/Search',
        navigationOptions: {
            title: 'Procurar',
            // tabBarIcon: ({ tintColor }) =>
            //     <Icon name='home' size={30} color={tintColor} />
        }
    }
}


const AppNavigator = createBottomTabNavigator(Routes, Config);

const AppContainer = createAppContainer(AppNavigator);

export default class Navigator extends React.Component {
    render() {
        return <AppContainer ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
        }} />
    }
}