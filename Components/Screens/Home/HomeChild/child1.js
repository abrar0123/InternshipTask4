import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../../../UI/ChildCard/Card";
const Child1 = () => {
  return (
    <Card customStyle={styles.mainContainer}>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <MaterialCommunityIcons name="eye" size={25} />
        <Text
          numberOfLines={1}
          style={{
            marginLeft: 5,
            fontSize: 18,
            fontWeight: "800",
            width: 200,
          }}
        >
          Habiganj City
        </Text>
      </View>
      <MaterialCommunityIcons
        name="menu"
        size={30}
        onPress={() =>
          ToastAndroid.show(
            "Click to open Menu !",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
          )
        }
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Child1;
