import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const InputDefault = ({ customize, placeholder, onChange, type, secure }) => (
	<TextInput
		placeholder={placeholder}
		style={[styles.input, customize]}
		secureTextEntry={secure}
		onChangeText={(text) => onChange(text)}
		keyboardType={type}
	/>
);

const styles = StyleSheet.create({
	input: {
		width: '100%',
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#dedede',
		marginBottom: 10
	}
});
