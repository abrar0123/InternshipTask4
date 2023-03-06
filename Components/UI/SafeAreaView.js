import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

const SafeArea = (props) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeArea;
