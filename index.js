/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import console = require('console');


var x = 4;

console.log(x);

AppRegistry.registerComponent(appName, () => App);
