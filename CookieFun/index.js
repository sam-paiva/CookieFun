/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/pages/home/index';
import {name as appName} from './app.json';
import Routes from './src/routes/routes';

export const StackRoutes = () => {
    return (
        <>
        <Routes />
        </>
    );
} 

AppRegistry.registerComponent(appName, () => Routes);
