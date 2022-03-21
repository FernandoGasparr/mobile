import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Team from '../components/Team';

const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<Team />
				</ScrollView>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.skin,
	},
});
export default AboutScreen;
