import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecreamentCount, IncreamentCount } from "./reduxProvider";
const Redux = () => {
  //   const [count, setcount] = useState(0);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const counterp = useSelector((state1) => state1.counterPizza);

  return (
    <View>
      <Text style={styles.txt}>Welcome to Login</Text>
      <Text style={styles.txt}> My Burgers : {counter.count}</Text>
      <Text style={styles.txt}> My pizzas : {counterp.countp}</Text>

      <View style={{ marginBottom: 30, alignItems: "center" }}>
        <Button
          title="Increament counter"
          //   onPress={() => setcount(count + 1)}
          onPress={() => dispatch(IncreamentCount())}
        />
      </View>
      <View style={{ marginBottom: 30, alignItems: "center" }}>
        <Button
          title="Decreament counter"
          //   onPress={() => {
          //     if (count > 0) {
          //     //   setcount(count - 1);
          //     }
          //   }}
          onPress={() => {
            if (counter.count <= 0) {
              //   console.log("cannot decrease from zero");
            } else dispatch(DecreamentCount());
          }}
        />
      </View>
      <View style={{ marginBottom: 30, alignItems: "center" }}>
        <Button
          title="Click to Reset Data"
          color="red"
          //   onPress={() => setcount(count + 1)}
          onPress={() => (counter.count = 0)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
    textAlign: "center",
  },
});
export default Redux;
