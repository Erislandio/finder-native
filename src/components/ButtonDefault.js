import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const ButtonDefault = ({ onPress, title }) => (
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text>{title}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		width: '100%',
		padding: 15,
		backgroundColor: `#dedede`,
		borderRadius: 10
	}
});
