import React from 'react';
import { Text, View, Image } from 'react-native';
import { Container } from '../../components/Container';
import { InputDefault } from '../../components/InputDefault';
import { ButtonDefault } from '../../components/ButtonDefault';

export const LoginScreen = ({ navigation }) => {
	return (
		<Container>
			<View>
				<Image source={{ uri: '' }} />
			</View>
			<View>
				<InputDefault type="" />
				<InputDefault type="" />
				<ButtonDefault onPress={() => console.log('click')} />
			</View>
		</Container>
	);
};
