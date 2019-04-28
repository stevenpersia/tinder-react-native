import React from "react";
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	ImageBackground,
	Dimensions,
	TouchableOpacity
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";

const Profile = () => {
	const {
		age,
		image,
		info1,
		info2,
		info3,
		info4,
		location,
		match,
		name
	} = Demo[7];

	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<ScrollView style={styles.container}>
				<ImageBackground source={image} style={styles.photo}>
					<View style={styles.top}>
						<TouchableOpacity>
							<Text style={styles.topIconLeft}>
								<Icon name="chevronLeft" />
							</Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text style={styles.topIconRight}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>

				<ProfileItem
					matches={match}
					name={name}
					age={age}
					location={location}
					info1={info1}
					info2={info2}
					info3={info3}
					info4={info4}
				/>

				<View style={styles.actions}>
					<TouchableOpacity style={styles.circledButton}>
						<Text style={styles.iconButton}>
							<Icon name="optionsH" />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.roundedButton}>
						<Text style={styles.iconButton}>
							<Icon name="chat" />
						</Text>
						<Text style={styles.textButton}>Start chatting</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: { marginHorizontal: 0 },
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	photo: {
		width: Dimensions.get("window").width,
		height: 450
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	topIconLeft: {
		fontFamily: "tinderclone",
		fontSize: 20,
		color: "#FFF",
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: "90deg" }]
	},
	topIconRight: {
		fontFamily: "tinderclone",
		fontSize: 20,
		color: "#FFF",
		paddingRight: 20
	},
	actions: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	iconButton: { fontFamily: "tinderclone", fontSize: 20, color: "#FFF" },
	textButton: {
		fontFamily: "tinderclone",
		fontSize: 15,
		color: "#FFF",
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#7444C0",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: "#5636B8",
		paddingHorizontal: 20
	}
});

export default Profile;
