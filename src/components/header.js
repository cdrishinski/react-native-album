//import libraries to make component
import React from 'react';
import { Text, View } from 'react-native';

//make component (alwasy name same as file housing it)
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            {/* takes prop headerText from props, being passed here from index.ios.js */}
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//make compnenet availabe to other parts of the application
export default Header;

