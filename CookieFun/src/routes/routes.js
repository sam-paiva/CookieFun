import React from 'react';
import { createAppContainer } from 'react-navigation';

import Home from '../pages/home/index';
import Receitas from '../pages/receitas/index';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            drawerIcon: (
              <Icon name="home" size={20}/>
            ),
          },
    },
    Receitas: {
        screen: Receitas,
        navigationOptions: {
            drawerIcon: (
              <Icon name="library-books" size={20}/>
            ),
          },
    }
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
                headerLeft: <Icon onPress={() => navigation.toggleDrawer()} color={'white'} size={30} name='list' />,
            }),
            
        }
    }, {
        headerLayoutPreset: 'center'
    });

export default createAppContainer(AppStack)