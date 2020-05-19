import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styles from "../assets/styles";

const nameStyle = [
    {
      paddingBottom: 7,
      marginTop: 0,
      color: '#363636',
      fontSize: 35,
      alignSelf: 'center'
    }
  ];

class ProfilePopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
    }

    render() {

        return (
            <Modal 
            isVisible={this.state.isVisible} 
            onBackdropPress={() => this.setState({ isVisible: false })}
            style={styles.popupCard}
            >

                <Text style={nameStyle}>Lakshya Gupta</Text>

            </Modal>
        );
    }
}

export default ProfilePopup;
