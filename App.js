import React from 'react';
import { Routes } from './src/Index';
import { AppRegistry } from 'react-native';

export default function App() {
	return <Routes />;
}
AppRegistry.registerComponent('Finder', () => Routes);
