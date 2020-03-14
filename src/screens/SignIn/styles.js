import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  signText: {
    color: "#f9a501",
    fontWeight: "bold",
    marginLeft: 15
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  form: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: 20
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dedede",
    marginBottom: 10
  }
});
