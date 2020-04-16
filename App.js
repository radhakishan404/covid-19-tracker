import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppContainer from './Components/Navigation/NavigationConfig';
import SplashScreen from './Components/Screens/SplashScreen';

class App extends React.Component {

    state = {
        loading: true,
        data: {}
    }

    async componentDidMount() {
        this.showApp();
    }

    showApp = () => {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1500);
    }

    render() {
        return (
            this.state.loading ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <StatusBar backgroundColor="#023953" barStyle="light-content" />
                    <SplashScreen />
                </View> :
                <AppContainer />
        )
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
