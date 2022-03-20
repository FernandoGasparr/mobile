import { View, Text, Image } from 'react-native';
import logo from './../../assets/icon.png';

const Header = () => {
	return (
		<View>
			<Image
				source={logo}
				style={{
					width: 100,
					height: 50,
				}}
			/>
		</View>
	);
};

export default Header;
