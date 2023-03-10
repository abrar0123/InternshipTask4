import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.mainContainerStyle, props.customStyle]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    // paddingTop: StatusBar.currentHeight,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Card;
