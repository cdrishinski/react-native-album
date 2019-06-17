//import libraries to make component
import React from 'react';
import { Text, View } from 'react-native';

//make component (alwasy name same as file housing it)
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};


const styles = {
    textStyle: {
        fontSize: 20
    }
};

//make compnenet availabe to other parts of the application
export default Header;

