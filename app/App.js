import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import styles from "./assets/styles";
import SignUpScreen from "./containers/SignUp";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import Icon from "./components/Icon";

const App = createBottomTabNavigator(
	{
		Explore: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#2c9c91" : "#4a4949";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused, marginTop: "15%" }]}>
							<Icon name="explore" />
						</Text>
					);
				}
			}
		},
		Matches: {
			screen: MatchesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#2c9c91" : "#4a4949"; //#363636
					return (
						<Text style={[styles.iconMenu, { color: iconFocused, marginTop: "15%" }]}>
							<Icon name="heart" />
						</Text>
					);
				}
			}
		},
		Chat: {
			screen: MessagesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#2c9c91" : "#4a4949";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused, marginTop: "15%" }]}>
							<Icon name="chat" />
						</Text>
					);
				}
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#2c9c91" : "#4a4949";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused, marginTop: "15%" }]}>
							<Icon name="user" />
						</Text>
					);
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#7444C0",
			inactiveTintColor: "#363636",
			labelStyle: {
				fontSize: 0,
				textTransform: "uppercase",
				paddingTop: 10
			},
			style: {
				backgroundColor: "#FFF",
				borderTopWidth: 0,
				paddingVertical: 20,
				height: 60,
				shadowOpacity: 0.3,
				shadowRadius: 10,
				shadowColor: "#000",
				shadowOffset: { height: 0, width: 0 }
			}
		}
	}
);

export default (true ? SignUpScreen : createAppContainer(App));