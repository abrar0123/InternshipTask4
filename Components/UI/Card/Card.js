import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={styles.mainContainerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Card;
