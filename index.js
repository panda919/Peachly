/** @format */
import React from 'react';

import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import store from './src/store/store';
import App from './App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Redux);
