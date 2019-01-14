import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';

class CardItem extends React.Component {
	render() {
		const fullWidth = Dimensions.get('window').width;
		return (
			<View style={styles.container}>
				<Image
					source={this.props.image}
					style={[
						{
							borderRadius: 8,
							width: this.props.variant ? fullWidth / 2 - 30 : fullWidth - 80,
							height: this.props.variant ? 170 : 350,
							margin: this.props.variant ? 0 : 20
						}
					]}
				/>

				{this.props.matches ? (
					<View style={styles.matches}>
						<Text style={styles.matchesText}>
							&#xe800; {this.props.matches}% Match!
						</Text>
					</View>
				) : null}

				<Text
					style={[
						{
							paddingTop: this.props.variant ? 10 : 15,
							paddingBottom: this.props.variant ? 5 : 7,
							color: '#363636',
							fontSize: this.props.variant ? 15 : 30
						}
					]}
				>
					{this.props.name}
				</Text>

				{this.props.description ? (
					<Text style={styles.description}>{this.props.description}</Text>
				) : null}

				{this.props.status === 'Online' ? (
					<View style={styles.status}>
						<View style={styles.online} />
						<Text style={styles.statusText}>{this.props.status}</Text>
					</View>
				) : null}

				{this.props.status === 'Offline' ? (
					<View style={styles.status}>
						<View style={styles.offline} />
						<Text style={styles.statusText}>{this.props.status}</Text>
					</View>
				) : null}

				{this.props.actions ? (
					<View style={styles.actions}>
						<TouchableOpacity style={styles.miniButton}>
							<Text style={styles.star}>&#xe801;</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								this.props.onPressLeft();
							}}
						>
							<Text style={styles.like}>&#xe800;</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								this.props.onPressRight();
							}}
						>
							<Text style={styles.dislike}>&#xe802;</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.miniButton}>
							<Text style={styles.flash}>&#xe803;</Text>
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		borderRadius: 8,
		alignItems: 'center',
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: '#000',
		shadowOffset: { height: 0, width: 0 }
	},
	matches: {
		marginTop: -35,
		backgroundColor: '#7444C0',
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesText: {
		fontFamily: 'tinderclone',
		color: '#FFF'
	},
	description: {
		color: '#757E90',
		textAlign: 'center'
	},
	status: {
		paddingBottom: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	statusText: {
		color: '#757E90',
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: '#46A575',
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: '#D04949',
		borderRadius: 3,
		marginRight: 4
	},
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#FFF',
		marginHorizontal: 7,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: '#363636',
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: '#FFF',
		marginHorizontal: 7,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: '#363636',
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		fontFamily: 'tinderclone',
		color: '#FFA200'
	},
	like: {
		fontFamily: 'tinderclone',
		fontSize: 25,
		color: '#B644B2'
	},
	dislike: {
		fontFamily: 'tinderclone',
		fontSize: 25,
		color: '#363636'
	},
	flash: {
		fontFamily: 'tinderclone',
		color: '#5028D7'
	}
});

export default CardItem;
