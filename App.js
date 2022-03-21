import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Navigation from './Navigation';
import AppLoading from 'expo-app-loading';
// font
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
	Poppins_800ExtraBold,
	Poppins_900Black,
} from '@expo-google-fonts/poppins';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_800ExtraBold,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<>
			<StatusBar backgroundColor='transparent' translucent style='auto' />
			{/* <Header /> */}
			<Navigation />
		</>
	);
}
