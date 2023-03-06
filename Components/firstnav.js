import React from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Button,
  LogBox,
  ImageBackground,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { useEffect } from "react";
import AppText from "./UI/AppText";
import Card from "./UI/Card";
import SafeAreaView from "./UI/SafeAreaView";
const Firstnav = ({ navigation }) => {
  const ori = useDeviceOrientation();

  const orientation = { port: "", land: "" };
  orientation.port = ori === "portrait"; // return true if port
  orientation.land = ori === "landscape";

  console.log("pppp___", orientation);
  // const { width, height } = Dimensions.get("window");
  // console.log("width:", width, "height:", height);

  const value = "My Favourite Activity";

  useEffect(() => {
    // console.log("statusbar", StatusBar.currentHeight);
  }, []);

  const nextHandler = () => {
    navigation.navigate("Splash Screen", { myemail: `${value}` });
  };
  return (
    <SafeAreaView>
      <Card>
        <AppText customText={styles.headertext}>Welcome to Splash</AppText>
        <AppText customText={styles.customText}>AppText </AppText>
        <Button title="Next" color="black" onPress={nextHandler} />
        <View
          style={{
            width: "90%",
            margin: 20,
            height: orientation.land ? "70%" : "30%",
            backgroundColor: "lightblue",
          }}
        ></View>
      </Card>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  customText: {
    fontSize: 15,
    paddingBottom: 20,
  },
  headertext: {
    fontSize: 25,
    paddingTop: 30,
  },
});
export default Firstnav;
