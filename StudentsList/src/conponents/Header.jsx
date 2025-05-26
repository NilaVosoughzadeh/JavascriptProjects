import { StyleSheet, Text, View } from "react-native-web";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>header app</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.1,
  },
});
