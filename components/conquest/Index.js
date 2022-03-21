import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Conquest = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nossas Conquistas</Text>
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<FontAwesome name='bullhorn' size={70} color={theme.colors.black} />
					<Text style={styles.text}>200</Text>
					<Text style={styles.text}>Denuncias</Text>
					<Text style={styles.text}>feitas</Text>
				</View>

				<View style={styles.card}>
					<FontAwesome5 name='city' size={70} color={theme.colors.black} />
					<Text style={styles.text}>10</Text>
					<Text style={styles.text}>Cidades</Text>
					<Text style={styles.text}>alcançadas</Text>
				</View>

				<View style={styles.card}>
					<FontAwesome name='users' size={70} color={theme.colors.black} />
					<Text style={styles.text}>150</Text>
					<Text style={styles.text}>Usuarios</Text>
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
		color: theme.colors.black,
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
		width: 160,
	},

	text: {
		textAlign: 'center',
		color: theme.colors.black,
		fontSize: 20,
		fontFamily: theme.fonts.medium,
	},
});

export default Conquest;
