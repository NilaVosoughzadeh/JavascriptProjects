import { StyleSheet, View } from "react-native-web";
import Content from "./components/content";
import Header from "./components/header";

const App = () => {
  return (
    <View style={styles.app}>
      <Header />
      <Content />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({ app: { flex: 1 } });
