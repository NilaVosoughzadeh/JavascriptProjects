import { StyleSheet, Text, View, Image } from "react-native-web";

const List = ({ id, name, image }) => {
  return (
    <View style={styles.list}>
      <Text style={{ flex: 0.1 }}>{id}</Text>
      <Text style={{ flex: 0.6 }}>{name}</Text>
      <Image
        style={{ flex: 0.2, width: 40, height: 40, borderRadius: 5 }}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    flex: 0.2,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
});
