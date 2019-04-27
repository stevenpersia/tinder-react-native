import { StyleSheet, Dimensions } from "react-native";

const primaryColor = "#1d262a";
const secondaryColor = "#CCC";

export default StyleSheet.create({
	// GENERAL
	container: {
		backgroundColor: "#FFF",
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000",
		shadowOffset: { height: 0, width: 0 }
	},

	// COMPONENT - CARD ITEM
	matches: {
		marginTop: -35,
		backgroundColor: "#7444C0",
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesText: {
		fontFamily: "tinderclone",
		color: "#FFF"
	},
	description: {
		color: "#757E90",
		textAlign: "center"
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: "#757E90",
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: "#46A575",
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: "#D04949",
		borderRadius: 3,
		marginRight: 4
	},
	actions: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: "#FFF",
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: "#363636",
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: "#FFF",
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: "#363636",
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		fontFamily: "tinderclone",
		color: "#FFA200"
	},
	like: {
		fontFamily: "tinderclone",
		fontSize: 25,
		color: "#B644B2"
	},
	dislike: {
		fontFamily: "tinderclone",
		fontSize: 25,
		color: "#363636"
	},
	flash: {
		fontFamily: "tinderclone",
		color: "#5028D7"
	},

	// COMPONENT - CITY
	city: {
		backgroundColor: "#FFF",
		padding: 10,
		borderRadius: 20,
		width: 90,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000",
		shadowOffset: { height: 0, width: 0 }
	},
	cityText: {
		fontFamily: "tinderclone",
		color: "#363636",
		fontSize: 13
	},

	// COMPONENT - FILTERS
	filters: {
		backgroundColor: "#FFF",
		padding: 10,
		borderRadius: 20,
		width: 70,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: "#000",
		shadowOffset: { height: 0, width: 0 }
	},
	filtersText: {
		fontFamily: "tinderclone",
		color: "#363636",
		fontSize: 13
	},

	// COMPONENT - MESSAGE
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
	},

	// COMPONENT - PROFILE ITEM
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
