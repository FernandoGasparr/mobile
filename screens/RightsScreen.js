import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import React from 'react';
import HeroRights from '../components/HeroRights/Index';
import RightsCards from '../components/RightsCards';

const RightsScreen = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<HeroRights />
					<RightsCards />
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
});

export default RightsScreen;
