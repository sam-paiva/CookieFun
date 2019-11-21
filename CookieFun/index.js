/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Routes from './src/routes/routes';
import { Provider } from 'react-redux';
import store from './src/store/store';

export const StackRoutes = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => StackRoutes);
