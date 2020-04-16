import React, { useState, Component } from "react";
import { StyleSheet, Image } from "react-native";
import ImageViewer from 'react-native-image-zoom-viewer';

export default class ImageElement extends Component {

    render() {
        let image = this.props.imgsource;
        const images = [
            { url: 'https://radhakishan.vpran.in/covid_img/handshaking.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/safe-greetings.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/wearing-gloves.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-2.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-3.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-4.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-5.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-6.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-7.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-ready-social-3.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-ready-social-2.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-ready-social-1.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-smart-if-you-develop.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-smart-inform.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-safe.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-kind-to-support.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-kind-to-address-stigma.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-kind-to-address-fear.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-2.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-3.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-4.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-caregivers-a4-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-caregivers-square-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-everyone-a4-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-everyone-square-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-ill-people-a4-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-ill-people-square-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---2.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---3.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---4.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---5.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---breastfeeding---6.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/stress-1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/stress-2.png'}
        ];
        const all_images = [
            { url: 'https://radhakishan.vpran.in/covid_img/handshaking.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/safe-greetings.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/wearing-gloves.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-2.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-3.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-4.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-5.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-6.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/masks-7.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-ready-social-3.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-ready-social-2.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-ready-social-1.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-smart-if-you-develop.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-smart-inform.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-safe.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-kind-to-support.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-kind-to-address-stigma.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/be-kind-to-address-fear.jpg'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-2.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-3.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/blue-4.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-caregivers-a4-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-caregivers-square-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-everyone-a4-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-everyone-square-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-ill-people-a4-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/home-care-ill-people-square-covid.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---2.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---3.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---4.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---pregnancy---5.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/who---breastfeeding---6.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/stress-1.png'},
            { url: 'https://radhakishan.vpran.in/covid_img/stress-2.png'}
        ];
        return (
            <ImageViewer imageUrls={images} index={all_images.findIndex(x => x.url === image.uri) } />
        );
    }
}

const styles = StyleSheet.create({
    image: {
    }
});