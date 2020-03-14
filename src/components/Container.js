import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Container = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f1f1f1',
		padding: 20,
		width: '100%'
	}
});
