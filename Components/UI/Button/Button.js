import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import AppText from "../AppText";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <AppText> {props.children}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 25,
  },
});

export default Button;
