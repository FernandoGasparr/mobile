import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Conquest from '../components/conquest/Index';
import { theme } from './../styles/theme';
import Lives from '../components/Lives/Index';
const HomeScreen = () => {
	return (
		<View style={styles.container}>
			{/* <Text style={styles.title}>HomeScreen Tela Inicial</Text> */}
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<Conquest />
					<Lives />
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	title: {
		marginTop: '10%',
		fontSize: 30,
		fontFamily: theme.fonts.bold,
		textAlign: 'center',
	},
	scrollView: {
		backgroundColor: theme.colors.skin,
	},
});
export default HomeScreen;
