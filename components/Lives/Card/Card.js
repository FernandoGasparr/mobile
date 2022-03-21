import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { theme } from '../../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';

const Card = props => {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={props.img} />
			<View style={styles.content}>
				<Text style={styles.nome}>{props.nome}</Text>
				<Text style={styles.paragraph}>{props.description}</Text>
				<Text style={styles.date}>24/03 ás 10:30 hrs</Text>
				<View style={styles.icons}>
					<FontAwesome
						style={styles.icon}
						name='youtube'
						size={24}
						color={theme.colors.beige}
					/>
					<FontAwesome
						style={styles.icon}
						name='twitch'
						size={24}
						color={theme.colors.beige}
					/>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Confime sua presença</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 7,
		backgroundColor: theme.colors.black,
		width: '85%',
		borderRadius: 30,
	},
	img: {
		width: '100%',
		height: 250,
		borderRadius: 20,
		resizeMode: 'cover',
	},
	content: {
		padding: 14,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nome: {
		color: theme.colors.beige,
		fontFamily: theme.fonts.medium,
		fontSize: 24,
	},
	paragraph: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.beige,
	},
	DataTransferItem: {
		fontFamily: theme.fonts.regular,
		color: theme.colors.beige,
	},
	icons: {
		flexDirection: 'row',
	},
	icon: {
		marginHorizontal: 5,
	},
	button: {
		backgroundColor: 'transparent',
		margin: 14,
		padding: 14,
		borderRadius: 20,
		borderColor: theme.colors.skin,
		borderWidth: 2,
	},
	buttonText: {
		color: theme.colors.skin,
		fontSize: 16,
	},
});

export default Card;
