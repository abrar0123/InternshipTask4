import React from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Button,
  LogBox,
  ImageBackground,
} from "react-native";
const Firstnav = ({ navigation }) => {
  const value="My Favourite Activity";
  return (
    <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
      {/* <ImageBackground
        source={require("./Untitled.jpg")}
        style={{ width: 400, height: 700 }}
      > */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          padding: 10,
          fontWeight: "700",
          marginTop: 100,
        }}
      >
        Welcome to Dummy Reloading Activity !
      </Text>
      <View style={styles.cont}>
        <Button
          title="Open Activity"
          color="black"
          onPress={() => navigation.navigate("Splash Screen",{myemail:`${value}`})}
        />
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    alignItems: "center",
    marginLeft: 70,
    width: 270,
    marginTop: 100,
  },
});
export default Firstnav;
