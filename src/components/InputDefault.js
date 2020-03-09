import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const InputDefault = ({ placeholder, onChange, type, secure }) => (
	<TextInput
		placeholder={placeholder}
		style={styles.input}
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
		paddingVertical: 12.5,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#dedede',
		marginBottom: 10
	}
});
