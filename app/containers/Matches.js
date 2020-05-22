import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  AsyncStorage
} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Fetcher from "../assets/data/Fetcher";

class Matches extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fetcher: new Fetcher(), cards: [] };
  }

  async componentDidMount() {
    const data = await this.state.fetcher.loadData(await AsyncStorage.getItem('storedEmail'));
    this.setState({ cards: data });
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerMatches}>
          <ScrollView>
            <View style={styles.top}>
              <Text style={styles.title}>Matches</Text>
              <TouchableOpacity>
                <Text style={styles.icon}>
                  <Icon name="optionsV" />
                </Text>
              </TouchableOpacity>
            </View>
  
            <FlatList
              numColumns={2}
              data={this.state.cards}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <CardItem
                    image={ { uri: item.image } }
                    name={item.name}
                    status={'Online'}
                    variant
                  />
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Matches;
