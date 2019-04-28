import React from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import City from "../components/City";
import Filters from "../components/Filters";
import CardItem from "../components/CardItem";
import styles from "../assets/styles";
import Demo from "../assets/data/demo.js";

const Home = () => {
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.containerHome}>
				<View style={styles.top}>
					<City />
					<Filters />
				</View>

				<CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					{Demo.map((item, index) => (
						<Card key={index}>
							<CardItem
								image={item.image}
								name={item.name}
								description={item.description}
								matches={item.match}
								actions
								onPressLeft={() => this.swiper.swipeLeft()}
								onPressRight={() => this.swiper.swipeRight()}
							/>
						</Card>
					))}
				</CardStack>
			</View>
		</ImageBackground>
	);
};

export default Home;
