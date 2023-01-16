import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = ({ memail }) => {
  return (
    <View>
      <Text style={styles.txt}>
        Welcome to <Text style={{ color: "red" }}>About</Text> Page
      </Text>

      <Text style={styles.txt}>
        User Data: <Text style={{ color: "green" }}>{memail}</Text> Page
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 70,
    marginLeft: 30,
  },
});

export default About;
