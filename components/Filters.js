import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class Filters extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.filters}>
				<Text style={styles.filtersText}>&#xf0b0; Filters</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	filters: {
		backgroundColor: '#FFF',
		padding: 10,
		borderRadius: 20,
		width: 70,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 }
	},
	filtersText: {
		fontFamily: 'tinderclone',
		color: '#363636',
		fontSize: 13
	}
});

export default Filters;
