import React from 'react';
import { createAppContainer } from 'react-navigation';

import Home from '../pages/home/index';
import TipoReceitas from '../pages/tipoReceitas/index';
import Receitas from '../pages/receitas/index/index';
import AddReceita from '../pages/receitas/addReceita/addReceita';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerIcon: (
                <Icon name="home" size={20} />
            ),
        },
    },
    TipoReceitas: {
        screen: TipoReceitas,
        navigationOptions: {
            drawerIcon: (
                <Icon name="library-books" size={20} />
            ),
        },
    },
}, {

    intialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
            alignSelf: 'center',
            textAlign: 'center'
        },
    },
});

const AppStack = createStackNavigator(
    {
        RootStack: {
            screen: MainNavigator,
            navigationOptions: ({ navigation }) => ({
                title: 'CookieFun',
                headerLeft: <Icon onPress={() => navigation.toggleDrawer()} color={'white'} size={30} name='list' />
            }),

        },
        Receitas: {
            screen: Receitas,
            navigationOptions: ({ navigation }) => ({
                title: 'Receitas'
            }),
        },
        AddReceita: {
            screen: AddReceita,
            navigationOptions: ({ navigation }) => ({
                title: 'Nova Receita'
            }),
        }
    }, {
    headerLayoutPreset: 'center'
});

export default createAppContainer(AppStack)