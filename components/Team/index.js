import { View, StyleSheet } from 'react-native';
import Member from './Member';
import abimael from '../../assets/abimael.png';
import gustavo from '../../assets/gustavo.png';
import jonatan from '../../assets/jonatan.png';
import fernando from '../../assets/fernando.png';
import renan from '../../assets/renan.png';
import rodrigo from '../../assets/rodrigo.png';

const Team = () => {
	const members = [
		{
			nome: 'Abimael Lovera',
			img: abimael,
			dev: 'Desenvolverdor FullStack',
		},
		{
			nome: 'Fernando Gaspar',
			img: fernando,
			dev: 'Desenvolverdor FullStack',
		},
		{
			nome: 'Gustavo Silva',
			img: gustavo,
			dev: 'Desenvolverdor FullStack',
		},
		{
			nome: 'Rodrigo Cunha',
			img: rodrigo,
			dev: 'Desenvolverdor FullStack',
		},
		{
			nome: 'Jonatan Vasconcelos',
			img: jonatan,
			dev: 'Desenvolverdor FullStack',
		},
		{
			nome: 'Renan dos Reis Fernandes',
			img: renan,
			dev: 'Desenvolverdor FullStack',
		},
	];
	return (
		<View style={styles.container}>
			{members.map(member => {
				return <Member nome={member.nome} img={member.img} />;
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default Team;
