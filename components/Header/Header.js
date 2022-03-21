import { View, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import logo from './../../assets/1.png';
import logo2 from './../../assets/2.png';

import logo3 from './../../assets/3.png';

const Header = () => {
	return (
		<View style={styles.container}>
			<Image
				source={logo2}
				style={{
					width: 250,
					height: 70,
					resizeMode: 'cover',
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 100,
		paddingTop: 20,
		backgroundColor: theme.colors.black,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Header;
