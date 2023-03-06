import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import profile from "./profile";
import Firstnav from "./firstnav";
import Login from "./forms";
import First from "./Screens/Home/first";
import Secondnav from "./secondnav";
import Tabs from "./Tabs";
const Stackk = createNativeStackNavigator();

const Stack = () => {
  return (
    <Stackk.Navigator initialRouteName="Second Screen">
      <Stackk.Screen
        name="First Screen"
        component={Firstnav}
        options={{ headerShown: false }}
      />
      <Stackk.Screen name="Splash Screen" component={Secondnav} />
      <Stackk.Screen
        name="Tabs"
        component={Tabs}
        // options={{ headerShown: false }}
      />
      <Stackk.Screen name="profile" component={profile} />
      <Stackk.Screen
        name="Login"
        component={Login}
        options={
          {
            // headerShown: false,
            // tabBarStyle: {
            // display: "none",
            // },
          }
        }
      />
      <Stackk.Screen
        name="Home Screen"
        component={First}
        options={{ headerShown: false }}
      />
    </Stackk.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Stack;
