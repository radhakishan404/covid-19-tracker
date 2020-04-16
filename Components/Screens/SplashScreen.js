import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainScreen}>
                <Text style={styles.textScreen}>
                    Tracking Covid-19...
                </Text>
                <Image source={require('../../assets/image.png')} style={styles.imageScreen} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textScreen: {
        fontSize: 20,
    },
    imageScreen: {
    
    }
});

export default SplashScreen;