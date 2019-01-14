import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	ImageBackground,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Demo from '../assets/data/demo.js';

class Profile extends React.Component {
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
				<ScrollView style={styles.container}>
					<ImageBackground
						source={Demo[7].image}
						style={[
							{
								width: fullWidth,
								height: 450
							}
						]}
					>
						<View style={styles.top}>
							<TouchableOpacity>
								<Text style={styles.topIconLeft}>&#xf004;</Text>
							</TouchableOpacity>
							<TouchableOpacity>
								<Text style={styles.topIconRight}>&#xf142;</Text>
							</TouchableOpacity>
						</View>
					</ImageBackground>
					<ProfileItem
						matches="92"
						name={Demo[7].name}
						age={Demo[7].age}
						location={Demo[7].location}
						info1={Demo[7].info1}
						info2={Demo[7].info2}
						info3={Demo[7].info3}
						info4={Demo[7].info4}
					/>
					<View style={styles.actions}>
						<TouchableOpacity style={styles.circledButton}>
							<Text style={styles.iconButton}>&#xf141;</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.roundedButton}>
							<Text style={styles.iconButton}>&#xf4ac;</Text>
							<Text style={styles.textButton}>Start chatting</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: { marginHorizontal: 0 },
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	topIconLeft: {
		fontFamily: 'tinderclone',
		fontSize: 20,
		color: '#FFF',
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: '90deg' }]
	},
	topIconRight: {
		fontFamily: 'tinderclone',
		fontSize: 20,
		color: '#FFF',
		paddingRight: 20
	},
	actions: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconButton: { fontFamily: 'tinderclone', fontSize: 20, color: '#FFF' },
	textButton: {
		fontFamily: 'tinderclone',
		fontSize: 15,
		color: '#FFF',
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#7444C0',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10
	},
	roundedButton: {
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#5636B8',
		paddingHorizontal: 20
	}
});

export default Profile;
