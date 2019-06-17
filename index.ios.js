 //index.ios.js  - place code in her for ios!!!
//import library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
);
//render component to device
//must register at least one component, albums section must match project name
//only root component uses App.Registry
AppRegistry.registerComponent('albums', () => App)
;
