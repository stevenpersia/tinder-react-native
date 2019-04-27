import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const Message = ({ image, lastMessage, name }) => {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.avatar} />

			<View style={styles.content}>
				<Text>{name}</Text>
				<Text style={styles.message}>{lastMessage}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		width: Dimensions.get("window").width - 100
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: "#757E90",
		fontSize: 12,
		paddingTop: 5
	}
});

export default Message;
