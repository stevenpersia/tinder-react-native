import React from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Fetcher from "../assets/data/Fetcher";
// import ProfilePopup from "../components/ProfilePopup";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cards: [], fetcher: new Fetcher() };
  }

  async componentDidMount() {
    const data = await this.state.fetcher.loadData("gautam.gireesh@mail.utoronto.ca");
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
                  image={ { uri: item.image } }
                  name={item.name}
                  courses={item.crscodes}
                  description={item.addinfo}
                  matchesPage={false}
                  actions
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        </View>
      </ImageBackground>
    );
  }
}
// const Home = () => {
//   const fetcher = new Fetcher();

  
// };

export default Home;
