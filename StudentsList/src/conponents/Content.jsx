import { StyleSheet, Text, View, ScrollView } from "react-native-web";
import List from "./List";
import { faker } from "@faker-js/faker";

const users = [
  { id: 1, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 2, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 3, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 4, name: faker.person.fullName(), image: faker.image.avatar() },
];
const Content = () => {
  return (
    <View style={styles.content}>
      {/* {users.map((user) => (
        <List id={user.id} name={user.name} image={user.image} />
      ))} */}
      <ScrollView>
        {users.map((user) => (
          <List id={user.id} name={user.name} image={user.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "lightgreen",
    flex: 0.9,
    gap: 10,

    padding: 5,
  },
});
