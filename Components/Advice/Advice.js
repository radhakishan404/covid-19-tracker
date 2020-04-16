import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Advice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
            uniqueKey: 1
        }
    }

    toggleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <View style={styles.accordian}>
                <TouchableOpacity style={styles.row} activeOpacity={0.5} onPress={() => this.toggleExpand()}>
                    <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color="#a64452" />
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        <Text style={{ fontSize: 18 }}>{this.props.data}</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: "#ffebee",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000",
        flex: 1
    },
    parentHr: {
        height: 1,
        color: "#f48fb1",
    },
    child: {
        backgroundColor: "#fff",
        padding: 16,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    accordian: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
    },
});