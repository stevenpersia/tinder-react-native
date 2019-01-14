import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo.js';

class Home extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		data: Demo
	};

	render() {
		const fullWidth = Dimensions.get('window').width;
		const fullHeight = Dimensions.get('window').width;
		return (
			<ImageBackground
				source={require('../assets/images/bg.png')}
				style={[
					{ flex: 1, resizeMode: 'cover', width: fullWidth, height: fullHeight }
				]}
			>
				<View style={styles.container}>
					<View style={styles.top}>
						<City />
						<Filters />
					</View>
					<CardStack
						loop={true}
						verticalSwipe={false}
						renderNoMoreCards={() => {
							return null;
						}}
						ref={swiper => {
							this.swiper = swiper;
						}}
					>
						{this.state.data.map((item, index) => {
							return (
								<Card key={index}>
									<CardItem
										image={item.image}
										name={item.name}
										description={item.description}
										matches={item.match}
										actions
										onPressLeft={() => {
											this.swiper.swipeLeft();
										}}
										onPressRight={() => {
											this.swiper.swipeRight();
										}}
									/>
								</Card>
							);
						})}
					</CardStack>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: { marginHorizontal: 10 },
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

export default Home;
