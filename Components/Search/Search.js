import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchCountryName, fetchDailyData, fetchData } from '../api';
import SearchComponent from './SearchComponent';
import Loader from '../Loader/Loader';

class Search extends React.Component {

    state = {
        tableData: [],
        tableTitle: ['Country Name', "Cases", "Today Cases", "Deaths", "Today Deaths", "Recovered", "Critical", "Last Updated"],
        countryFlag: '',
        countryName: "",
        loading: true,
        searchLoading: false,
        message: "Enter country name and see magic...",
        heightArr: [40, 40, 40, 40, 40, 40, 40, 40],
    }

    searchCountry = async () => {
        this.setState({ searchLoading: true });
        let country_name = this.state.countryName;
        const fetchedData = await fetchCountryName(country_name);

        if (fetchedData === undefined) {
            this.displayError();
        } else {
            const tableData = [];
            const keys = ["country", "cases", "todayCases", "deaths", "todayDeaths", "recovered", "critical", "updated"];
            for (let i = 0; i < 8; i++) {
                const key = keys[i];
                const item = '';
                if (key === 'updated') {
                    item = new Date(fetchedData[key]).toDateString() + " " + new Date(fetchedData[key]).toLocaleTimeString('en-US');
                } else {
                    item = fetchedData[key];
                }
                tableData.push(item);
            }
            this.setData(tableData, fetchedData.countryInfo);
        }
        this.setState({ searchLoading: false });
    }

    displayError = () => {
        this.setState({
            message: "Sorry! No Country Found!",
            loading: true,
            countryName: "",
        });
    }

    setData = (data, flag) => {
        Keyboard.dismiss();
        this.setState({
            tableData: data,
            loading: false,
            countryFlag: flag.flag,
        })
    }

    render() {
        return (
            <View style={styles.main}>
                <Loader loading={this.state.searchLoading} />
                <ScrollView style={{ marginBottom: 25, padding: 10 }}>
                    <View style={styles.section}>
                        <View style={styles.modalView}>
                            <TextInput
                                value={this.state.countryName}
                                onChangeText={(countryName) => this.setState({ countryName })}
                                placeholder="Enter Country Name "
                                style={styles.formInput}
                            />
                            <View style={styles.buttons}>
                                <Button
                                    icon={
                                        <Icon
                                            name="search"
                                            size={15}
                                            color="white"
                                        />
                                    }
                                    title=" Search"
                                    buttonStyle={{ backgroundColor: "#795548", padding: 12, borderRadius: 10, height: 50, }}
                                    onPress={this.searchCountry}
                                />
                            </View>
                        </View>
                    </View>
                    {
                        this.state.loading ?
                            <View style={{ flex: 1, alignItems: "center" }}>
                                <Text style={{ marginLeft: 10, marginTop: 20, fontSize: 20 }}>
                                    {
                                        this.state.message
                                    }
                                </Text>
                            </View>
                            :
                            <SearchComponent data={this.state} />
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#f2f2f2",
    },
    section: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 40
    },
    formInput: {
        borderColor: "black",
        borderWidth: 1,
        padding: 4,
        width: '80%',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        fontSize: 20,
    },
    buttons: {
        margin: 10,
        // paddingTop: 5,
        // paddingBottom: 5,
        // backgroundColor: "#795548"
    }
});

export default Search;
