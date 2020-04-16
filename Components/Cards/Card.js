import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import AnimateNumber from 'react-native-countup';
import Loader from '../Loader/Loader';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return <Loader loading={true} />;
    }

    return (
        <View style={styles.container}>
            {/* <Loader loading={this.state.searchLoading} /> */}
            <Card title='INFECTED' containerStyle={[styles.card, styles.confirmed]}>
                <Text style={styles.counter}>
                    <AnimateNumber value={confirmed.value} countBy={10000} timing={100} formatter={(val) => {
                        return '' + val.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }} />
                </Text>
                <Text style={styles.date}>
                    {new Date(lastUpdate).toDateString()}
                    {' '}
                    {new Date(lastUpdate).toLocaleTimeString('en-US')}
                </Text>
                <Text style={styles.cardText}>
                    Number of active cases of COVID-19
                </Text>
            </Card>
            <Card title='RECOVERED' containerStyle={[styles.card, styles.recovered]}>
                <Text style={styles.counter}>
                    <AnimateNumber value={recovered.value} countBy={1000} timing={100} formatter={(val) => {
                        return '' + val.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }} />
                </Text>
                <Text style={styles.date}>
                    {new Date(lastUpdate).toDateString()}
                    {' '}
                    {new Date(lastUpdate).toLocaleTimeString('en-US')}
                </Text>
                <Text style={styles.cardText}>
                    Number of recovered cases of COVID-19
                </Text>
            </Card>
            <Card title='DEATHS' containerStyle={[styles.card, styles.deaths]}>
                <Text style={styles.counter}>
                    <AnimateNumber value={deaths.value} countBy={1000} timing={100} formatter={(val) => {
                        return '' + val.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }} />
                </Text>
                <Text style={styles.date}>
                    {new Date(lastUpdate).toDateString()}
                    {' '}
                    {new Date(lastUpdate).toLocaleTimeString('en-US')}
                </Text>
                <Text style={styles.cardText}>
                    Number of deaths caused by COVID-19
                </Text>
            </Card>
        </View >
    );
}

export default Cards;

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "flex-start"
    },
    card: {
        padding: 25,
        borderRadius: 10,
        borderBottomWidth: 15,
        borderTopWidth: 15,
        alignSelf: "stretch",
    },
    confirmed: {
        borderBottomColor: "rgba(0, 0, 255, 0.5)",
        borderTopColor: "rgba(0, 0, 255, 0.5)",
    },
    recovered: {
        borderBottomColor: "rgba(0, 255, 0, 0.5)",
        borderTopColor: "rgba(0, 255, 0, 0.5)",
        marginTop: 30
    },
    deaths: {
        borderBottomColor: "rgba(255, 0, 0, 0.5)",
        borderTopColor: "rgba(255, 0, 0, 0.5)",
        marginTop: 30,
        marginBottom: 170
    },
    counter: {
        fontSize: 30,
        textAlign: "left",
        paddingRight: 20,
    },
    date: {
        fontSize: 15,
        color: "rgba(0, 0, 0, 0.54)",
        textAlign: "left",
        paddingTop: 10,
        paddingBottom: 10,
    },
    cardText: {
        fontSize: 20,
        letterSpacing: 1,
        fontWeight: "400",
    }
});