import React from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import styles from '../assets/styles';
import { DefaultTheme, Provider as PaperProvider, TextInput, RadioButton, Dialog, Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import Swiper from 'react-native-swiper'
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

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    return regex.test(password);
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            nameMode: 'outlined',
            emailMode: 'outlined',
            passMode: 'outlined',
            uniMode: 'outlined',
            majorMode: 'outlined',
            courseMode: 'outlined',

            date: null,
            name: "",
            email: "",
            password: "",
            uni: "",
            major: "",

            isNameValid: false,
            isEmailValid: false,
            isPasswordValid: false,
            isUniValid: false,
            isMajorValid: false
        };
    }

    handleNameChange(text) {
        if(text.length >= 3 && text.length <= 30) {
            this.setState({ isNameValid: true, name: text });
            return;
        }
        this.setState({ isNameValid: false, name: text });
    }

    handleEmailChange(text) {
        if(validateEmail(text.toLowerCase())) {
            this.setState({ isEmailValid: true, email: text });
            return;
        }

        this.setState({ isEmailValid: false, email: text.toLowerCase() });
    }

    handlePasswordChange(text) {
        if(validatePassword(text)) {
            this.setState({ isPasswordValid: true, password: text });
            return;
        }
        this.setState({ password: text, isPasswordValid: false });
    }

    handleUniChange(text) {
        if(text.length >= 6) {
            this.setState({ isUniValid: true, uni: text });
            return;
        }
        this.setState({ isUniValid: false, uni: text });
    }

    handleMajorChange(text) {
        if(text.length >= 6) {
            this.setState({ isMajorValid: true, major: text });
            return;
        }
        this.setState({ isMajorValid: false, major: text });
    }

    async handleSubmit() {
        if(!this.state.isNameValid || !this.state.isEmailValid || !this.state.isPasswordValid
            || !this.state.date || !this.state.isUniValid || !this.state.isMajorValid) {
            console.log(this.state);
            console.log('invalid inputs');
            return;
        }
        const requestHandler = new Fetcher();
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            uni: this.state.uni,
            major: this.state.major,
            age: this.state.date,
            // image: req.body.image
        }

        const signUpStatus = await requestHandler.requestSignUp(data);
        if(signUpStatus === 201) {
            await AsyncStorage.setItem('storedEmail', data.email);
            this.props.navigation.navigate('AppScreen');
        }
    }

    render() {
        return (
            <View style={{backgroundColor: "#164e48", width: "100%", height: "100%", padding: '3%' }}>
                <Image style={styles.logo} source={require('../assets/images/Findr_white2x.png')}/>
                <Swiper
                    style={styles.wrapper}
                    height={240}
                    onMomentumScrollEnd={(e, state, context) =>
                        console.log('index:', state.index)
                    }
                    dot={
                        <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,.3)',
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            marginLeft: 0,
                            marginRight: 130,
                            marginTop: 3,
                            marginBottom: 10
                        }}/>
                    }
                    activeDot={
                        <View
                        style={{
                            backgroundColor: '#FFF',
                            width: 15,
                            height: 15,
                            borderRadius: 10,
                            marginLeft: 0,
                            marginRight: 130,
                            marginTop: 3,
                            marginBottom: 10
                        }}/>
                    }
                    paginationStyle={{
                        bottom: -23,
                        left: null,
                        right: 10
                    }}
                    loop={false}
                    >
                    <View style={styles.slide}>
                        <TextInput
                            mode={this.state.nameMode}
                            value={this.state.name}
                            label='Name'
                            placeholder="Enter your full name"
                            onFocus={() => this.setState({ nameMode: 'flat' })}
                            onBlur={() => { if(this.state.name.length === 0) { this.setState({ nameMode: 'outlined' }); } }}
                            onChangeText={this.handleNameChange.bind(this)}
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
                            onChangeText={this.handleEmailChange.bind(this)}
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
                            onChangeText={this.handlePasswordChange.bind(this)}
                            theme={labelStyle}
                            style={textBoxStyle}
                        />

                    </View>
                    <View style={styles.slide}>
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
                            style={{ marginLeft: '4%', marginBottom: "8%", width: "83%"}}
                            onDateChange={(date) => {this.setState({date: date})}}
                            androidMode='spinner'
                        />

                        <TextInput
                            mode={this.state.uniMode}
                            value={this.state.uni}
                            label='University'
                            placeholder="Enter your university"
                            onFocus={() => this.setState({ uniMode: 'flat' })}
                            onBlur={() => { if(this.state.uni.length === 0) { this.setState({ uniMode: 'outlined' }); } }}
                            onChangeText={this.handleUniChange.bind(this)}
                            theme={labelStyle}
                            style={textBoxStyle}
                        />

                        <TextInput
                            mode={this.state.majorMode}
                            value={this.state.major}
                            label='Major'
                            placeholder="Enter your major"
                            onFocus={() => this.setState({ majorMode: 'flat' })}
                            onBlur={() => { if(this.state.major.length === 0) { this.setState({ majorMode: 'outlined' }); } }}
                            onChangeText={this.handleMajorChange.bind(this)}
                            theme={labelStyle}
                            style={textBoxStyle}
                        />

                        {/* <Button color='white' onPress={this.handleSubmit.bind(this)}>
                            Submit
                        </Button> */}

                    </View>
                </Swiper>

            </View>
        );
    }
}

export default SignUp;
