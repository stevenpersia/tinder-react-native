import React from 'react';
import { View, Text, Image } from 'react-native';
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
            bioMode: 'outlined',
            date: null,
            name: "",
            email: "",
            password: "",
            uni: "",
            major: "",
            course: "",
            bio: "",
        };
    }

    async handleSubmit() {
        // TODO: validate input
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
        // check if it works
        console.log('Sign up status: ' + signUpStatus);
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
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>
                    }
                    activeDot={
                        <View
                        style={{
                            backgroundColor: '#000',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}/>
                    }
                    paginationStyle={{
                        bottom: -23,
                        left: null,
                        right: 10
                    }}
                    loop
                    >
                    <View style={styles.slide}>
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
                    </View>
                    <View style={styles.slide}>
                        <TextInput
                            mode={this.state.uniMode}
                            value={this.state.uni}
                            label='University'
                            placeholder="Enter your university"
                            onFocus={() => this.setState({ uniMode: 'flat' })}
                            onBlur={() => { if(this.state.uni.length === 0) { this.setState({ uniMode: 'outlined' }); } }}
                            onChangeText={(text) => this.setState({ uni: text })}
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
                            onChangeText={(text) => this.setState({ major: text })}
                            theme={labelStyle}
                            style={textBoxStyle}
                        />

                        <TextInput
                            mode={this.state.courseMode}
                            value={this.state.course}
                            label='Courses'
                            placeholder="Enter your courses"
                            onFocus={() => this.setState({ courseMode: 'flat' })}
                            onBlur={() => { if(this.state.course.length === 0) { this.setState({ courseMode: 'outlined' }); } }}
                            onChangeText={(text) => this.setState({ course: text })}
                            theme={labelStyle}
                            style={textBoxStyle}
                        />

                        <TextInput
                            mode={this.state.bioMode}
                            value={this.state.bio}
                            label='Bio'
                            placeholder="Enter your bio"
                            onFocus={() => this.setState({ bioMode: 'flat' })}
                            onBlur={() => { if(this.state.bio.length === 0) { this.setState({ bioMode: 'outlined' }); } }}
                            onChangeText={(text) => this.setState({ bio: text })}
                            theme={labelStyle}
                            style={textBoxStyle}
                        />
                    </View>
                </Swiper>

                    {/* <TextInput
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
                    /> */}

                    {/* <Button mode='outlined' color='white' onPress={this.handleSubmit.bind(this)}>
                        Submit
                    </Button> */}
            </View>
        );
    }
}

export default SignUp;
