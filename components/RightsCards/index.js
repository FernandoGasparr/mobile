import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableHighlight,
} from 'react-native';
import React from 'react';
import { theme } from '../../styles/theme';
import abordagem from '../../assets/aa.jpg';
import cotas from '../../assets/cotasraciais.jpg';
import lei from '../../assets/lei.jpg';
import racismo from '../../assets/racismo.png';
import saude from '../../assets/saude.png';

const RightsCards = () => {
	return (
		<>
			<View style={styles.container}>
				<Image source={cotas} style={styles.img} />
				<View style={styles.content}>
					<Text style={styles.title}>Cotas Raciais</Text>
					<TouchableHighlight style={styles.btn}>
						<Text>Leia mais</Text>
					</TouchableHighlight>
				</View>
			</View>

			<View style={styles.container}>
				<Image source={lei} style={styles.img} />
				<View style={styles.content}>
					<Text style={styles.title}>Lei da Igualdade Racial</Text>
					<TouchableHighlight style={styles.btn}>
						<Text>Leia mais</Text>
					</TouchableHighlight>
				</View>
			</View>

			<View style={styles.container}>
				<Image source={abordagem} style={styles.img} />
				<View style={styles.content}>
					<Text style={styles.title}>Abordagens Policiais</Text>
					<TouchableHighlight style={styles.btn}>
						<Text>Leia mais</Text>
					</TouchableHighlight>
				</View>
			</View>

			<View style={styles.container}>
				<Image source={racismo} style={styles.img} />
				<View style={styles.content}>
					<Text style={styles.title}>Injúria Racial e Racismo</Text>
					<TouchableHighlight style={styles.btn}>
						<Text>Leia mais</Text>
					</TouchableHighlight>
				</View>
			</View>

			<View style={styles.container}>
				<Image source={saude} style={styles.img} />
				<View style={styles.content}>
					<Text style={styles.title}>Política de Saúde</Text>
					<TouchableHighlight style={styles.btn}>
						<Text>Leia mais</Text>
					</TouchableHighlight>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		margin: 14,
		backgroundColor: theme.colors.black,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
	},
	content: {
		width: '55%',
		borderColor: '#fff',
		paddingHorizontal: 10,
	},
	title: {
		paddingLeft: 14,
		color: theme.colors.beige,
		fontFamily: theme.fonts.medium,
		fontSize: 16,
		textAlign: 'center',
	},
	img: {
		width: 150,
		height: 100,
		borderRadius: 10,
	},
	btn: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: theme.colors.skin,
		padding: 5,
		borderRadius: 5,
	},
});

export default RightsCards;
