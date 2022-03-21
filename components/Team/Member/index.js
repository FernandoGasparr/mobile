import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import abimael from '../../../assets/abimael.png';
import gustavo from '../../../assets/gustavo.png';
import jonatan from '../../../assets/jonatan.png';
import fernando from '../../../assets/fernando.png';
import renan from '../../../assets/renan.png';
import rodrigo from '../../../assets/rodrigo.png';

const Member = props => {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={props.img} />
			<Text style={styles.name}>{props.nome}</Text>
			<View style={styles.iconContainer}>
				<FontAwesome
					name='github'
					size={24}
					color={theme.colors.black}
					style={styles.icon}
				/>
				<FontAwesome
					name='linkedin'
					size={24}
					color={theme.colors.black}
					style={styles.icon}
				/>
				<FontAwesome
					name='envelope'
					size={24}
					color={theme.colors.black}
					style={styles.icon}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		backgroundColor: theme.colors.skin,
		width: '47%',
		height: 220,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
		borderColor: theme.colors.black,
		borderWidth: 4,
		padding: 10,
	},
	img: {
		width: 100,
		height: 100,
		backgroundColor: theme.colors.black,
		borderRadius: 50,
	},
	name: {
		fontSize: 16,
		textAlign: 'center',
		fontFamily: theme.fonts.medium,
	},
	iconContainer: {
		flexDirection: 'row',
	},
	icon: {
		padding: 5,
	},
});
export default Member;
