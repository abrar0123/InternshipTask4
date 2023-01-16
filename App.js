import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Components/Stack";
import Store from "./Rtredux/reduxProvider";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const { reduxStore, persister } = Store();
  return (
    <PersistGate loading={null} persistor={persister}>
      <Provider store={reduxStore}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
