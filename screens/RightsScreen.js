import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import React from 'react';

const RightsScreen = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<Text>Direitos</Text>
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
