 //index.ios.js  - place code in her for ios!!!
//import library to help create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create component
const App = () => (
    <Header />
);

//render component to device
//must register at least one component, albums section must match project name
//only root component uses App.Registry
AppRegistry.registerComponent('albums', () => App)
;
