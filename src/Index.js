// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/Login/Login';
import { HomeScreen } from './screens/Home/Home';

const Stack = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="login">
				<Stack.Screen
					name="login"
					component={LoginScreen}
					options={{
						animationEnabled: true,
						animationTypeForReplace: 'push',
						cardShadowEnabled: true,
						gestureDirection: 'horizontal',
						gestureEnabled: true
					}}
				/>
				<Stack.Screen
					name="home"
					component={HomeScreen}
					options={{
						animationEnabled: true,
						animationTypeForReplace: 'push',
						cardShadowEnabled: true,
						gestureDirection: 'horizontal',
						gestureEnabled: true
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export { Routes };
