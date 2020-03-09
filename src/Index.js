// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/Login/Login';

const Stack = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="/login">
				<Stack.Screen
					name="/login"
					component={LoginScreen}
					options={{
						headerShown: false,
						animationEnabled: true
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export { Routes };
