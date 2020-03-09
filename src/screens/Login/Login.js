import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/Container';

export const LoginScreen = ({ navigation }) => {
	return (
		<Container>
			<Text onPress={() => navigation.push('home')}>Login</Text>
		</Container>
	);
};
