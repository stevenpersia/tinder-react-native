import React from "react";
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	Dimensions,
	FlatList
} from "react-native";
import CardItem from "../components/CardItem";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";

const Matches = () => {
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.top}>
						<Text style={styles.title}>Matches</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						numColumns={2}
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<CardItem
									image={item.image}
									name={item.name}
									status={item.status}
									variant
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

export default Matches;
