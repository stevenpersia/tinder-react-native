import React from "react";
import styles from "../assets/styles";

import { Text, View } from "react-native";

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
	// Fonts
	const HEADER_ICON = "&#xe800;";
	const USER_ICON = "&#xf061;";
	const CIRCLE_ICON = "&#xf039;";
	const HASHTAG_ICON = "&#xf029;";
	const CALENDAR_ICON = "&#xf4c5;";

	return (
		<View style={styles.container}>
			<View style={styles.matches}>
				<Text style={styles.matchesText}>
					{HEADER_ICON} {matches}% Match!
				</Text>
			</View>

			<Text style={styles.name}>{name}</Text>

			<Text style={styles.description}>
				{age} - {location}
			</Text>

			<View style={styles.info}>
				<Text style={styles.icon}>{USER_ICON}</Text>
				<Text style={styles.infoContent}>{info1}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>{CIRCLE_ICON}</Text>
				<Text style={styles.infoContent}>{info2}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>{HASHTAG_ICON}</Text>
				<Text style={styles.infoContent}>{info3}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>{CALENDAR_ICON}</Text>
				<Text style={styles.infoContent}>{info4}</Text>
			</View>
		</View>
	);
};

export default ProfileItem;
