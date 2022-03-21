import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';

const Conquest = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nossas Conquistas</Text>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<FontAwesome name='group' size={70} color={theme.colors.black} />
					<Text style={styles.text}>500</Text>
					<Text style={styles.text}>Pessoas</Text>
				</View>
				<View style={styles.card}>
					<FontAwesome name='group' size={70} color={theme.colors.black} />
					<Text style={styles.text}>500</Text>
					<Text style={styles.text}>Pessoas</Text>
				</View>
				<View style={styles.card}>
					<FontAwesome name='group' size={70} color={theme.colors.black} />
					<Text style={styles.text}>500</Text>
					<Text style={styles.text}>Pessoas</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.beige,
		width: '100%',
	},
	title: {
		textAlign: 'center',
		fontSize: 28,
		fontFamily: theme.fonts.bold,
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 14,
		width: 150,
	},

	text: {
		textAlign: 'center',
		color: theme.colors.black,
		fontSize: 24,
		fontFamily: theme.fonts.medium,
	},
});

export default Conquest;
