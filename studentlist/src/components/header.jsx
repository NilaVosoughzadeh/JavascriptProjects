import { StyleSheet, Text, View } from "react-native-web";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Students List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F2BED1",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.1,
  },
});
