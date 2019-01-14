import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class City extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.city}>
				<Text style={styles.cityText}>&#xf031; New York</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	city: {
		backgroundColor: '#FFF',
		padding: 10,
		borderRadius: 20,
		width: 90,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 }
	},
	cityText: {
		fontFamily: 'tinderclone',
		color: '#363636',
		fontSize: 13
	}
});

export default City;
