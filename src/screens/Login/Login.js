import React from 'react';
import { View, Image } from 'react-native';
import { Container } from '../../components/Container';
import { InputDefault } from '../../components/InputDefault';
import { ButtonDefault } from '../../components/ButtonDefault';
import { withFormik } from 'formik';
import Yup from 'yup';

const LoginScreen = ({ navigation, handleSubmit, setFieldValue, isSubmitting }) => {
	return (
		<Container>
			<View>
				<Image source={{ uri: '' }} />
			</View>
			<View style={{ width: '100%', maxWidth: 300 }}>
				<InputDefault type="" onChange={(text) => setFieldValue('email', text)} />
				<InputDefault secure type="" onChange={(text) => setFieldValue('password', text)} />
				<ButtonDefault onPress={handleSubmit} />
			</View>
		</Container>
	);
};

export default withFormik({
	mapPropsToValues: () => ({
		email: '',
		password: ''
	}),
	handleSubmit: (values) => {
		console.log(values);
	},
	validationSchema: Yup.object().shape({
		email: Yup.string().email('Digite um email válido').required('O campo email deve ser preenchido'),
		password: Yup.string()
			.min(4, 'A senha deve conter o mínimo 6 caracteres')
			.required('O campo senha deve ser preenchido')
	})
})(LoginScreen);
