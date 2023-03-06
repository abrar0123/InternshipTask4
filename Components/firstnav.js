import React from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  LogBox,
  ImageBackground,
  Image,
  Platform,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Button from "./UI/Button/Button";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { useEffect } from "react";
import AppText from "./UI/AppText";
import Card from "./UI/Card";
import Colors from "../assets/config/Colors";
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
    // <SafeAreaView>
    <Card>
      <AppText customText={styles.headertext}>Welcome to Splash</AppText>
      <AppText customText={styles.customText}>AppText </AppText>
      {/* <Button title="Next" color="black" onPress={nextHandler} /> */}
      <Button onPress={nextHandler}>Next Activity</Button>
      <View
        style={{
          width: "90%",
          margin: 20,
          height: orientation.land ? "70%" : "30%",
          backgroundColor: "lightblue",
          flexDirection: "row",
          paddingTop: 10,
        }}
      >
        <Image
          source={require("../assets/logo.png")}
          style={styles.imageStyle}
        />
        <View>
          <AppText customText={{ textAlign: "left" }}>
            Lahore Gladiatord{" "}
          </AppText>
          <AppText customText={{ textAlign: "left" }}>Karachi Kings</AppText>
        </View>
      </View>
    </Card>
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  customText: {
    fontSize: 15,
    paddingBottom: 20,
    color: Colors.primary,
  },
  headertext: {
    fontSize: 25,
    paddingTop: 30,
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderRadius: 50,
  },
});
export default Firstnav;
