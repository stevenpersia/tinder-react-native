import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileItem = ({
	age,
	info1,
	info2,
	info3,
	info4,
	location,
	matches,
	name
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.matches}>
				<Text style={styles.matchesText}>&#xe800; {matches}% Match!</Text>
			</View>

			<Text style={styles.name}>{name}</Text>

			<Text style={styles.description}>
				{age} - {location}
			</Text>

			<View style={styles.info}>
				<Text style={styles.icon}>&#xf061;</Text>
				<Text style={styles.infoContent}>{info1}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>&#xf039;</Text>
				<Text style={styles.infoContent}>{info2}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>&#xf029;</Text>
				<Text style={styles.infoContent}>{info3}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>&#xf4c5;</Text>
				<Text style={styles.infoContent}>{info4}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000",
		shadowOffset: { height: 0, width: 0 }
	},
	matches: {
		width: 131,
		marginTop: -15,
		backgroundColor: "#7444C0",
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesText: {
		fontFamily: "tinderclone",
		color: "#FFF"
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: "#363636",
		fontSize: 15,
		textAlign: "center"
	},
	description: {
		color: "#757E90",
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	icon: {
		fontFamily: "tinderclone",
		fontSize: 12,
		color: "#363636",
		paddingHorizontal: 10
	},
	infoContent: {
		color: "#757E90",
		fontSize: 13
	}
});

export default ProfileItem;
