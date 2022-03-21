import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../../styles/theme';
import solucao from '../../assets/solucao.png';

const Solucao = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}> Nossa Solucao</Text>
			<View style={styles.content}>
				<Image source={solucao} style={styles.img} />
				<Text style={styles.text}>
					"SUA VOZ", surge a partir da discussão de seis jovens estudantes, que
					buscam uma solução tecnológica para que a população preta seja
					atendida partindo da discriminação racial enfrentada por eles.
				</Text>
				<Text></Text>
				<Text style={styles.text}>
					Nossa missão como plataforma "SUA VOZ" é ouvir pessoas que enfrentam o
					racismo enraizado na nossa sociedade, seja em forma de abuso policial,
					uma perseguição de um segurança numa loja, o constrangimento em uma
					entrevista de emprego e tantos outros problemas que infelizmente os
					negros enfrentam diariamente
				</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.beige,
		paddingBottom: 14,
	},
	title: {
		paddingTop: 14,
		color: theme.colors.black,
		textAlign: 'center',
		fontSize: 28,
		fontFamily: theme.fonts.bold,
	},
	content: {
		padding: 14,
		alignItems: 'center',
	},
	img: {
		width: 150,
		height: 200,
	},
	text: {
		fontFamily: theme.fonts.regular,
		fontSize: 15,
	},
});

export default Solucao;
