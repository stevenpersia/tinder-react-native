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

export default ProfileItem;
