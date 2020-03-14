import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Text,
  Animated,
  Keyboard,
  AsyncStorage
} from "react-native";
import { InputDefault } from "../../components/InputDefault";
import { ButtonDefault } from "../../components/ButtonDefault";
import { withFormik } from "formik";
import * as yup from "yup";
import { logoUri } from "../../utils/logoUri";
import { Logo } from "../../components/Logo";
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import { styles } from "./styles";
import { api } from "../../services/api";
import { Container } from "../../components/Container";

const LoginScreen = ({
  navigation,
  handleSubmit,
  setFieldValue,
  isSubmitting,
  errors,
  values: { email, password }
}) => {
  const [offset] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 80
    })
  );

  const [loadingPage, setLoadingPage] = useState(true);

  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(res => {
        if (res) {
          return navigation.push("home");
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoadingPage(false);
      });

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400
      })
    ]).start();
  }, []);

  if (loadingPage) {
    return (
      <Container>
        <Logo uri={logoUri} />
      </Container>
    );
  }

  return (
    <TouchableWithoutFeedback
      containerStyle={{ flex: 1, height: "100%" }}
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        style={[styles.container, { paddingBottom: 80 }]}
        behavior="height"
        enabled
      >
        <Logo uri={logoUri} />

        <Animated.View
          style={[
            styles.form,
            {
              opacity,
              transform: [
                {
                  translateY: offset.y
                }
              ]
            }
          ]}
        >
          <InputDefault
            customize={errors.email ? { borderColor: "red" } : null}
            placeholder="Email"
            value={email}
            type="email-address"
            onChange={text => setFieldValue("email", text)}
          />
          <InputDefault
            customize={errors.password ? { borderColor: "red" } : null}
            placeholder="Senha"
            secure
            value={password}
            type="default"
            onChange={text => setFieldValue("password", text)}
          />
          <ButtonDefault
            onPress={handleSubmit}
            disabled={isSubmitting}
            title="Acessar"
            customStyles={{ backgroundColor: "#f9a501" }}
          >
            <Text style={{ color: "#fff" }}>
              {isSubmitting ? "Validando..." : "Acessar"}
            </Text>
          </ButtonDefault>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => navigation.push("signin")}
          >
            <Text>
              Não tem uma conta?{" "}
              <Text style={styles.signText}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  handleSubmit: async (values, { props: { navigation } }) => {
    const { email, password } = values;
    Keyboard.dismiss();

    const { data } = await api.post("/login", {
      email,
      password
    });

    if (data.error) {
      return alert(data.message);
    }

    if (data.user) {
      await AsyncStorage.setItem("user", JSON.stringify(data.user));
      return navigation.push("home");
    }
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
