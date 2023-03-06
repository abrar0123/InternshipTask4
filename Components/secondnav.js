import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Firstnav = ({ navigation }) => {
  // const data = route.params.myemail;
  const [value, setvalue] = useState(null);
  const check = () => {
    AsyncStorage.getItem("logininfo").then((v) => {
      setvalue(v);
      if (!v) {
        navigation.navigate("Login");
        console.log("Login" + value);
      } else {
        console.log("Home Screen" + value);
        navigation.navigate("Tabs", { myemail: `${v}` });
      }
    });
  };

  useEffect(() => {
    check();
  }, []);

  const logout = () => {
    AsyncStorage.removeItem("logininfo");
    AsyncStorage.removeItem("logininfo1");
    Alert.alert("Logout", "You have To Logout Successfully");
    console.log("logout");
  };

  const login = () => {
    AsyncStorage.getItem("logininfo").then((v) => {
      setvalue(v);
      console.log("get item:" + value);
      if (v) {
        Alert.alert("data fetched " + value);
      } else {
        Alert.alert("data dont fetched " + value);
      }
    });
  };
  return (
    <View style={{ backgroundColor: "lightgrey" }}>
      <ImageBackground
        source={require("../assets/images/Untitled.jpg")}
        style={{ width: 400, height: 700 }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 28,
            padding: 10,
            fontWeight: "800",
            color: "red",
          }}
        >
          Welcome to Splash Screen
        </Text>
        <Image
          source={require("../assets/images/logo.png")}
          style={{ marginLeft: 95 }}
        />
        {/* <View style={styles.cont}>
          <Button
            title=" Click to Login"
            color="black"
            // onPress={() =>
            //   navigation.navigate("Login", {
            //     myname: "abrar878@gmail.com",
            //   })
            // }
            onPress={check}
          />
        </View> */}
        {/* <View style={styles.cont}>
          <Button title=" to Logout  " color="black" onPress={logout} />
        </View>
        <View style={styles.cont}>
          <Button title=" to Log In" color="black" onPress={login} />
        </View> */}
      </ImageBackground>
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
