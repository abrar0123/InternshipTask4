import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = (props) => {
  return <Text style={[styles.txt, props.customText]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Courier",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    // padding: 10,

    ...Platform.select({
      ios: {
        fontFamily: "Courier",
        color: "red",
      },
      android: {
        fontFamily: "Roboto",
        color: "black",
      },
    }),
  },
});

export default AppText;
