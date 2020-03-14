import React from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { Container } from "../../components/Container";
import { InputDefault } from "../../components/InputDefault";
import { ButtonDefault } from "../../components/ButtonDefault";
import { withFormik } from "formik";
import * as yup from "yup";
import { logoUri } from "../../utils/logoUri";
import { Logo } from "../../components/Logo";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

const LoginScreen = ({
  navigation,
  handleSubmit,
  setFieldValue,
  isSubmitting,
  errors
}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Logo uri={logoUri} />
      <View style={styles.form}>
        <InputDefault
          customize={errors.email ? { borderColor: "red" } : null}
          placeholder="Email"
          type="email-address"
          onChange={text => setFieldValue("email", text)}
        />
        <InputDefault
          customize={errors.email ? { borderColor: "red" } : null}
          placeholder="Senha"
          secure
          type="default"
          onChange={text => setFieldValue("password", text)}
        />
        <ButtonDefault
          onPress={handleSubmit}
          disabled={isSubmitting}
          title="Acessar"
          customStyles={{ backgroundColor: "#f9a501" }}
        >
          <Text style={{ color: "#fff" }}>Acessar</Text>
        </ButtonDefault>
        
      </View>
    </KeyboardAvoidingView>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  handleSubmit: async values => {
    const { email, password } = values;
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O campo email deve ser preenchido"),
    password: yup
      .string()
      .min(4, "A senha deve conter o mínimo 4 caracteres")
      .required("O campo senha deve ser preenchido")
  })
})(LoginScreen);
