import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const Card = (props) => {
  return <View style={styles.mainContainerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Card;
