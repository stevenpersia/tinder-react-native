import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Fetcher from '../assets/data/Fetcher';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fetcher: new Fetcher(), profile: null };
  }

  async componentDidMount() {
    let user = await this.state.fetcher.fetchUser(await AsyncStorage.getItem('storedEmail'));
    this.setState({ profile: user[0] });
  }

  render() {
    const image = this.state.profile ? { uri : this.state.profile.image } : null;
    const name = this.state.profile ? this.state.profile.name : "";
    const age = this.state.profile ? this.state.profile.age : -1;
    const location = this.state.profile ? this.state.profile.uni : "";
    const gender = this.state.profile ? this.state.profile.gender : "";
    const major = this.state.profile ? this.state.profile.major : "";
    const email = this.state.profile ? this.state.profile.email : "";

    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <ScrollView style={styles.containerProfile}>
          <ImageBackground source={image} style={styles.photo}>
            <View style={styles.top}>
              <TouchableOpacity>
                <Text style={styles.topIconLeft}>
                  <Icon name="chevronLeft" />
                </Text>
              </TouchableOpacity>
  
              <TouchableOpacity>
                <Text style={styles.topIconRight}>
                  <Icon name="optionsV" />
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
  
          <ProfileItem
            name={name}
            age={age}
            location={location}
            info1={gender == 'M' ? 'Male' : 'Female'}
            info2={major}
            info3={email}
            // info4={info4}
          />
  
          <View style={styles.actionsProfile}>
            <TouchableOpacity style={styles.circledButton}>
              <Text style={styles.iconButton}>
                <Icon name="optionsH" />
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.roundedButton} onPress={()=>AsyncStorage.removeItem("storedEmail")}>
              <Text style={styles.iconButton}>
                <Icon name="chat" />
              </Text>
              <Text style={styles.textButton}>Start chatting</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}


export default Profile;
