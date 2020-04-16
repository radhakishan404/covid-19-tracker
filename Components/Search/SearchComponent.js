import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { LineChart, PieChart } from "react-native-chart-kit";

class SearchComponent extends React.Component {
    render() {

        const state = this.props.data;

        const data = [
            {
                name: "Infected",
                population: state.tableData[1],
                color: "rgba(0, 0, 255, 0.5)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Deaths",
                population: state.tableData[3],
                color: "rgba(255, 0, 0, 0.5)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
            {
                name: "Recovered",
                population: state.tableData[5],
                color: "rgba(0, 255, 0, 0.5)",
                legendFontColor: "#7F7F7F",
                legendFontSize: 15
            },
        ];

        const line = {
            labels: ['Infected', 'Recovered', 'Deaths',],
            datasets: [
                {
                    data: [state.tableData[1], state.tableData[5], state.tableData[3]],
                    strokeWidth: 2, // optional
                },
            ],
        };

        return (
            <View style={{ paddingBottom: 50 }}>
                <View style={styles.main}>
                    <View style={styles.section}>
                        <Image
                            source={{ uri: state.countryFlag }}
                            style={styles.image}
                        />
                    </View>
                    <Table borderStyle={{ borderWidth: 1, borderColor: "black" }}>
                        <TableWrapper style={styles.wrapper} >
                            <Col data={state.tableTitle} style={styles.title} heightArr={state.heightArr} textStyle={styles.text} />
                            <Col data={state.tableData} style={styles.title2} heightArr={state.heightArr} textStyle={styles.text2} />
                        </TableWrapper>
                    </Table>
                </View>
                <LineChart
                    data={line}
                    width={Dimensions.get('window').width - 20} // from react-native
                    height={220}
                    yAxisLabel={''}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#795548',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                            marginLeft: 10
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 10,
                        borderRadius: 16,
                    }}
                />
                <PieChart
                    data={data}
                    width={Dimensions.get('window').width - 20}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#795548',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        }
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                    style={{
                        marginVertical: 10,
                        borderRadius: 16,
                        marginBottom: 60,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        padding: 2
    },
    section: {
        alignItems: "center",
        marginTop: 5,
        padding: 10
    },
    image: {
        width: 140,
        height: 100
    },
    wrapper: {
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        backgroundColor: '#e6f5ff',
    },
    title2: {
        flex: 1,
        backgroundColor: '#e6fffa',
    },
    row: {
        height: 28
    },
    text: {
        textAlign: 'center',
        color: "black",
        fontWeight: "bold"
    },
    text2: {
        textAlign: 'center',
        color: "black"
    }
});

export default SearchComponent;