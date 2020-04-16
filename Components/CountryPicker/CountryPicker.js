import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { fetchCountries } from '../api';
import Icon from 'react-native-vector-icons/Ionicons';

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchtedCountries, setFetchtedCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchtedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchtedCountries]);

    const countryHandler = async (countryVal) => {
        setSelectedCountry(countryVal);
        handleCountryChange(countryVal);
    }

    return (
        <View style={styles.container}>
            <Icon name="ios-arrow-down" size={25} style={styles.downIcon} />
            <Picker style={styles.dropdown} selectedValue={selectedCountry} onValueChange={(itemValue) => countryHandler(itemValue)}>
                <Picker.Item label="Global" value="" />
                {fetchtedCountries.map((country, i) => <Picker.Item key={i} label={country} value={country} />)}
            </Picker>
        </View>
    );
}

export default CountryPicker;

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        alignItems: "flex-start",
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        alignSelf: "stretch",
        borderColor: "#eee",
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15
    },
    dropdown: {
        width: 500,
    },
    downIcon: {
        fontSize: 20,
        position: "absolute",
        alignSelf: "flex-end",
        paddingRight: 20,
        paddingTop: 15
    }
});