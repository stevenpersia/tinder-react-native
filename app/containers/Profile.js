import React from 'react';
// import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  AppRegistry,
  Dimensions,
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Fetcher from '../assets/data/Fetcher';

const PRIMARY_COLOR = '#7444C0';
const SECONDARY_COLOR = '#5636B8';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

const ONLINE_STATUS = '#46A575';
const OFFLINE_STATUS = '#D04949';

const STAR_ACTIONS = '#FFA200';
const LIKE_ACTIONS = '#2c9c91';
const DISLIKE_ACTIONS = '#363636';
const FLASH_ACTIONS = '#5028D7';

const ICON_FONT = 'tinderclone';

const DIMENSION_WIDTH = Dimensions.get('window').width;
const DIMENSION_HEIGHT = Dimensions.get('window').height;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetcher: new Fetcher(), profile: null };
  }

  async componentDidMount() {
    let user = await this.state.fetcher.loadSelfProfile('harsh@gmail.com');
    this.setState({ profile: user });
  }

  render() {
    const image = this.state.profile ? { uri: this.state.profile.image } : null;
    const name = this.state.profile ? this.state.profile.name : '';
    const age = this.state.profile ? this.state.profile.age : -1;
    const location = this.state.profile ? this.state.profile.uni : '';
    const gender = this.state.profile ? this.state.profile.gender : '';
    const major = this.state.profile ? this.state.profile.major : '';
    const email = this.state.profile ? this.state.profile.email : '';

    return (
      <ImageBackground
        style={styles.headerBackground}
        source={require('../assets/images/t1.jpg')}
      >
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={image} />
          </View>
        </View>

        <View>
          <ProfileItem
            name={name}
            age={age}
            location={location}
            info1={gender == 'M' ? 'Male' : 'Female'}
            info2={major}
            info3={email}
          />
        </View>

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              <Icon name='optionsH' />
            </Text>
            <Text style={styles.textButton}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profilepicWrap: {
    width: 240,
    height: 240,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
  },
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: DIMENSION_WIDTH,
    height: 450,
  },
  topIconLeft: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingLeft: 20,
    marginTop: -20,
    transform: [{ rotate: '90deg' }],
  },
  topIconRight: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: WHITE,
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: { fontFamily: ICON_FONT, fontSize: 20, color: WHITE },
  textButton: {
    fontFamily: ICON_FONT,
    fontSize: 15,
    color: WHITE,
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1a5d57',
    paddingHorizontal: 20,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 16,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic',
  },
});

export default Profile;
