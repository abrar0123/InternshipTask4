import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.mainContainerStyle, props.customStyle]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainerStyle: {
    
  },
});

export default Card;
