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
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import { styles } from "./styles";
import { api } from "../../services/api";
import PhoneInput from "react-native-phone-input";

const SignInScreen = ({
  navigation,
  handleSubmit,
  setFieldValue,
  isSubmitting,
  errors,
  values: { email, password, name, phone, lastname, document }
}) => {
  const [offset] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 80
    })
  );

  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
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

  const refPhone = React.createRef();

  return (
    <TouchableWithoutFeedback
      containerStyle={{ flex: 1, height: "100%" }}
      style={{ flex: 1, width: "100%" }}
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        style={[
          styles.container,
          { paddingBottom: 80, width: "100%", flex: 1 }
        ]}
        behavior="padding"
        enabled
      >
        <Text
          style={{ flex: 1, fontSize: 50, marginBottom: 50, marginTop: 50 }}
        >
          Finder
        </Text>
        <Animated.View
          style={[
            styles.form,
            {
              flex: 2,
              width: "100%",
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
            customize={errors.name ? { borderColor: "red" } : null}
            placeholder="Nome"
            value={name}
            type="usename"
            onChange={text => setFieldValue("name", text)}
          />

          <PhoneInput
            style={[styles.input, errors.phone ? { borderColor: "red" } : null]}
            ref={refPhone}
            value={phone}
            initialCountry="br"
            onChangePhoneNumber={text => setFieldValue("phone", text)}
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
            onPress={() => navigation.push("login")}
          >
            <Text>
              Já tem uma conta? <Text style={styles.signText}>Login</Text>
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
    password: "",
    name: "",
    phone: "",
    lastname: "",
    document: Math.random()
  }),
  handleSubmit: async (values, { props: { navigation } }) => {
    Keyboard.dismiss();

    const { data } = await api.post("/user", {
      ...values
    });

    if (data.error) {
      return alert(data.message);
    }

    if (data) {
      api
        .post("/login", {
          email: values.email,
          password: values.password
        })
        .then(async ({ data }) => {
          await AsyncStorage.setItem("user", JSON.stringify(data.user));
          return navigation.push("home");
        })
        .catch(error => {
          alert(
            "Não foi possível fazer o cadastro no momento, tente novamente mais tarde"
          );
        });
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
      .required("O campo senha deve ser preenchido"),
    name: yup.string().required("O campo nome deve ser preenchido"),
    phone: yup.string().required("O campo phone deve ser preenchido")
  })
})(SignInScreen);
