import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Conquest from '../components/conquest/Index';
import { theme } from './../styles/theme';
const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text
				style={{
					marginTop: '10%',
					fontSize: 30,
					fontFamily: theme.fonts.bold,
					textAlign: 'center',
				}}
			>
				HomeScreen Tela Inicial
			</Text>
			{/* <Conquest /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
});
export default HomeScreen;
