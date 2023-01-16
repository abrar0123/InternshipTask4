import React from "react";
import { StyleSheet } from "react-native";
// import Forms from "./forms";
import Stack from "./Stack";
const data = [
  {
    id: 11,
    name: "Saleem Raza",
    country: "Pakistan",
    city: "Gujrat",
    phone: "03094988113",
  },
];
const Profile = () => {
  return <Stack />;
};
// <View>
//   <Text style={styles.txt}>
//     Welcome to <Text style={{ color: "red" }}>Login</Text> Page
//   </Text>
//   <Button title="Click here !" color="red" />
//   <Stack />
{
  /* <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.flex}>
            <Text style={styles.text1}>{item.name}</Text>
            <Text style={styles.text1}>{item.country}</Text>
            <Text style={styles.text1}>{item.city}</Text>
            <Text style={styles.text1}>{item.phone}</Text>
          </View>
        )}
      /> */
}
// </View>
//   )
// }

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 70,
    marginLeft: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "orange",
  },
  text1: {
    fontSize: 22,
    fontWeight: "600",
    margin: 20,
  },
  flex: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginTop: 20,
    borderRadius: 30,
    marginRight: 150,
  },
});

export default Profile;
