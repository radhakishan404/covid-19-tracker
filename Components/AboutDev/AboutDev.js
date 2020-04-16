import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import email from 'react-native-email';

const AboutDev = () => {

    const openFacebook = () => {
        Linking.canOpenURL("b://profile/100006450001598").then(supported => {
            if (supported) {
                return Linking.openURL("fb://profile/100006450001598");
            } else {
                return Linking.openURL("https://www.facebook.com/people/Radhakishan-Jangid/100006450001598");
            }
        })
    }

    const openTwitter = () => {
        const twitterUrlScheme = "twitter://user?screen_name=jangirr48";
        Linking.canOpenURL(twitterUrlScheme)
            .then((supported) =>
                Linking.openURL(
                    supported
                        ? twitterUrlScheme
                        : "https://www.twitter.com/jangirr48"
                )
            )
            .catch((err) => console.error('An error occurred', err));
    }

    const openLinkedin = () => {
        const linkedinUrlScheme = "linkedin://user?screen_name=radhakishanjangid";
        Linking.canOpenURL(linkedinUrlScheme)
            .then((supported) =>
                Linking.openURL(
                    supported
                        ? linkedinUrlScheme
                        : "https://www.linkedin.com/in/radhakishan-jangid-93500010b"
                    // : "https://www.linkedin.com/in/ACoAABuWNTkBENk4hewj9sR0lQwd0sJhJ_-NCmI"
                )
            )
            .catch((err) => console.error('An error occurred', err));
    }

    const handleEmail = () => {
        const to = ['radhakishanjangid404@gmail.com']
        email(to, {

            subject: "Contacting from Coronavirus App",
            body: "Type Your Message: "
        }).catch(console.error)
    }

    const openGithub = () => {
        // Linking.openURL('fb://page/110899427139639');
        Linking.openURL('https://github.com/radhakishan404');
    }

    const openPortfolio = () => {
        Linking.openURL('https://radhakishan.vpran.in');
    }

    const openInstagram = () => {
        const instagramUrlScheme = "instagram://user?username=iam__rk_";
        // Linking.openURL('instagram://user?username=iam__rk_');
        Linking.canOpenURL(instagramUrlScheme)
            .then((supported) =>
                Linking.openURL(
                    supported
                        ? instagramUrlScheme
                        : "https://www.instagram.com/iam__rk_"
                    // : "https://www.linkedin.com/in/ACoAABuWNTkBENk4hewj9sR0lQwd0sJhJ_-NCmI"
                )
            )
            .catch((err) => console.error('An error occurred', err));
    }

    const openStack = () => {
        Linking.openURL('https://stackoverflow.com/users/11925346/radhakishan-jangid');
    }

    const openTelegram = () => {
        Linking.openURL('https://telegram.me/radhakishanjangid404');
    }

    return (
        <ScrollView style={{ marginBottom: 60 }}>
            <View style={styles.container}>
                <View style={styles.section}>
                    <View style={{ justifyContent: "center" }}>
                        <Image source={{ uri: 'https://radhakishan.vpran.in/covid_img/dev.jpg' }} style={styles.userIcon} />
                        <Text style={styles.userText}>Radhakishan Jangid</Text>
                        <Text style={styles.locationText}>
                            <Icon name="location-pin" size={25} />
                        India
                    </Text>
                    </View>
                </View>
                <View style={styles.devSection}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10, paddingBottom: 10 }}>Who's this guy?</Text>
                    <Text style={{ fontSize: 15, color: "#666666" }}>
                        Hey, I am Radhakishan Jangid. 21 years old PHP Web developer based in Mumbai, India. My passion is web development. Over the past 1.5 year, I have gained a lot of experience with designing and developing numerious websites in Core PHP and CodeIgniter Framework. Currently I am learning React Native App Develoment and this is my very first app in Rect-native.
                    </Text>
                    <Text style={{ fontSize: 15, color: "#666666" }}>
                        Currently, I work as Web Developer at Innovins Softtech Solutions Pvt. Ltd. Best Website Designers & Developers In Mumbai.
                    </Text>
                    <Text style={{ fontSize: 15, color: "#666666" }}>
                        When not writing code, I really enjoy learning new stuff, playing games and workout at home :).
                    </Text>

                    <View style={styles.contactSection}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", paddingTop: 10, paddingBottom: 10 }}>Let's get in touch</Text>
                        <Text style={{ fontSize: 15, color: "#666666" }}>Do you have an interesting project I can help with? Feel free to reach out to me by using one of the following:</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginLeft: 30, marginRight: 30, marginTop: 18 }}>
                        <TouchableOpacity
                            onPress={openInstagram}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <MaterialCommunityIcons name="instagram" color="#3f729b" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openTelegram}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <MaterialCommunityIcons name="telegram" color="#3f729b" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginLeft: 30, marginRight: 30, marginTop: 0 }}>
                        <TouchableOpacity
                            onPress={openFacebook}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <Icon name="facebook" color="#476bb8" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openTwitter}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <Icon name="twitter" color="#00acee" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openPortfolio}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <Image source={{ uri: "https://radhakishan.vpran.in/img/logo-icon.jpg" }} style={{ alignSelf: "center", width: 50, height: 50, borderRadius: 50 }} />
                                {/* <MaterialCommunityIcons name="github-circle" color="#211F1F" size={70} style={{ alignSelf: "center", }} /> */}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openLinkedin}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <Icon name="linkedin" color="#2867B2" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleEmail}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <MaterialCommunityIcons name="gmail" color="#D44638" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={openGithub}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <MaterialCommunityIcons name="github-circle" color="#211F1F" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity> */}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginLeft: 30, marginRight: 30, marginTop: 0 }}>
                        <TouchableOpacity
                            onPress={openGithub}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <MaterialCommunityIcons name="github-circle" color="#211F1F" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={openStack}
                            style={{ width: "25%", justifyContent: "center" }}
                        >
                            <View style={{ width: "100%", padding: 10 }}>
                                <MaterialCommunityIcons name="stack-overflow" color="#F38024" size={30} style={{ alignSelf: "center", }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    locationText: {
        color: "#000",
        fontSize: 15,
        alignSelf: "center"
    },
    section: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#fff",
        height: 350,
    },
    devSection: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    contactSection: {
    },
    userIcon: {
        width: 200,
        height: 200,
        borderRadius: 500,
        borderColor: "#66ff66",
        borderWidth: 1,
    },
    userText: {
        color: "#000",
        marginTop: 10,
        fontSize: 25,
        alignSelf: "center"
    },
    Sharebutton: {
        width: "90%",
        height: "9%",
        backgroundColor: "#38b750",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
        alignSelf: "center",
        flexDirection: "row",
    },
    buttonText: {
        color: "white",
        alignContent: "center",
        fontSize: 20,
        alignSelf: "center",
        fontFamily: "KulimPark-Regular",
    },
});

export default AboutDev;