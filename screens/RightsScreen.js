import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import React from 'react';

const RightsScreen = () => {
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
				Seus Direitos
			</Text>
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
