import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	Dimensions,
	FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo.js';

class Matches extends React.Component {
	static navigationOptions = {
		header: null
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
					<ScrollView>
						<View style={styles.top}>
							<Text style={styles.title}>Matches</Text>
							<TouchableOpacity>
								<Text style={styles.icon}>&#xf142;</Text>
							</TouchableOpacity>
						</View>
						<FlatList
							numColumns={2}
							data={Demo}
							renderItem={({ item }) => (
								<TouchableOpacity>
									<CardItem
										image={item.image}
										name={item.name}
										status={item.status}
										variant
									/>
								</TouchableOpacity>
							)}
							keyExtractor={(item, index) => index.toString()}
						/>
					</ScrollView>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		flex: 1,
		paddingHorizontal: 10
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	title: { paddingBottom: 10, fontSize: 22, color: '#363636' },
	icon: {
		fontFamily: 'tinderclone',
		fontSize: 20,
		color: '#363636',
		paddingRight: 10
	}
});

export default Matches;
