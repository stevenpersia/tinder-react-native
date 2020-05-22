import React from 'react';
import { View, ImageBackground, AsyncStorage } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Fetcher from "../assets/data/Fetcher";
// import ProfilePopup from "../components/ProfilePopup";

const MAX_LENGTH = 150;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], fetcher: new Fetcher() };
  }

  async componentWillMount() {
    try {
      let storedEmail = await AsyncStorage.getItem('storedEmail');
      if(storedEmail === null) {
        this.props.navigation.navigate('LogIn');
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    const data = await this.state.fetcher.loadData("harsh@gmail.com");
    this.setState({ cards: data });
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerHome}>
          <View style={styles.top}>
            <City />
            <Filters />
          </View>
  
          <CardStack
            loop={true}
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={swiper => (this.swiper = swiper)}
          >
            {this.state.cards.map((item, index) => (
              <Card key={index}>
                <CardItem
                  image={{ uri: item.image }}
                  name={item.name}
                  courses={item.crscodes}
                  description={item.addinfo.length > MAX_LENGTH ? (item.addinfo.substring(0,MAX_LENGTH) + "...") : item.addinfo}
                  actions
                  onPressRight={() => this.swiper.swipeRight()}
                  onPressLeft={() => this.swiper.swipeLeft()}
                />
              </Card>
            ))}
          </CardStack>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;
