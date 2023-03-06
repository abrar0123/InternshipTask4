import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = (props) => {
  return <Text style={[styles.txt, props.customText]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,

    ...Platform.select({
      ios: {
        fontFamily: "Courier",
        color: "red",
      },
      android: {
        fontFamily: "Roboto",
        color: "green",
      },
    }),
  },
});

export default AppText;
