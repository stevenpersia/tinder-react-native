import React from "react";
import styles from "../assets/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

const CardItem = ({
	actions,
	description,
	image,
	matches,
	name,
	onPressLeft,
	onPressRight,
	status,
	variant
}) => {
	// Fonts
	const HEART_ICON = "&#xe800;";
	const STAR_ICON = "&#xe801;";
	const LIKE_ICON = "&#xe800;";
	const DISLIKE_ICON = "&#xe802;";
	const FLASH_ICON = "&#xe803;";

	// Custom styling
	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 350,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View style={styles.container}>
			{/* IMAGE */}
			<Image source={image} style={imageStyle} />

			{/* MATCHES */}
			{matches && (
				<View style={styles.matches}>
					<Text style={styles.matchesText}>
						{HEART_ICON} {matches}% Match!
					</Text>
				</View>
			)}

			{/* NAME */}
			<Text style={nameStyle}>{name}</Text>

			{/* DESCRIPTION */}
			{description && <Text style={styles.description}>{description}</Text>}

			{/* STATUS */}
			{status && (
				<View style={styles.status}>
					<View style={status === "Online" ? styles.online : styles.offline} />
					<Text style={styles.statusText}>{status}</Text>
				</View>
			)}

			{/* ACTIONS */}
			{actions && (
				<View style={styles.actions}>
					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.star}>{STAR_ICON}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
						<Text style={styles.like}>{LIKE_ICON}</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressRight()}
					>
						<Text style={styles.dislike}>{DISLIKE_ICON}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.miniButton}>
						<Text style={styles.flash}>{FLASH_ICON}</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default CardItem;
