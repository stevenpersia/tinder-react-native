import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";

const Filters = () => {
	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.filtersText}>&#xf0b0; Filters</Text>
		</TouchableOpacity>
	);
};

export default Filters;
