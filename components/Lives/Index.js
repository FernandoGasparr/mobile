import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import Card from './Card/Card';

import djamila from '../../assets/djamila-ribeiro.jpg';
import silvio from '../../assets/silvioalmeida.jpg';
import sueli from '../../assets/sueli-carneiro.jpg';

const Lives = () => {
	const streams = [
		{
			id: 1,
			nome: 'Djamila Ribeiro',
			img: djamila,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur dolorum magnam, officia quae ea temporibus, unde vel minima, corrupti laboriosam! Temporibus quas pariatur qui labore, iusto quae eos asperiores.',
			youtube: '',
			twitch: '',
		},
		{
			id: 2,
			nome: 'Silvio almeida',
			img: silvio,
			description:
				'When building your own native code, GIF and WebP are not supported by default on Android.You will need to add some optional modules in android/app/build.gradle, depending on the needs of your app..',
			youtube: '',
			twitch: '',
		},
		{
			id: 3,
			nome: 'Sueli Carneiro',
			img: sueli,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur dolorum magnam, officia quae ea temporibus, unde vel minima, corrupti laboriosam! Temporibus quas pariatur qui labore, iusto quae eos asperiores.',
			youtube: '',
			twitch: '',
		},
	];
	return (
		<View style={styles.container}>
			{streams.map(stream => {
				return (
					<Card
						key={stream.id}
						nome={stream.nome}
						description={stream.description}
						img={stream.img}
						youtube={stream.youtube}
						twitch={stream.twitch}
					/>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		borderWidth: 3,
		borderColor: theme.colors.black,
		borderStyle: 'solid',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 14,
	},
});
export default Lives;
