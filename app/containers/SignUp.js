import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles';
import { DefaultTheme, Provider as PaperProvider, TextInput, RadioButton, Dialog, Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

import Fetcher from '../assets/data/Fetcher';

const labelStyle = { 
    colors: { 
        text: 'white', 
        placeholder: 'darkgrey',
        label: '#2c9c91'
    } 
};

// const theme = {
//     colors: {
//         ...DefaultTheme.colors,
//         accent: "#FFFFFF"
//     },
// };

const textBoxStyle = { 
    width: '75%', 
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginBottom: "8%"
};

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nameMode: 'outlined',
            emailMode: 'outlined',
            passMode: 'outlined',
            date: null,
            checked: 'first',
            name: "",
            email: "",
            password: ""
        };
    }

    async handleSubmit() {
        // TODO: validate input
        const requestHandler = new Fetcher();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // uni: req.body.uni,
            // major: req.body.major,
            age: this.state.date,
            // image: req.body.image
        }

        const signUpStatus = await requestHandler.requestSignUp(data);
        // check if it works
        console.log('Sign up status: ' + signUpStatus);
    }

    render() {
        return (
            <View style={{backgroundColor: "#164e48", width: "100%", height: "100%", padding: '3%' }}>
                <Image style={styles.logo} source={require('../assets/images/Findr_white2x.png')}/>
                {/* <CardStack
                    loop={false}
                    verticalSwipe={false}
                    renderNoMoreCards={() => null}
                    ref={swiper => (this.swiper = swiper)}
                >
                <Card>
                    <CardItem
                    image={ { uri: item.image } }
                    name={item.name}
                    courses={item.crscodes}
                    description={item.addinfo.length > MAX_LENGTH ? (item.addinfo.substring(0,MAX_LENGTH) + "...") : item.addinfo}
                    matchesPage={false}
                    actions
                    onPressRight={() => this.swiper.swipeRight()}
                    onPressLeft={() => this.swiper.swipeLeft()}
                    />
                </Card>
                <Card>
                    <CardItem
                    image={ { uri: item.image } }
                    name={item.name}
                    courses={item.crscodes}
                    description={item.addinfo.length > MAX_LENGTH ? (item.addinfo.substring(0,MAX_LENGTH) + "...") : item.addinfo}
                    matchesPage={false}
                    actions
                    onPressRight={() => this.swiper.swipeRight()}
                    onPressLeft={() => this.swiper.swipeLeft()}
                    />
                </Card>
                </CardStack> */}
                    <TextInput
                    mode={this.state.nameMode}
                    value={this.state.name}
                    label='Name'
                    placeholder="Enter your full name"
                    onFocus={() => this.setState({ nameMode: 'flat' })}
                    onBlur={() => { if(this.state.name.length === 0) { this.setState({ nameMode: 'outlined' }); } }}
                    onChangeText={(text) => this.setState({ name: text })}
                    theme={labelStyle}
                    style={textBoxStyle}
                    />

                    <TextInput
                    mode={this.state.emailMode}
                    value={this.state.email}
                    label='Email'
                    placeholder="email@example.com"
                    onFocus={() => this.setState({ emailMode: 'flat' })}
                    onBlur={() => { if(this.state.email.length === 0) { this.setState({ emailMode: 'outlined' }); } }}
                    onChangeText={(text) => this.setState({ email: text })}
                    theme={labelStyle}
                    style={textBoxStyle}
                    />

                    <TextInput
                    secureTextEntry={true}
                    mode={this.state.passMode}
                    value={this.state.password}
                    label='Password'
                    placeholder="Enter your new password"
                    onFocus={() => this.setState({ passMode: 'flat' })}
                    onBlur={() => { if(this.state.password.length === 0) { this.setState({ passMode: 'outlined' }); } }}
                    onChangeText={(text) => this.setState({ password: text })}
                    theme={labelStyle}
                    style={textBoxStyle}
                    />

                    <DatePicker
                    date={this.state.date}
                    mode="date"
                    placeholder="Date of Birth"
                    format="MM-DD-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateInput: {
                        marginLeft: 36,
                        borderRadius: 6
                        }
                    }}
                    showIcon={false}
                    style={{ marginLeft: '4%', marginBottom: "8%" }}
                    onDateChange={(date) => {this.setState({date: date})}}
                    androidMode='spinner'
                    />

                    {/* <Button mode='outlined' color='white' onPress={this.handleSubmit.bind(this)}>
                        Submit
                    </Button> */}
            </View>
        );
    }
}

export default SignUp;
