import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  DecreamentCount,
  IncreamentCount,
  IncreamentCountp,
  DecreamentCountp,
} from "../Rtredux/reduxProvider";
import { useState } from "react";
const BurgerList = (props) => {
  const dispatch = useDispatch();

  const [select, setselect] = useState("unselected");
  // const getselection=useSelector(state=>state.getselection)

  const selected = () => {
    // if (select === "unselected") {
    if (props.catagory === 0 && select === "unselected") {
      setselect("selected");
      dispatch(IncreamentCount());
    } else if (props.catagory === 0 && select === "selected") {
      setselect("unselected");
      dispatch(DecreamentCount());
    }
    if (props.catagory === 1 && select === "unselected") {
      setselect("selected");
      dispatch(IncreamentCountp());
    } else if (props.catagory === 1 && select === "selected") {
      setselect("unselected");
      dispatch(DecreamentCountp());
    }
  };

  //   else {
  //     setselect("unselected");
  //     dispatch(DecreamentCountp());
  //     console.log("red selected " + props.catagory);
  //   }
  // };
  return (
    <TouchableOpacity
      // onPress={()=>dispatch(IncreamentCount())}
      onPress={selected}
    >
      <View
        // style={style.container}
        style={[
          style.container,
          { borderColor: select === "selected" ? "grey" : "#ecf0f1" },
        ]}
      >
        <Image source={props.image} style={style.image} />
        {/* <ImageComponent source={props.image} style={style.image} /> */}
        <View>
          <Text
            numberOfLines={1}
            style={{
              fontWeight: "bold",
              fontSize: 18,
              width: 90,
              marginTop: 10,
            }}
          >
            {props.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 15, color: "grey" }}>{props.time}</Text>
            <Text style={{ fontSize: 15, color: "black" }}>{props.rating}</Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 15,
              marginBottom: 5,
            }}
          >
            {props.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#f3f6f4",
    padding: 5,
    margin: 10,
    width: 150,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#ecf0f1",
    borderWidth: 1,

    // marginRight: 30,
  },
  image: {
    width: 105,
    height: 75,
    borderRadius: 30,
    marginRight: 10,
    marginTop: 10,
  },
  txt: {
    paddingLeft: 10,
    color: "black",
    fontSize: 20,
    backgroundColor: "#96f69d",
  },
  sep: {},
});

export default BurgerList;
