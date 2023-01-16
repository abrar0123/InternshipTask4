import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { DecreamentCount, IncreamentCount } from "../Rtredux/reduxProvider";
import Firstnav from "./firstnav";
import { useDispatch } from "react-redux";
import BurgerList from "./BurgerList";

export default function Foodlistdata(props) {
  const [select, setselect] = useState("Uunselect");
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const dispatch = useDispatch();

  const selected = () => {
    if (select === "Uunselect") {
      setselect("Uselect");
      // <BurgerList/>
      dispatch(IncreamentCount());

      // if (props.index >= 0) {
      //   console.log("Uselect" + props.index);
      // }
    } else {
      setselect("Uunselect");
      dispatch(DecreamentCount());
      console.log("Uunselect ");
    }
  };

  return (
    <>
      <TouchableOpacity onPress={selected}>
        <View style={{ flexDirection: "row" }}>
          <View
            // style={style.container}
            style={[
              style.container,
              {
                backgroundColor: select === "Uselect" ? "orange" : "#ecf0f1",
              },
            ]}
          >
            <Image source={props.image} style={style.image} />
            <View>
              <Text
                numberOfLines={1}
                style={{ fontWeight: "bold", fontSize: 18, width: 60 }}
              >
                {props.name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* <View>
      {isShown && <BurgerList/>}
    </View> */}
    </>
  );
}
const style = StyleSheet.create({
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
