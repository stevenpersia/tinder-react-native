import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";

const Filters = () => {
	// Fonts
	const FILTER_ICON = "&#xf0b0;";

	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.filtersText}>{FILTER_ICON} Filters</Text>
		</TouchableOpacity>
	);
};

export default Filters;
