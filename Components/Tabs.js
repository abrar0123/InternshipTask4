import React from "react";
import { View, StyleSheet, Text } from "react-native";
import First from "./first";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import About from "./About";
import Profile1 from "./Myprofile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import redux from "../Rtredux/redux";
const Tabs = ({ route }) => {
  const Tab = createBottomTabNavigator();
  // const m = route.params.myemail;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          //  paddingBottom:10,
          position: "absolute",
          // bottom: 0,
          top: 0,
          //   right: 16,
          //   left: 16,
          // borderRadius: 30,
          // elevation: 0,

          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          ...styles.shadow,
        },
      }}
      tabBarOptions={{
        // borderRadius:10,
        //  activeBackgroundColor: "orange",
        inactiveBackgroundColor: "white",
        activeBorderTopWidth: 5,
        activeBorderColor: "red",
        // tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="Home Activity"
        component={First}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo
              name="home"
              size={size}
              color={color}
              style={{ color: focused ? "black" : color }}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "black" : color,
                fontSize: size,
                fontWeight: "600",
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile Activity"
        component={Profile1}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={color}
              style={{
                color: focused ? "black" : color,
              }}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "black" : color,
                fontSize: size,
                fontWeight: "500",
              }}
            >
              Profile
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="About Activity"
        component={redux}
        // children={() => <About memail={m} />}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={25}
              color={color}
              style={{
                color: focused ? "black" : color,
              }}
            />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <Text
              style={{
                color: focused ? "black" : color,
                fontSize: size,
                fontWeight: "500",
                marginRight:4,
              }}
            >
              Abo
              <View
                style={{ marginLeft:10,width: 20, height: 14, backgroundColor: "black",borderRadius:3, }}
              ></View>
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
  txt: {
    fontSize: 22,
    fontWeight: "500",
  },
});
export default Tabs;
