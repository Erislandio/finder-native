import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { LoginScreen } from './screens/Login/Login';

export const Routes = createAppContainer(
	createStackNavigator({
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				headerShown: false
			}
		}
	})
);
