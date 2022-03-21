import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { theme } from '../styles/theme';
import Team from '../components/Team';
import Solucao from '../components/solucao/Index';

const AboutScreen = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollView}>
					<Solucao />
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
