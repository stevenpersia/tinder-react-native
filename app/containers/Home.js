import React from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import Fetcher from "../assets/data/Fetcher";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cards: [], fetcher: new Fetcher() };
  }

  componentDidMount() {
      this.state.fetcher.fetchCards().then((_cards) => {
      ids = [];

      _cards.forEach((_card) => {
        ids.push(_card["user_id"]);
      });


      this.state.fetcher.fetchUsersById(ids).then((users) => {
        console.log(users);
        users = this.mapUsersToHashTable(users);

        _cards.forEach((_card) => {
          _card.name = users[_card.user_id].name;
        });

        this.setState({ cards: _cards });
        
      }).catch((reason) => {
  
        console.log("users fetch failed");
        console.log(reason);
      });

    }).catch((reason) => {

      console.log("fetch failed");
      console.log(reason);
    });
  }

  mapUsersToHashTable(users) {
    var dict = {};

    users.forEach((user) => {
      dict[user._id] = user;
    });

    return dict;
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
                  image={null}
                  name={item.name}
                  description={item.addinfo}
                  matches={'100'}
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
