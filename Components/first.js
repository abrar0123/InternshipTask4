import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ListItem,
  FlatList,
  TextInput,
  ScrollView,
  Icon,
  Alert,
  ToastAndroid,
  BackHandler,
  TouchableOpacity,
  Image,
} from "react-native";
import { DecreamentCount, IncreamentCount } from "../Rtredux/reduxProvider";

import { LogBox } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useState } from "react";
import Foodlistdata from "./foodlistdata";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import BurgerList from "./BurgerList";

const RFood = [
  {
    id: 1,
    name: "Beef Burger",
    time: "20min",
    rating: "4.5",
    price: "$12.00",
    image: require("../Components/burger.png"),
  },
  {
    id: 2,
    name: "Egg Burger",
    time: "20min",
    rating: "4.5",
    price: "$11.00",
    image: require("../Components/burger2.png"),
  },
  {
    id: 3,
    name: "Chapli Burger",
    time: "25min",
    rating: "4.4",
    price: "$13.00",
    image: require("../Components/burger3.png"),
  },
  {
    id: 4,
    name: "Chicken Burger",
    time: "30min",
    rating: "4.7",
    price: "$15.00",
    image: require("../Components/burger4.png"),
  },
];

const RPizza = [
  {
    id: 5,
    name: "Pizza Burger",
    time: "30min",
    rating: "4.5",
    price: "$25.00",
    image: require("../assets/material/pizza1.png"),
  },
  {
    id: 6,
    name: "Chicken pizaa ",
    time: "30min",
    rating: "4.5",
    price: "$30.00",
    image: require("../assets/material/pizza4.png"),
  },
  {
    id: 7,
    name: "Chapli pizaa",
    time: "35min",
    rating: "4.6",
    price: "$30.00",
    image: require("../assets/material/pizza2.png"),
  },
  {
    id: 8,
    name: "Large Pizza",
    time: "30min",
    rating: "4.7",
    price: "$35.00",
    image: require("../assets/material/pizza3.png"),
  },
];

const Hotdogs = [
  {
    id: 5,
    name: "Hot dogs ",
    time: "30min",
    rating: "4.5",
    price: "$25.00",
    image: require("../assets/material/hotdog.png"),
  },
  {
    id: 6,
    name: "Corn dogs",
    time: "30min",
    rating: "4.5",
    price: "$30.00",
    image: require("../assets/material/ht3.png"),
  },
  {
    id: 7,
    name: "Dodger Dog",
    time: "35min",
    rating: "4.6",
    price: "$30.00",
    image: require("../assets/material/ht1.png"),
  },
  {
    id: 8,
    name: "cheese dogs",
    time: "30min",
    rating: "4.7",
    price: "$35.00",
    image: require("../assets/material/ht4.png"),
  },
];
const First = () => {
  // const m=route.params.v;

  const FoodList = [
    {
      id: 1,
      name: "Pizza khdhsj",
      image: require("../Components/burger.png"),
    },
    {
      id: 2,
      name: "Burger kjds",
      image: require("../Components/pizza.png"),
    },
    {
      id: 3,
      name: "Hotdog",
      image: require("../Components/hotdog.png"),
    },
    {
      id: 4,
      name: "Shawarma",
      image: require("../Components/pizza.png"),
    },
  ];

 

  const counter = useSelector((state) => state.counter);
  const counterp = useSelector((state1) => state1.counterPizza);

  const [search, setsearch] = useState("");
  const [filterdata, setFilterdData] = useState();
  const [masterdata, setmasterdata] = useState(RFood);
  const [catagory, setcatagory] = useState(RFood);
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
  const [select, setselect] = useState("Uunselect");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dispatch = useDispatch();

  const selected = () => {
    if (select === "Uunselect") {
      setselect("Uselect");
      // <BurgerList/>
      dispatch(IncreamentCount());
      console.log("Uselect ");

      // if (props.index >= 0) {
      //   console.log("Uselect" + props.index);
      // }
    } else {
      setselect("Uunselect");
      dispatch(DecreamentCount());
      console.log("Uunselect ");
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  // const searchName = (input) => {
  //   let data = Sdata;
  //   let searchData = data.filter((item) => {
  //     return item.name.toLowerCase().includes(input.toLowerCase());
  //   });
  //   setNewData(searchData);
  // };
  // const showToast =
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: 50, margin: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
          </View>
          <Text style={styles.txtR}>
            Find The
            <Text style={{ color: "red", fontWeight: "bold" }}>
              Best {" \n"}Food
            </Text>
            <Text> Around You</Text>
          </Text>

          <View style={styles.flextop}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f3f6f4",
                borderRadius: 15,
                marginRight: 10,
                height: 55,
                marginRight: 20,
              }}
            >
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
                style={{ position: "absolute", right: 10 }}
                name="cross"
                size={30}
                color="black"
                onPress={() => setFilterdData("")}
                // onLongPress={() =>
                //   Alert.alert("searching start", JSON.stringify(filterdata))
                // }
              />
            </View>
            <View style={styles.bgc}>
              <Octicons
                name="filter"
                size={25}
                color="white"
                onPress={() => {
                  // if (filterdata.length < 1)
                  Alert.alert(
                    "Not Founded :" + search,
                    "No Any Data founded against your searching record of " +
                      search
                  );
                  // else
                  //   Alert.alert(
                  //     "Data Founded : " + search,

                  //     JSON.stringify(filterdata),
                  //     [
                  //       {
                  //         text: "Cancel",
                  //       },
                  //       {
                  //         text: "Ok",
                  //       },
                  //     ]
                  //   );
                }}
              />
            </View>
          </View>
          <View style={styles.flextop}>
            <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 13 }}>
              Find
            </Text>
            <Text style={{ marginLeft: 10, color: "red", fontSize: 18 }}>
              {/* 5km */}
              {counter.count}
            </Text>
            <Text style={{ marginLeft: 10, color: "blue", fontSize: 18 }}>
              {/* 5km */}
              {counterp.countp}
            </Text>
            {/* <MaterialCommunityIcons name="enviroment" size={26} /> */}
          </View>

          <FlatList
            contentContainerStyle={{ paddingBottom: 0 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FoodList}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  // if (select === "Uunselect") {
                  setselect("Uselect");
                  setSelectedIndex(index);

                  // dispatch(IncreamentCount());
                  console.log("Uselect" + selectedIndex);
                  // if (props.index>= 0) {
                  //   console.log("Uselect" + props.index);
                  // }
                  // } else {
                  //   setselect("Uunselect");
                  //   dispatch(DecreamentCount());
                  //   console.log("Uunselect");
                  // }
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View
                    // style={style.container}
                    style={[
                      styles.container,
                      {
                        // backgroundColor:
                        //   select === "Uselect" ? "orange" : "#ecf0f1",
                        backgroundColor:
                          index == selectedIndex ? "red" : "#ecf0f1",
                      },
                    ]}
                  >
                    <Image source={item.image} style={styles.image} />
                    <View>
                      <Text
                        numberOfLines={1}
                        style={{ fontWeight: "bold", fontSize: 18, width: 60 }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              // <Foodlistdata name={item.name} image={item.image} />
            )}
          />

          <View style={{ marginTop: 30 }}>
            <FlatList
              data={catagory}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                if (selectedIndex === 0) {
                  setcatagory(RFood);
                  return (
                    <BurgerList
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      time={item.time}
                      price={item.price}
                      rating={item.rating}
                      index={index}
                      catagory={0}
                    />
                  );
                } else if (selectedIndex === 1) {
                  setcatagory(RPizza);
                  return (
                    <BurgerList
                      name={item.name}
                      image={item.image}
                      time={item.time}
                      price={item.price}
                      rating={item.rating}
                      index={index}
                      catagory={1}
                    />
                  );
                } else if (selectedIndex === 2) {
                  setcatagory(Hotdogs);
                  return (
                    <BurgerList
                      name={item.name}
                      image={item.image}
                      time={item.time}
                      price={item.price}
                      rating={item.rating}
                      index={index}
                    />
                  );
                } else {
                  return (
                    <BurgerList
                      name={item.name}
                      image={item.image}
                      time={item.time}
                      price={item.price}
                      rating={item.rating}
                      index={index}
                    />
                  );
                }
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  txtR: {
    fontSize: 33,
    fontWeight: "400",
  },
  input: {
    height: 55,
    width: 275,
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: "#f3f6f4",
    fontSize: 20,
    backgroundColor: "#f3f6f4",
  },
  flextop: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  bgc: {
    width: 50,
    height: 50,
    backgroundColor: "#f26868",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  ///// select index flat list style

  container: {
    flexDirection: "row",
    backgroundColor: "#f3f6f4",
    padding: 5,

    width: 120,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 13,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: "white",
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  txt: {
    paddingLeft: 10,
    color: "black",
    fontSize: 20,
    backgroundColor: "#96f69d",
  },
});
export default First;
