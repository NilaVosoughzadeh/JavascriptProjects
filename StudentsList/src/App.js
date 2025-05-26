import { StyleSheet, Text, View } from "react-native-web";
import Content from "./conponents/Content";
import Header from "./conponents/Header";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <View style={styles.app}>
      <Header />
      <Content />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    backgroundColor: "red",
    flex: 1,
  },
});
