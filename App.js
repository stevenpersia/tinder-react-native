import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './containers/Home';
import MatchesScreen from './containers/Matches';
import MessagesScreen from './containers/Messages';
import ProfileScreen from './containers/Profile';

const App = createBottomTabNavigator(
	{
		Explore: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ focused, tintColor }) => {
					const iconFocused = focused ? '#7444C0' : '#363636';
					return (
						<Text style={[styles.icon, { color: iconFocused }]}>&#xf50d;</Text>
					);
				}
			}
		},
		Matches: {
			screen: MatchesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused, tintColor }) => {
					const iconFocused = focused ? '#7444C0' : '#363636';
					return (
						<Text style={[styles.icon, { color: iconFocused }]}>&#xe800;</Text>
					);
				}
			}
		},
		Chat: {
			screen: MessagesScreen,
			navigationOptions: {
				tabBarIcon: ({ focused, tintColor }) => {
					const iconFocused = focused ? '#7444C0' : '#363636';
					return (
						<Text style={[styles.icon, { color: iconFocused }]}>&#xf4ac;</Text>
					);
				}
			}
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: ({ focused, tintColor }) => {
					const iconFocused = focused ? '#7444C0' : '#363636';
					return (
						<Text style={[styles.icon, { color: iconFocused }]}>&#xf061;</Text>
					);
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: '#7444C0',
			inactiveTintColor: '#363636',
			labelStyle: {
				fontSize: 14,
				textTransform: 'uppercase',
				paddingTop: 10
			},
			style: {
				backgroundColor: '#FFF',
				borderTopWidth: 0,
				paddingVertical: 30,
				height: 60,
				marginBottom: 0,
				shadowOpacity: 0.05,
				shadowRadius: 10,
				shadowColor: '#000',
				shadowOffset: { height: 0, width: 0 }
			}
		}
	}
);

const styles = StyleSheet.create({
	tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	tabButtonText: {
		textTransform: 'uppercase'
	},
	icon: {
		fontFamily: 'tinderclone',
		height: 20,
		paddingBottom: 7
	}
});

export default createAppContainer(App);
