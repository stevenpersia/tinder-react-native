import React from "react";
import {
	StyleSheet,
	ScrollView,
	Text,
	TouchableOpacity,
	ImageBackground,
	Dimensions,
	View,
	FlatList
} from "react-native";
import Message from "../components/Message";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";

const Messages = () => {
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.top}>
						<Text style={styles.title}>Messages</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<Message
									image={item.image}
									name={item.name}
									lastMessage={item.message}
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},
	bg: {
		flex: 1,
		resizeMode: "cover",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: { paddingBottom: 10, fontSize: 22, color: "#363636" },
	icon: {
		fontFamily: "tinderclone",
		fontSize: 20,
		color: "#363636",
		paddingRight: 10
	}
});

export default Messages;
