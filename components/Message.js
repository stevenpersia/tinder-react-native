import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

class Message extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Image
						source={this.props.image}
						style={[
							{
								borderRadius: 30,
								width: 60,
								height: 60,
								marginRight: 20,
								marginVertical: 15
							}
						]}
					/>
				</View>
				<View style={styles.content}>
					<Text>{this.props.name}</Text>
					<Text style={styles.message}>{this.props.lastMessage}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		paddingHorizontal: 10,
		width: Dimensions.get('window').width - 100
	},
	message: {
		color: '#757E90',
		fontSize: 12,
		paddingTop: 5
	}
});

export default Message;
