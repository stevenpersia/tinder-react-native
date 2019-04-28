import React from "react";
import styles from "../assets/styles";

import { Text, View } from "react-native";
import Icon from "./Icon";

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
		<View style={styles.containerProfileItem}>
			<View style={styles.matchesProfileItem}>
				<Text style={styles.matchesTextProfileItem}>
					<Icon name="heart" /> {matches}% Match!
				</Text>
			</View>

			<Text style={styles.name}>{name}</Text>

			<Text style={styles.descriptionProfileItem}>
				{age} - {location}
			</Text>

			<View style={styles.info}>
				<Text style={styles.icon}>
					<Icon name="user" />
				</Text>
				<Text style={styles.infoContent}>{info1}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>
					<Icon name="circle" />
				</Text>
				<Text style={styles.infoContent}>{info2}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>
					<Icon name="hashtag" />
				</Text>
				<Text style={styles.infoContent}>{info3}</Text>
			</View>

			<View style={styles.info}>
				<Text style={styles.icon}>
					<Icon name="calendar" />
				</Text>
				<Text style={styles.infoContent}>{info4}</Text>
			</View>
		</View>
	);
};

export default ProfileItem;
