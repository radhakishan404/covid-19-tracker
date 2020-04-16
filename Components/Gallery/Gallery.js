import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ImageElement from "./ImageElement";


export default class Gallery extends Component {

    state = {
        modalVisible: false,
        modalImage: { uri: 'https://radhakishan.vpran.in/covid_img/handshaking.png'},
        who_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/handshaking.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/safe-greetings.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/wearing-gloves.png'}
        ],
        masks_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-1.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-2.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-3.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-4.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-5.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-6.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/masks-7.png'},
        ],
        ready_corona_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/be-ready-social-3.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-ready-social-2.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-ready-social-1.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-smart-if-you-develop.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-smart-inform.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-safe.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-kind-to-support.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-kind-to-address-stigma.jpg'},
            { uri: 'https://radhakishan.vpran.in/covid_img/be-kind-to-address-fear.jpg'}
        ],
        sick_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/blue-1.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/blue-2.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/blue-3.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/blue-4.png'},
        ],
        home_care_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/home-care-caregivers-a4-covid.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/home-care-caregivers-square-covid.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/home-care-everyone-a4-covid.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/home-care-everyone-square-covid.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/home-care-ill-people-a4-covid.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/home-care-ill-people-square-covid.png'},
        ],
        pregnent_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---1.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---2.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---3.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---4.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---5.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/who---breastfeeding---6.png'},
        ],
        stress_images: [
            { uri: 'https://radhakishan.vpran.in/covid_img/stress-1.png'},
            { uri: 'https://radhakishan.vpran.in/covid_img/stress-2.png'},
        ]
    }

    setModalVisible(visible, imageKey, val) {
        var image = this.state.who_images;
        var ready_corona_images = this.state.ready_corona_images;
        var sick_images = this.state.sick_images;
        var home_care_images = this.state.home_care_images;
        var pregnent_images = this.state.pregnent_images;
        var stress_images = this.state.stress_images;
        var masks_images = this.state.masks_images;
        if (image.includes(val)) {
            this.setState({ modalImage: this.state.who_images[imageKey] });
        } else if (ready_corona_images.includes(val)) {
            this.setState({ modalImage: this.state.ready_corona_images[imageKey] });
        } else if (sick_images.includes(val)) {
            this.setState({ modalImage: this.state.sick_images[imageKey] });
        } else if (home_care_images.includes(val)) {
            this.setState({ modalImage: this.state.home_care_images[imageKey] });
        } else if (pregnent_images.includes(val)) {
            this.setState({ modalImage: this.state.pregnent_images[imageKey] });
        } else if (stress_images.includes(val)) {
            this.setState({ modalImage: this.state.stress_images[imageKey] });
        } else if (masks_images.includes(val)) {
            this.setState({ modalImage: this.state.masks_images[imageKey] });
        }
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage;
    }

    render() {

        let who_images = this.state.who_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }}>
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        });

        let corona_images = this.state.ready_corona_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }} >
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        });

        let protect_yourself_images = this.state.sick_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }} >
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        })

        let home_care = this.state.home_care_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }} >
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        })

        let pregnancy_breastfeeding = this.state.pregnent_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }} >
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        })

        let stress_crorona = this.state.stress_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }} >
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        })

        let use_mask = this.state.masks_images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key, val) }} >
                <View style={styles.imageWrap}>
                    <Image source={val} style={styles.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        })

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.section}>
                        <Text style={styles.heading}>Ask WHO (World Health Organization): </Text>
                    </View>
                    {who_images}
                    <View style={styles.section}>
                        <Text style={styles.heading}>How to Put On, Use, Take Off, and Dispose of a mask: </Text>
                    </View>
                    {use_mask}
                    <View style={styles.section}>
                        <Text style={styles.heading}>Be Ready for coronavirus: </Text>
                    </View>
                    {corona_images}
                    <View style={styles.section}>
                        <Text style={styles.heading}>Protect yourself and others from getting sick: </Text>
                    </View>
                    {protect_yourself_images}
                    <View style={styles.section}>
                        <Text style={styles.heading}>COVID-19 Home care: </Text>
                    </View>
                    {home_care}
                    <View style={styles.section}>
                        <Text style={styles.heading}>COVID-19: Pregnancy & breastfeeding: </Text>
                    </View>
                    {pregnancy_breastfeeding}
                    <View style={styles.section}>
                        <Text style={styles.heading}>How to cope with stress during 2019-nCoV outbreak: </Text>
                    </View>
                    {stress_crorona}
                    <Modal
                        animationType={'fade'}
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => { }}
                    >
                        <View style={[styles.modal]} >
                            <Text style={styles.text} onPress={() => { this.setModalVisible(false) }} >
                                <Icon name="ios-close-circle" size={45} color={"#fff"} />
                            </Text>
                            <View style={[styles.imageContainer]}>
                                <ImageElement imgsource={this.state.modalImage} visible={this.state.modalVisible} style={styles.fullImage} ></ImageElement>
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 70
    },
    imageWrap: {
        padding: 10,
        marginLeft: 5,
        height: (Dimensions.get('window').height / 3) - 12,
        width: (Dimensions.get('window').width / 2.04) - 4,
        backgroundColor: "#fff"
    },
    modal: {
        height: (Dimensions.get('window').height) - 12,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        justifyContent: "center",
    },
    imageContainer: {
        // height: (Dimensions.get('window').height / 2) - 12,
        height: 500
    },
    text: {
        color: '#fff',
        padding: 20,
        textAlign: "right"
    },
    heading: {
        fontSize: 20,
        padding: 5,
        fontWeight: "bold"
    },
    section: {
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 2,
        margin: 10,
        width: (Dimensions.get('window').width - 20),
    },
    image: {
        flex: 1,
        width: "100%",
        height: 200,
        resizeMode: 'stretch'
    }
})