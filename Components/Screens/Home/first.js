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
import {
  DecreamentCount,
  IncreamentCount,
} from "../../../Rtredux/reduxProvider";

import { LogBox } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useState } from "react";

import BurgerList from "./HomeChild/BurgerList";
import Card from "../../UI/Card";
import Colors from "../../../assets/config/Colors";
import Child1 from "./HomeChild/child1";
import SearchView from "./HomeChild/SearchView";
import AppText from "../../UI/AppText";

const RFood = [
  {
    id: 1,
    name: "Beef Burger",
    time: "20min",
    rating: "4.5",
    price: "$12.00",
    image: require("../../../assets/images/burger.png"),
  },
  {
    id: 2,
    name: "Egg Burger",
    time: "20min",
    rating: "4.5",
    price: "$11.00",
    image: require("../../../assets/images/burger2.png"),
  },
  {
    id: 3,
    name: "Chapli Burger",
    time: "25min",
    rating: "4.4",
    price: "$13.00",
    image: require("../../../assets/images/burger3.png"),
  },
  {
    id: 4,
    name: "Chicken Burger",
    time: "30min",
    rating: "4.7",
    price: "$15.00",
    image: require("../../../assets/images/burger4.png"),
  },
];

const RPizza = [
  {
    id: 5,
    name: "Pizza Burger",
    time: "30min",
    rating: "4.5",
    price: "$25.00",
    image: require("../../../assets/material/pizza.png"),
  },
  {
    id: 6,
    name: "Chicken pizaa ",
    time: "30min",
    rating: "4.5",
    price: "$30.00",
    image: require("../../../assets/material/pizza4.png"),
  },
  {
    id: 7,
    name: "Chapli pizaa",
    time: "35min",
    rating: "4.6",
    price: "$30.00",
    image: require("../../../assets/material/pizza2.png"),
  },
  {
    id: 8,
    name: "Large Pizza",
    time: "30min",
    rating: "4.7",
    price: "$35.00",
    image: require("../../../assets/material/pizza3.png"),
  },
];

const Hotdogs = [
  {
    id: 5,
    name: "Hot dogs ",
    time: "30min",
    rating: "4.5",
    price: "$25.00",
    image: require("../../../assets/material/hotdog.png"),
  },
  {
    id: 6,
    name: "Corn dogs",
    time: "30min",
    rating: "4.5",
    price: "$30.00",
    image: require("../../../assets/material/ht3.png"),
  },
  {
    id: 7,
    name: "Dodger Dog",
    time: "35min",
    rating: "4.6",
    price: "$30.00",
    image: require("../../../assets/material/ht1.png"),
  },
  {
    id: 8,
    name: "cheese dogs",
    time: "30min",
    rating: "4.7",
    price: "$35.00",
    image: require("../../../assets/material/ht4.png"),
  },
];

const First = () => {
  // const m=route.params.v;

  const FoodList = [
    {
      id: 1,
      name: "Pizza khdhsj",
      image: require("../../../assets/images/burger.png"),
    },
    {
      id: 2,
      name: "Burger kjds",
      image: require("../../../assets/images/pizza.png"),
    },
    {
      id: 3,
      name: "Hotdog",
      image: require("../../../assets/images/hotdog.png"),
    },
    {
      id: 4,
      name: "Shawarma",
      image: require("../../../assets/images/pizza.png"),
    },
  ];

  const counter = useSelector((state) => state.counter);
  const counterp = useSelector((state1) => state1.counterPizza);

  const [catagory, setcatagory] = useState(RFood);

  const [select, setselect] = useState("Uunselect");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card customStyle={styles.customStyle}>
        <Child1 />

        <Text style={styles.txtR}>
          Find the {""}
          <Text style={{ color: "red", fontWeight: "bold" }}>
            Best {" \n"}Food
          </Text>
          <Text> Around You</Text>
        </Text>

        <SearchView RFood={RFood} />

        <View style={styles.findContainer}>
          <AppText customText={{ fontSize: 28 }}>Find</AppText>
          <Text style={{ marginLeft: 10, color: "red", fontSize: 18 }}>
            {counter.count}
          </Text>
          <Text style={{ marginLeft: 10, color: "blue", fontSize: 18 }}>
            {counterp.countp}
          </Text>
        </View>

        <FlatList
          contentContainerStyle={{ paddingBottom: 0 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={FoodList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setselect("Uselect");
                setSelectedIndex(index);

                console.log("Uselect" + selectedIndex);
              }}
            >
              <View
                style={[
                  styles.container,
                  {
                    backgroundColor:
                      index == selectedIndex ? Colors.pink : Colors.grey,
                  },
                ]}
              >
                <Image source={item.image} style={styles.image} />
                <View>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      width: 60,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* comp 2  */}

        <View style={styles.burgerContainer}>
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
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  customStyle: {
    backgroundColor: Colors.white,
  },
  burgerContainer: {
    marginTop: 20,
    marginBottom: 80,
    // backgroundColor: Colors.primary,
  },
  txtR: {
    fontSize: 33,
    fontWeight: "400",
  },
  container: {
    flexDirection: "row",
    backgroundColor: Colors.grey,
    padding: 5,
    // width: 120,
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
  txt: {
    paddingLeft: 10,
    color: "black",
    fontSize: 20,
    backgroundColor: "#96f69d",
  },
  findContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
});
export default First;
