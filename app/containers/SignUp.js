import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../assets/styles';
import { DefaultTheme, Provider as PaperProvider, TextInput, RadioButton, Dialog, Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';

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
            checked: 'first'
        };
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
                    label='Name'
                    placeholder="Enter your full name"
                    onFocus={() => this.setState({ nameMode: 'flat' })}
                    theme={labelStyle}
                    style={textBoxStyle}
                    />

                    <TextInput
                    mode={this.state.emailMode}
                    label='Email'
                    placeholder="email@example.com"
                    onFocus={() => this.setState({ emailMode: 'flat' })}
                    theme={labelStyle}
                    style={textBoxStyle}
                    />

                    <TextInput
                    secureTextEntry={true}
                    mode={this.state.passMode}
                    label='Password'
                    placeholder="Enter your new password"
                    onFocus={() => this.setState({ passMode: 'flat' })}
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
        );
    }
}

export default SignUp;
