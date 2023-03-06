import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Card from "../../../UI/ChildCard/Card";
import { Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import Colors from "../../../../assets/config/Colors";
const SearchView = (props) => {
  const [filterdata, setFilterdData] = useState();
  const [masterdata, setmasterdata] = useState(props.RFood);
  const [search, setsearch] = useState("");

  const searchFilterdfunction = (text) => {
    if (text) {
      console.log("text is:" + text);
      const newData = masterdata.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        const n = itemData.indexOf(textData) > -1;
        console.log("Finded Data is:" + n);
        return n;
      });
      setFilterdData(newData); // matched data
      setsearch(text);
      console.log(
        "searching data is: " +
          JSON.stringify(newData) +
          JSON.stringify("my data :" + text)
      );
    } else {
      setFilterdData(masterdata);
      setsearch(text);
    }
  };
  return (
    <Card customStyle={styles.mainContainer}>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          value={filterdata}
          underlineColorAndroid="transparent"
          onChangeText={(input) => searchFilterdfunction(input)}
          placeholder="Search your food"
          placeholderTextColor="grey"
          // onPressIn={() =>}
        />
        <Entypo
          name="cross"
          size={30}
          color="black"
          onPress={() => setFilterdData("")}
        />
      </View>
      <View style={styles.bgc}>
        <Octicons
          name="filter"
          size={25}
          color="white"
          onPress={() => {
            Alert.alert(
              "Not Founded :" + search,
              "No Any Data founded against your searching record of " + search
            );
          }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f6f4",
    borderRadius: 15,
    marginRight: 10,
    height: 55,
  },
  input: {
    height: 55,
    width: '75%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    borderColor: Colors.grey,
    fontSize: 18,
    backgroundColor: Colors.grey,
  },

  bgc: {
    width: 50,
    height: 52,
    backgroundColor: Colors.pink,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default SearchView;
