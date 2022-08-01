import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: "100%",
  },

  text: {
    width: "88%",
    backgroundColor: "#323232",
    alignSelf: "center",
    padding: 12,
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 22,
    borderRadius: 6,
    color: "#fff",
  },
  company: {
    fontSize: 25,
    fontWeight: "bold",
    borderRadius: 6,
    marginRight: 140,
  },
  displayIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  Icons: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
  },
  settingsIcon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 25,
  },
  disabledButton: {
    opacity: 10,
  },
  button: {
    opacity: 100,
  },
});
