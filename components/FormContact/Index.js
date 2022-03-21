import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableHighlight,
} from 'react-native';
import { useState } from 'react';
import { theme } from '../../styles/theme';

const FormContact = () => {
	const [send, setSend] = useState('');
	console.log(send);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Seja Nosso Parceiro</Text>
			<View style={styles.inputs}>
				<TextInput
					style={styles.input}
					placeholderTextColor={theme.colors.black}
					placeholder='Nome'
					keyboardType='default'
				/>
				<TextInput
					style={styles.input}
					placeholder='Email'
					placeholderTextColor={theme.colors.black}
					keyboardType='email-address'
				/>
				<TextInput
					style={styles.inputmsg}
					placeholder='Digite sua mensagem'
					placeholderTextColor={theme.colors.black}
				/>
			</View>
			<TouchableHighlight>
				<Text>send</Text>
			</TouchableHighlight>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.black,
		paddingVertical: 20,
	},
	title: {
		fontSize: 24,
		fontFamily: theme.fonts.medium,
		color: theme.colors.beige,
		textAlign: 'center',
	},
	inputs: {
		padding: 14,
	},
	input: {
		backgroundColor: theme.colors.beige,
		padding: 14,
		margin: 14,
		color: theme.colors.skin,
	},
	inputmsg: {
		backgroundColor: theme.colors.beige,
		padding: 14,
		margin: 14,
		color: theme.colors.skin,
		height: 100,
		justifyContent: 'flex-start',
	},
});

export default FormContact;
