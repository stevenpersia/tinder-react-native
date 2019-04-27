import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";

const City = () => {
	// Fonts
	const MARKER_ICON = "&#xf031;";

	return (
		<TouchableOpacity style={styles.city}>
			<Text style={styles.cityText}>{MARKER_ICON} New York</Text>
		</TouchableOpacity>
	);
};

export default City;
