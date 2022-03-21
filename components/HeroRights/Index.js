import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../styles/theme';
import mulher from '../../assets/mulher.png';

const HeroRights = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Seus</Text>
				<Text style={styles.title}>Diretos</Text>
			</View>
			<Image source={mulher} style={styles.img} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: theme.colors.skin,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		color: theme.colors.beige,
		fontSize: 28,
		fontFamily: theme.fonts.bold,
	},

	img: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
});
export default HeroRights;
