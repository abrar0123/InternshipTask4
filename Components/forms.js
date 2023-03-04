import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Tabs from "./Tabs";
import Firstnav from "./firstnav";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Home from "../comp/home";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import { useSelector, useDispatch } from "react-redux";
// import { setName, setAge } from "../redux/actions";

const validationshema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  pass: Yup.string().required().min(4).label("Password"),
});

const Forms = ({ navigation }) => {
  // const [email,pass]=useSelector(state=>state.userReducer);

  // const dispatch=useDispatch(); // call actions

  // const name = route.params.myname;
  const [email, setemail] = useState(null);
  const [pass, setpass] = useState(null);

  const submit = (values) => {
    // if (values.email || values.pass) {
    AsyncStorage.setItem("logininfo", values.email);
    AsyncStorage.setItem("logininfo1", values.pass);
    // Alert.alert(
    //   "Successfully Saved in Async ",
    //   values.email + "\t \t\t" + values.pass
    // );
    // dispatch(setName(email));
    // dispatch(setAge(pass));

    AsyncStorage.getItem("logininfo").then((v) => {
      setvalue(v);
    });
    AsyncStorage.getItem("logininfo1").then((v1) => {
      setvalue1(v1);
    });
    if (value === "" || value1 === "" || value === null || value1 === null) {
      // Alert.alert(
      //   "Log In Required",
      //   "Your Email: " + value + "\nPassword" + value1
      // );
    } else {
      Alert.alert("You have Successfully Log In", value + "\n" + value1);
      navigation.navigate("Tabs");
    }
    // setemail(" ");
    // setpass(" ");
    // navigation.navigate("Home Screen", {
    //   myname: `${values.email}`,
    //   pass: `${values.pass}`,
    // });
    // } else {
    //   Alert.alert("Wrong Credials", "Your Email or Password may be Wrong ");
    // }

    // if (email === null && pass === null) {
    //   Alert.alert("Wrong Credials", "Your Email or Password may be Wrong ");
    // } else {
    //   Alert.alert("Successfully Login ", email + "\t \t\t" + pass);
    //   navigation.navigate("Home", { myname: `${email}`, pass: `${pass}` });
    // }
  };
  const [value, setvalue] = useState(null);
  const [value1, setvalue1] = useState(null);

  // const saved = () => {
  //   // if (email.length > 1) {
  //   AsyncStorage.setItem("logininfo", email);
  //   // email("");
  //   Alert.alert("Login Info Saved Successfully", email);
  //   // } else {
  //   //   Alert.alert("Plz Input Login info");
  //   // }
  // };
  const getdata = () => {
    AsyncStorage.getItem("logininfo").then((v) => {
      setvalue(v);
    });
    AsyncStorage.getItem("logininfo1").then((v1) => {
      setvalue1(v1);
    });
    if (value === "" || value1 === "" || value === null || value1 === null) {
      // Alert.alert(
      //   "Log In Required",
      //   "Your Email: " + value + "\nPassword" + value1
      // );
    } else {
      Alert.alert("You have Successfully Log In", value + "\n" + value1);
      navigation.navigate("Home Screen");
    }
  };
  return (
    <View>
      {/* <Firstnav myemail={value} mypass={value1} /> */}

      <ImageBackground
        // source={require("./background.jpg")}
        style={{ width: 400, height: 700 }}
      >
        <Formik
          initialValues={{ email: "", pass: "" }}
          onSubmit={
            submit
            //   (values) => {
            //   return Alert.alert(
            //     "Successfully Login ",
            //     values.email + "\t \t\t" + values.pass
            //   );
            // }
          }
          validationSchema={validationshema}
        >
          {({
            handleChange,
            handleSubmit,
            touched,
            errors,
            setFieldTouched,
          }) => (
            <View style={styles.mainContainer}>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 35,
                  fontWeight: "700",
                  color: "#18188d",
                  marginBottom: 20,
                }}
              >
                Login
              </Text>
              <View style={styles.inputcontainer}>
                <MaterialCommunityIcons
                  name="email"
                  size={30}
                  style={{ marginRight: 10, marginTop: 3 }}
                />
                <TextInput
                  style={styles.input}
                  value={email}
                  // secureTextEntry={true}
                  clearButtonMode="always"
                  onBlur={() => setFieldTouched("email")}
                  // onChangeText={setemail}
                  onChangeText={handleChange("email")}
                  // onChangeText={(a)=>dispatch(setName(a))}
                  placeholder="Enter Email"
                  // onPress={console.log(email)}
                />
              </View>

              <Text style={styles.formtxt}>{errors.email}</Text>
              {/* touched.email && */}

              <View style={styles.inputcontainer}>
                <MaterialCommunityIcons
                  name="lock"
                  size={30}
                  style={{ marginRight: 10, marginTop: 3 }}
                />
                <TextInput
                  style={styles.input}
                  // value={pass}
                  onBlur={() => setFieldTouched("pass")}
                  placeholder="Enter password"
                  // onChangeText={setpass}
                  onChangeText={handleChange("pass")}
                  onPress={console.log(pass)}
                  keyboardType="numeric"
                />
              </View>

              <Text style={styles.formtxt}>{errors.pass}</Text>
              <View style={styles.cont}>
                <TouchableOpacity
                  style={{}}
                  // onPress={submit}
                ></TouchableOpacity>
                <Text style={{ textAlign: "right", width: 300 }}>
                  {" "}
                  Forgot password
                </Text>

                <TouchableOpacity
                  style={styles.btn}
                  // onPress={submit}
                  onPress={handleSubmit}
                >
                  <Text style={styles.txt1}> Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
    color: "black",
    // alignItems: "center",
  },
  inputcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    height: 50,
    width: 250,
    // borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    fontWeight: "500",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
  },
  btn: {
    backgroundColor: "#0a0a5e",
    padding: 10,
    color: "white",
    width: 300,
    marginTop: 30,
    borderRadius: 5,
  },
  txt1: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  formtxt: {
    color: "red",
    fontSize: 18,
    marginLeft: 0,
  },
});

export default Forms;
