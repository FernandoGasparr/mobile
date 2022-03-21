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
			id: 1,
			nome: 'Abimael Lovera',
			img: abimael,
			dev: 'Desenvolverdor FullStack',
			github: '',
			linkedin: '',
			email: '',
		},
		{
			id: 2,
			nome: 'Fernando Gaspar',
			img: fernando,
			dev: 'Desenvolverdor FullStack',
			github: '',
			linkedin: '',
			email: '',
		},
		{
			id: 3,
			nome: 'Gustavo Silva',
			img: gustavo,
			dev: 'Desenvolverdor FullStack',
			github: '',
			linkedin: '',
			email: '',
		},
		{
			id: 4,
			nome: 'Rodrigo Cunha',
			img: rodrigo,
			dev: 'Desenvolverdor FullStack',
			github: '',
			linkedin: '',
			email: '',
		},
		{
			id: 5,
			nome: 'Jonatan Vasconcelos',
			img: jonatan,
			dev: 'Desenvolverdor FullStack',
			github: '',
			linkedin: '',
			email: '',
		},
		{
			id: 6,
			nome: 'Renan dos Reis Fernandes',
			img: renan,
			dev: 'Desenvolverdor FullStack',
			github: '',
			linkedin: '',
			email: '',
		},
	];
	return (
		<View style={styles.container}>
			{members.map(member => {
				return <Member nome={member.nome} img={member.img} key={member.id} />;
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
