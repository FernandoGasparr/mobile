// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RightsScreen from './screens/RightsScreen';

// icons
import { FontAwesome } from '@expo/vector-icons';
import { theme } from './styles/theme';

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			initialRouteName='Home Screen'
			screenOptions={{
				tabBarInactiveTintColor: theme.colors.skin,
				tabBarInactiveBackgroundColor: theme.colors.black,
				tabBarActiveTintColor: theme.colors.beige,
				tabBarActiveBackgroundColor: theme.colors.skin,
			}}
		>
			<Tab.Screen
				name='Home Screen'
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='home' size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='About Screen'
				component={AboutScreen}
				options={{
					tabBarLabel: 'Sobre nós',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='briefcase' size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name='Rights Screen'
				component={RightsScreen}
				options={{
					tabBarLabel: 'Seus Direitos',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='book' size={24} color={color} />
					),
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
}

const Navigation = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
};

export default Navigation;
