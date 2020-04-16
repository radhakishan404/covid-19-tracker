import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchData } from '../api';
import Cards from '../Cards/Card';
import CountryPicker from '../CountryPicker/CountryPicker';
import AboutDev from '../AboutDev/AboutDev';
import Advice from '../Advice/Advice';
import Gallery from '../Gallery/Gallery';
import Search from '../Search/Search';
import { Header } from 'react-native-elements';

class HomeScreen extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return (
            <View>
                <Header
                    centerComponent={{ text: 'Covid-19', style: { color: '#fff', fontSize: 25, fontWeight: "bold" } }}
                    backgroundColor="#694fad"
                    containerStyle={{ paddingTop: 0, height: 60 }}
                />
                <View style={styles.country}>
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Cards data={data} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'About Developer', style: { color: '#fff', fontSize: 25, fontWeight: "bold" } }}
                    backgroundColor="#d13560"
                    containerStyle={{ paddingTop: 0, height: 60 }}
                />
                <AboutDev />
            </View>
        );
    }
}
class AdviceScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advice: [
                {
                    title: "1. Wash your hands frequently. Why?",
                    data: "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.\nWhy? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands."
                },
                {
                    title: "2. When to use a mask?",
                    data: "- If you are healthy, you only need to wear a mask if you are taking care of a person with suspected 2019-nCoV infection.\n- Wear a mask if you are coughing or sneezing.\n- Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.\n- If you wear a mask, then you must know how to use it and dispose of it properly."
                },
                {
                    title: "3. When and how to wear medical masks to protect against coronavirus?",
                    data: "- Before putting on a mask, clean hands with alcohol-based hand rub or soap and water.\n- Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.\n- Avoid touching the mask while using it; if you do, clean your hands with alcohol-based hand rub or soap and water.\n- Replace the mask with a new one as soon as it is damp and do not re-use single-use masks.\n- To remove the mask: remove it from behind (do not touch the front of mask); discard immediately in a closed bin; clean hands with alcohol-based hand rub or soap and water."
                },
                {
                    title: "4. Maintain social distancing. Why?",
                    data: "Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing. \nWhy? When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease."
                },
                {
                    title: "5. Avoid touching eyes, nose and mouth. Why?",
                    data: "Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick."
                },
                {
                    title: "6. Practice respiratory hygiene. Why?",
                    data: "Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.\nWhy? Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19."
                },
                {
                    title: "7. If you have fever, cough and difficulty breathing, seek medical care early. Why?",
                    data: "Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.\nWhy? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections."
                },
                {
                    title: "8. Stay informed and follow advice given by your healthcare provider",
                    data: "Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.\nWhy? National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves."
                },
            ]
        }
    }

    renderAdvices = () => {
        const items = [];
        for (item of this.state.advice) {
            items.push(
                <Advice
                    title={item.title}
                    data={item.data}
                />
            );
        }
        return items;
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: "COVID-19 : Advice", style: { color: '#fff', fontSize: 25, fontWeight: "bold" } }}
                    backgroundColor="#a64452"
                    containerStyle={{ paddingTop: 0, height: 60 }}
                />
                <ScrollView style={{ marginBottom: 60 }}>
                    <View style={{ paddingBottom: 0, paddingRight: 15, paddingLeft: 15, paddingTop: 15 }}>
                        <Text style={styles.heading}>Basic protective measures against the new coronavirus</Text>
                    </View>
                    {this.renderAdvices()}
                    <View style={{ paddingBottom: 0, paddingRight: 15, paddingLeft: 15, paddingTop: 15 }}>
                        <Text style={styles.heading}>Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreading</Text>
                    </View>
                    <View style={{ backgroundColor: "#ffebee", padding: 15, marginLeft: 15, marginRight: 15, marginBottom: 15, flexDirection: 'row', }}>
                        <Text style={styles.dot}>-</Text>
                        <Text style={styles.title}>Follow the guidance outlined above</Text>
                    </View>
                    <View style={{ backgroundColor: "#ffebee", padding: 15, marginLeft: 15, marginRight: 15, marginBottom: 15, flexDirection: 'row', }}>
                        <Text style={styles.dot}>-</Text>
                        <Text style={styles.title}>Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover.</Text>
                    </View>
                    <View style={{ backgroundColor: "#ffebee", padding: 15, marginLeft: 15, marginRight: 15, marginBottom: 15, flexDirection: 'row', }}>
                        <Text style={styles.dot}>-</Text>
                        <Text style={styles.title}>Why? Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.</Text>
                    </View>
                    <View style={{ backgroundColor: "#ffebee", padding: 15, marginLeft: 15, marginRight: 15, marginBottom: 15, flexDirection: 'row', }}>
                        <Text style={styles.dot}>-</Text>
                        <Text style={styles.title}>If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers.</Text>
                    </View>
                    <View style={{ backgroundColor: "#ffebee", padding: 15, marginLeft: 15, marginRight: 15, marginBottom: 15, flexDirection: 'row', }}>
                        <Text style={styles.dot}>-</Text>
                        <Text style={styles.title}>Why? Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
class GalleryScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: "COVID-19 : Gallery", style: { color: '#fff', fontSize: 25, fontWeight: "bold" } }}
                    backgroundColor="#008dc9"
                    containerStyle={{ paddingTop: 0, height: 60 }}
                />
                <Gallery />
            </View>
        )
    }
}
class SearchCountry extends React.Component {
    render() {
        return (
            <View>
                <Header
                    centerComponent={{ text: 'Search by Country', style: { color: '#fff', fontSize: 25, fontWeight: "bold" } }}
                    backgroundColor="#795548"
                    containerStyle={{ paddingTop: 0, height: 60 }}
                />
                <Search />
            </View>
        );
    }
}

const Tab = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="ios-globe" size={25} color={tintColor} />
            }
        }
    },
    Advice: {
        screen: AdviceScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="ios-alert" size={25} color={tintColor} />
            },
            activeColor: "#ffffff",
            inactiveColor: "#ebaabd",
            barStyle: { backgroundColor: "#a64452" },
        }
    },
    Search: {
        screen: SearchCountry,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Icon name="ios-search" size={25} color={tintColor} />
            },
            activeColor: "#ffffff",
            inactiveColor: "#ebaabd",
            barStyle: { backgroundColor: "#795548" },
        }
    },
    Gallery: {
        screen: GalleryScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="ios-image" size={25} color={tintColor} />
            },
            activeColor: "#ffffff",
            inactiveColorL: "#ebaabd",
            barStyle: { backgroundColor: "#008dc9" }
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="ios-person" size={25} color={tintColor} />
            },
            activeColor: "#ffffff",
            inactiveColor: "#ebaabd",
            barStyle: { backgroundColor: "#d13560" },
        }
    }
},
    {
        initialRouteName: "Home",
        activeColor: "#ffffff",
        inactiveColor: "#bda1f7",
        barStyle: { backgroundColor: "#694fad" },
    }
)

export default createAppContainer(Tab);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    country: {
        backgroundColor: "#fff",
        paddingBottom: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000",
        flex: 1
    },
    dot: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000",
        flex: 0.05
    }
});
