import React from "react";
import { View, StyleSheet, TextInput, Text, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setName, setAge } from "../redux/actions";
import Firstnav from "./firstnav";
const Myprofile = ({ navigation }) => {
  // const email = {memail}

  // const [email, pass] = useSelector((state) => state.userReducer);

  // const dispatch = useDispatch(); // call actions
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const data = [
    {
      id: 11,
      name: "Saleem Raza",
      country: "Pakistan",
      city: "Gujrat",
      phone: "03094988113",
    },
  ];

  const logout = () => {
    AsyncStorage.removeItem("logininfo");
    AsyncStorage.removeItem("logininfo1");
    Alert.alert("Logout", "You have To Logout Successfully");
    console.log("logout");
    navigation.navigate("Splash Screen");
  };
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={styles.txt}>
        Welcome to <Text style={{ color: "red" }}>Pofile</Text> Page
      </Text>

      <Text style={styles.txt}>Counter Data:</Text>
      <View style={styles.cont}>
        <Button
          title="Logout !"
          color="orange"
          onPress={() =>
            Alert.alert("Logout", "Are you sure you want to be logout", [
              {
                text: "No",
                onPress: console.log("no"),
              },

              {
                text: "Yes",
                onPress: logout,
              },
            ])
          }
        />

        <Button title="Click !" color="orange" onPress={handleClick} />
        <View>{isShown && <Firstnav />}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "orange",
  },
  txt: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 70,
    // marginLeft: 30,
    textAlign: "center",
  },
  cont: {
    alignItems: "center",
    marginLeft: 70,
    width: 270,
    marginTop: 100,
  },
});

export default Myprofile;
