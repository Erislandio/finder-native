import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { LoginScreen } from './screens/Login/Login';

export const AppIndex = () => (
	<NativeRouter>
		<Route exact path="/" component={LoginScreen} />
	</NativeRouter>
);
