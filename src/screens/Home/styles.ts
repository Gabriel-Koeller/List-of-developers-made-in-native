import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  titleText: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },

  subTitleText: {
    color: "#6b6b6b",
    fontSize: 20,
  },

  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },

  containerForm: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 36,
  },

  titleVoid: {
    color: "#fdfcfe",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
  },
});
