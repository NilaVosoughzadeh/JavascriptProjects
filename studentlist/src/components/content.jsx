import { StyleSheet, View, ScrollView } from "react-native-web";
import List from "./list";
import { faker } from "@faker-js/faker";

const users = [
  { id: 1, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 2, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 3, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 4, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 5, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 6, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 7, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 8, name: faker.person.fullName(), image: faker.image.avatar() },
  { id: 9, name: faker.person.fullName(), image: faker.image.avatar() },
];
const Content = () => {
  return (
    <View style={styles.content}>
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
    backgroundColor: "#F9F5F6",
    flex: 0.9,
    gap: 10,
    padding: 5,
  },
});
